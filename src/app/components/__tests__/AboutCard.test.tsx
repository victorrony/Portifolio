import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutCard } from "../about/AboutCard";

describe("AboutCard", () => {
  const mockProps = {
    index: 0,
    title: "Web Developer",
    icon: "/assets/web.png",
  };

  it("renders without crashing", () => {
    render(<AboutCard {...mockProps} />);
    expect(screen.getByText("Web Developer")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<AboutCard {...mockProps} />);
    const title = screen.getByText("Web Developer");
    expect(title).toHaveClass("text-white");
  });

  it("renders image with correct alt text", () => {
    render(<AboutCard {...mockProps} />);
    const image = screen.getByAltText("Web Developer");
    expect(image).toBeInTheDocument();
  });

  it("renders different titles correctly", () => {
    const customProps = { ...mockProps, title: "Full Stack Developer" };
    render(<AboutCard {...customProps} />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  });
});
