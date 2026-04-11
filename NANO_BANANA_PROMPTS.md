# Nano Banana 2 — Prompts para Hero Scroll Sequence

# 60 frames · WebP · 1280px · Portfolio Victor Rony

## Setup inicial

```bash
# Instalar Nano Banana 2
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git ~/tools/nano-banana-2
cd ~/tools/nano-banana-2 && bun install && bun link
echo "GEMINI_API_KEY=SUA_CHAVE_AQUI" > ~/.nano-banana/.env
# API key grátis: aistudio.google.com/apikey

# Criar pasta de destino
mkdir -p public/frames
```

---

## Estratégia da Sequência (60 frames)

A animação conta uma história em 3 atos enquanto o usuário scrola:

| Frames | Ato           | Visual                                      |
| ------ | ------------- | ------------------------------------------- |
| 01–15  | **Código**    | Terminal escuro, linhas de código surgindo  |
| 16–35  | **Interface** | UI components se montando, design system    |
| 36–55  | **3D/Motion** | WebGL, partículas, animação cinematográfica |
| 56–60  | **Reveal**    | Logo/nome emergindo do escuro               |

---

## Comandos por Grupo (gerar 1 imagem por frame)

### ATO 1 — Frames 01–05: Terminal escuro com código

```bash
nano-banana "dark terminal screen, glowing green syntax highlighted code, React JSX components, VS Code dark theme, blue-purple ambient glow, ultra cinematic, 8K, no text overlay" --model flash -s 1280
nano-banana "close-up keyboard and dark monitor with indigo code glow, TypeScript interface definition visible, bokeh background, cinematic depth of field, dark luxury" --model flash -s 1280
nano-banana "dark coding environment, multiple monitors, node.js backend code, purple-blue neon light from screens, cinematic atmosphere, photorealistic, 8K" --model flash -s 1280
nano-banana "terminal with React component tree, dark background, indigo and violet code highlights, developer workspace, macro photography, cinematic lighting" --model flash -s 1280
nano-banana "VS Code editor dark theme, TypeScript code glowing, dark luxury office, dual monitors, cinematic 16:9, indigo ambient light" --model flash -s 1280
```

### ATO 1 — Frames 06–10: Código em movimento / digitando

```bash
nano-banana "motion blur of code scrolling on dark screen, indigo and purple light trails, abstract developer aesthetic, cinematic long exposure" --model flash -s 1280
nano-banana "extreme close-up dark keyboard keys illuminated by purple monitor glow, finger on Enter key, cinematic macro, developer aesthetic" --model flash -s 1280
nano-banana "dark screen with glowing JavaScript function, blurred background with bokeh purple lights, minimalist developer setup" --model flash -s 1280
nano-banana "overhead shot of dark desk with laptop showing React code, indigo light, notebook and coffee, cinematic top-down view" --model flash -s 1280
nano-banana "dark terminal window with git commands, green text on black, indigo accent light from left, cinematic shallow depth of field" --model flash -s 1280
```

### ATO 1 — Frames 11–15: Transição código → interface

```bash
nano-banana "split screen dark code on left, beautiful UI preview on right, indigo dividing light, cinematic transition, developer to designer" --model flash -s 1280
nano-banana "dark background with floating UI component cards, React components materializing from code, indigo glow, glass morphism, cinematic" --model flash -s 1280
nano-banana "code transforming into website wireframe, dark background, purple and blue light particles, abstract tech art, 8K" --model flash -s 1280
nano-banana "developer screen showing component preview, dark IDE on left, rendered UI on right, cinematic split, indigo blue palette" --model flash -s 1280
nano-banana "holographic UI wireframe emerging from dark background, indigo and violet light, futuristic web design, cinematic 8K" --model flash -s 1280
```

### ATO 2 — Frames 16–25: Interface e Design System

