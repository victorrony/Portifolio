// Type definitions for Portfolio project

export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ProjectTag {
  name: string;
  color?: string;
  icon?: string;
  descricao?: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  source_code_link_vercel?: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailRequestBody extends ContactFormData {
  to_name: string;
}

export interface MotionVariant {
  hidden: {
    [key: string]: any;
  };
  show: {
    [key: string]: any;
  };
}

export interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
}

// Component Props Types
export interface AboutCardProps {
  index: number;
  title: string;
  icon: string;
}

export interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  source_code_link_vercel?: string;
}

export interface ExperienceCardProps {
  experience: Experience;
}

export interface BallCanvasProps {
  icon: string;
  name: string;
  index: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isSuccess: boolean;
  submittedEmail?: string;
  context?: string;
}

export interface Canvas3DErrorBoundaryProps {
  children: React.ReactNode;
  fallbackMessage?: string;
  showRetry?: boolean;
}

// 3D Model Props
export interface ComputersProps {
  isMobile?: boolean;
}

export interface BallProps {
  imgUrl: string;
  name?: string;
}

export interface SimpleImageIconProps {
  icon: string;
  name: string;
}

// Animation Types
export type Direction = "left" | "right" | "up" | "down";
export type AnimationType = "spring" | "tween" | "inertia";

export interface FadeInOptions {
  direction?: Direction;
  type?: AnimationType;
  delay?: number;
  duration?: number;
}
