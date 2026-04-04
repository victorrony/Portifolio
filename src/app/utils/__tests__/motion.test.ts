import { describe, it, expect } from "vitest";
import {
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer,
} from "../motion";

describe("Motion Variants", () => {
  describe("textVariant", () => {
    it("returns correct hidden state", () => {
      const variant = textVariant();
      expect(variant.hidden).toEqual({ y: -50, opacity: 0 });
    });

    it("returns correct show state", () => {
      const variant = textVariant(0.5);
      expect(variant.show).toMatchObject({
        y: 0,
        opacity: 1,
        transition: expect.objectContaining({
          type: "spring",
          delay: 0.5,
        }),
      });
    });
  });

  describe("fadeIn", () => {
    it("fades in from left correctly", () => {
      const variant = fadeIn("left");
      expect(variant.hidden).toMatchObject({
        x: 100,
        y: 0,
        opacity: 0,
      });
    });

    it("fades in from right correctly", () => {
      const variant = fadeIn("right");
      expect(variant.hidden).toMatchObject({
        x: -100,
        y: 0,
        opacity: 0,
      });
    });

    it("fades in from up correctly", () => {
      const variant = fadeIn("up");
      expect(variant.hidden).toMatchObject({
        x: 0,
        y: 100,
        opacity: 0,
      });
    });

    it("uses custom delay and duration", () => {
      const variant = fadeIn("left", "spring", 1, 2);
      expect(variant.show.transition).toMatchObject({
        type: "spring",
        delay: 1,
        duration: 2,
      });
    });
  });

  describe("zoomIn", () => {
    it("returns correct hidden state", () => {
      const variant = zoomIn();
      expect(variant.hidden).toEqual({ scale: 0, opacity: 0 });
    });

    it("returns correct show state", () => {
      const variant = zoomIn(0.5, 1);
      expect(variant.show).toMatchObject({
        scale: 1,
        opacity: 1,
        transition: expect.objectContaining({
          delay: 0.5,
          duration: 1,
        }),
      });
    });
  });

  describe("slideIn", () => {
    it("slides in from left correctly", () => {
      const variant = slideIn("left");
      expect(variant.hidden).toMatchObject({ x: "-100%", y: 0 });
    });

    it("slides in from down correctly", () => {
      const variant = slideIn("down");
      expect(variant.hidden).toMatchObject({ x: 0, y: "100%" });
    });
  });

  describe("staggerContainer", () => {
    it("returns correct stagger configuration", () => {
      const variant = staggerContainer(0.2, 0.1);
      expect(variant.show.transition).toMatchObject({
        staggerChildren: 0.2,
        delayChildren: 0.1,
      });
    });

    it("uses default values when not provided", () => {
      const variant = staggerContainer();
      expect(variant.show.transition).toMatchObject({
        staggerChildren: 0.1,
        delayChildren: 0,
      });
    });
  });
});