```bash
nano-banana "beautiful dark dashboard UI on screen, indigo accent colors, glassmorphism cards, cinematic product screenshot, 8K quality" --model nb2 -s 1280
nano-banana "close-up modern web interface with dark theme, gradient buttons, smooth typography, purple accent, developer portfolio mockup" --model nb2 -s 1280
nano-banana "Figma-style component library on dark background, design tokens visible, indigo color palette, professional UI kit, cinematic" --model nb2 -s 1280
nano-banana "dark UI with animated gradient text, glassmorphism cards floating, indigo and purple palette, cinematic product demo" --model nb2 -s 1280
nano-banana "responsive web design mockup on dark background, mobile tablet desktop all showing, indigo theme, professional photography" --model nb2 -s 1280
nano-banana "dark Next.js landing page design on screen, hero section with gradient, smooth scroll indicator, cinematic showcase" --model nb2 -s 1280
nano-banana "stylized dark UI with interactive elements, hover states visible, micro-animations implied, indigo glow, tech portfolio" --model nb2 -s 1280
nano-banana "navigation bar dark glass effect, blur backdrop, white text with indigo accent, minimal cinematic close-up" --model nb2 -s 1280
nano-banana "card components with gradient borders, dark background, purple-blue glow, glassmorphism, professional dev showcase" --model nb2 -s 1280
nano-banana "full stack architecture diagram, dark background, indigo connecting lines, API nodes glowing, cinematic tech infographic" --model nb2 -s 1280
```

### ATO 2 — Frames 26–35: Performance e dados

```bash
nano-banana "dark analytics dashboard with glowing charts, indigo and violet data visualizations, cinematic product UI" --model nb2 -s 1280
nano-banana "Lighthouse score 100 on dark screen, green and indigo, performance metrics glowing, web developer achievement" --model nb2 -s 1280
nano-banana "dark screen with API response JSON, beautiful syntax highlighting, indigo terminal, backend developer aesthetic" --model nb2 -s 1280
nano-banana "database schema visualization on dark background, tables connected with glowing indigo lines, cinematic backend art" --model nb2 -s 1280
nano-banana "dark CI/CD pipeline diagram, GitHub actions, green check marks glowing, indigo flow lines, cinematic DevOps" --model nb2 -s 1280
nano-banana "dark server room abstract, glowing rack lights, indigo and blue LED, cinematic tech infrastructure, 8K" --model nb2 -s 1280
nano-banana "REST API documentation on dark screen, beautiful formatting, indigo headers, developer experience focus, cinematic" --model nb2 -s 1280
nano-banana "dark performance graph with indigo line showing 100%, smooth curve, minimalist chart, developer achievement" --model nb2 -s 1280
nano-banana "Node.js backend code on dark screen with purple glow, Express routes, clean architecture, cinematic close-up" --model nb2 -s 1280
nano-banana "dark MySQL database query with beautiful results, indigo terminal, backend performance, cinematic developer art" --model nb2 -s 1280
```

### ATO 3 — Frames 36–45: WebGL e 3D

```bash
nano-banana "Three.js 3D scene on dark background, floating geometric shapes with indigo wireframe, WebGL render, cinematic" --model nb2 -s 1280
nano-banana "abstract 3D particles forming code symbols, dark background, indigo and violet glow, WebGL aesthetics, 8K" --model nb2 -s 1280
nano-banana "dark screen showing WebGL particle system, thousands of indigo dots forming React logo, cinematic tech art" --model nb2 -s 1280
nano-banana "3D rotating icosahedron wireframe, dark background, indigo glow, smooth render, Three.js aesthetic, cinematic" --model nb2 -s 1280
nano-banana "abstract code particles in 3D space, dark void background, indigo and purple light, developer creative coding" --model nb2 -s 1280
nano-banana "dark background with glowing 3D grid lines, perspective depth, indigo accent, WebGL world, futuristic" --model nb2 -s 1280
nano-banana "Three.js animated scene transition, dark to indigo gradient, particles exploding outward, cinematic WebGL" --model nb2 -s 1280
nano-banana "dark background 3D floating React and Next.js logos in indigo glow, developer branding, cinematic 8K" --model nb2 -s 1280
nano-banana "abstract wave mesh animation, dark background, indigo and violet gradient, smooth fluid dynamics, cinematic" --model nb2 -s 1280
nano-banana "dark screen showing Framer Motion animation preview, overlapping elements with indigo trails, cinematic UI" --model nb2 -s 1280
```

