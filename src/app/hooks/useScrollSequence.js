import { useEffect, useRef, useState, useCallback } from "react";

export function useScrollSequence({
  framesDir,
  frameCount,
  frameFormat = "webp",
  framePrefix = "frame-",
  frameDigits = 4,
  startProgress = 0,
  endProgress = 1,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const framesRef = useRef([]);
  const rafRef = useRef(null);
  const currentFrameRef = useRef(0);
  const isVisibleRef = useRef(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Pré-carrega todos os frames
  useEffect(() => {
    if (frameCount === 0) return; // sem frames configurados, usa fallback CSS

    const images = [];
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = String(i).padStart(frameDigits, "0");
      img.src = `${framesDir}/${framePrefix}${num}.${frameFormat}`;

      img.onload = () => {
        loaded++;
        setLoadProgress(loaded / frameCount);
        if (loaded === frameCount) setIsLoaded(true);
      };

      img.onerror = () => {
        loaded++;
        setLoadProgress(loaded / frameCount);
        if (loaded === frameCount) setIsLoaded(true);
      };

      images.push(img);
    }

    framesRef.current = images;
    return () => {
      images.forEach((img) => {
        img.src = "";
      });
    };
  }, [framesDir, frameCount, frameFormat, framePrefix, frameDigits]);

  // Desenha o frame no canvas
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || !frames[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (
      canvas.width !== rect.width * dpr ||
      canvas.height !== rect.height * dpr
    ) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    const img = frames[index];
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawW = rect.width,
      drawH = rect.height;
    let offsetX = 0,
      offsetY = 0;

    if (imgAspect > canvasAspect) {
      drawW = rect.height * imgAspect;
      offsetX = (rect.width - drawW) / 2;
    } else {
      drawH = rect.width / imgAspect;
      offsetY = (rect.height - drawH) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }, []);

  // Scroll handler com rAF
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      if (!containerRef.current || !isVisibleRef.current) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrolled = -rect.top;
        const scrollable = container.offsetHeight - window.innerHeight;
        const raw = Math.max(0, Math.min(1, scrolled / scrollable));
        const mapped = Math.max(
          0,
          Math.min(1, (raw - startProgress) / (endProgress - startProgress)),
        );

        const frameIndex = Math.round(mapped * (framesRef.current.length - 1));

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
          setCurrentFrame(frameIndex);
        }

        setScrollProgress(raw);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame, startProgress, endProgress]);

  // IntersectionObserver — só renderiza quando visível
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return {
    canvasRef,
    containerRef,
    isLoaded,
    loadProgress,
    scrollProgress,
    currentFrame,
  };
}