### ATO 3 — Frames 46–55: Animações e micro-interações

```bash
nano-banana "dark UI with scroll animation in progress, elements fading in, indigo progress indicator, cinematic UX" --model nb2 -s 1280
nano-banana "close-up of screen showing smooth page transition, black overlay lifting, indigo flash, cinematic web experience" --model nb2 -s 1280
nano-banana "dark portfolio project card hover effect, scale transform, indigo glow border, glassmorphism, cinematic" --model nb2 -s 1280
nano-banana "stagger animation of cards appearing, dark background, each card with indigo gradient, sequential reveal" --model nb2 -s 1280
nano-banana "dark screen with Framer Motion spring animation visualized, graph curves, indigo accent, developer tools" --model nb2 -s 1280
nano-banana "cinematic reveal of dark UI, clip-path animation from left, indigo light, dramatic web experience moment" --model nb2 -s 1280
nano-banana "dark background with floating code snippets and UI elements, indigo particles connecting them, creative developer" --model nb2 -s 1280
nano-banana "GSAP timeline visualization on dark screen, purple animation curves, professional motion design tool" --model nb2 -s 1280
nano-banana "dark canvas with particle system responding to mouse, indigo trails, interactive creative coding, cinematic" --model nb2 -s 1280
nano-banana "beautiful dark loading animation, indigo spinner with glow, premium web experience indicator, cinematic" --model nb2 -s 1280
```

### REVEAL — Frames 56–60: Identidade e assinatura

```bash
nano-banana "dark cinematic reveal, developer name emerging in white text from black, indigo light sweep from left, dramatic" --model nb-pro -s 1280
nano-banana "extreme dark with single indigo horizontal light line, minimalist developer brand reveal, cinematic tension" --model nb-pro -s 1280
nano-banana "dark background with Victor Rony written in light, Full Stack Developer subtitle, indigo glow, portfolio identity" --model nb-pro -s 1280
nano-banana "final dark frame with indigo particle burst fading, developer portfolio end card, dramatic cinematic close" --model nb-pro -s 1280
nano-banana "pure dark with subtle indigo gradient at bottom, breath of light, cinematic portfolio end, minimalist luxury" --model nb-pro -s 1280
```

---

## Renomear para formato correto

Após gerar as imagens, renomeie para o padrão `frame-XXXX.webp`:

```bash
# Entra na pasta onde as imagens foram salvas (geralmente ~/nano-banana-output/ ou ./output/)
cd ~/nano-banana-output/

# Renomeia sequencialmente
i=1; for f in *.webp; do
  mv "$f" "/home/victor-rony/Documents/RONY/Portifolio/public/frames/frame-$(printf '%04d' $i).webp"
  i=$((i+1))
done

echo "Frames copiados para public/frames/"
ls /home/victor-rony/Documents/RONY/Portifolio/public/frames/ | wc -l
```

---

## Verificação final

```bash
# Confirmar que há 60 frames
ls public/frames/*.webp | wc -l   # deve retornar 60

# Ver os primeiros frames
ls public/frames/ | head -5
# frame-0001.webp
# frame-0002.webp
# frame-0003.webp
# frame-0004.webp
# frame-0005.webp
```

Depois é só iniciar o dev server — o `HeroScrollSequence` detecta os frames automaticamente e ativa a sequência.

```bash
npm run dev
```
