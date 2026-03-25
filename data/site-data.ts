import { IconType } from "react-icons";
import { FiActivity, FiCode, FiCpu, FiGlobe, FiSmartphone } from "react-icons/fi";

export type Service = {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: IconType;
  category: "Web" | "App" | "Software" | "AI" | "Marketing";
};

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Conversion-focused websites, SaaS platforms, and high-performance storefronts.",
    features: ["Next.js architecture", "SEO-first engineering", "Core Web Vitals optimization"],
    price: "Starting at $2,000",
    icon: FiGlobe,
    category: "Web"
  },
  {
    title: "App Development",
    description: "Cross-platform mobile apps designed for retention and growth.",
    features: ["iOS + Android delivery", "Elegant UI systems", "Analytics instrumentation"],
    price: "Starting at $3,500",
    icon: FiSmartphone,
    category: "App"
  },
  {
    title: "Software Development",
    description: "Custom internal tools and scalable products tailored to operations.",
    features: ["Secure APIs", "Dashboard architecture", "Workflow automation"],
    price: "Starting at $4,000",
    icon: FiCode,
    category: "Software"
  },
  {
    title: "AI Video Generation",
    description: "AI-powered cinematic ad videos and branded product storytelling.",
    features: ["Script-to-video pipeline", "Voice + avatar generation", "Creative direction support"],
    price: "Starting at $1,500",
    icon: FiCpu,
    category: "AI"
  },
  {
    title: "Social Media Marketing",
    description: "Content systems and paid strategy to scale audience and revenue.",
    features: ["Platform-specific playbooks", "Campaign creatives", "Weekly performance reporting"],
    price: "Starting at $900",
    icon: FiActivity,
    category: "Marketing"
  }
];

export const projects = [
  { title: "NovaCommerce", niche: "Luxury E-commerce", category: "Web", impact: "+188% Conversion Lift" },
  { title: "PulseFit Mobile", niche: "HealthTech App", category: "App", impact: "120K Downloads" },
  { title: "OpsPilot AI", niche: "SaaS Automation", category: "AI", impact: "-43% Processing Time" },
  { title: "Helio CRM Suite", niche: "Enterprise Software", category: "Software", impact: "+62% Team Efficiency" },
  { title: "Eden Skincare Reels", niche: "Brand Marketing", category: "Marketing", impact: "4.2M Organic Views" },
  { title: "Strata Realty Web", niche: "Real Estate", category: "Web", impact: "+95% Lead Growth" }
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, NovaCommerce",
    quote: "Radhika transformed our online presence into a premium sales engine. The execution quality felt enterprise-grade."
  },
  {
    name: "Sara Whitman",
    role: "Marketing Director, Eden Labs",
    quote: "Their design intuition and growth strategy gave us immediate traction across social channels."
  },
  {
    name: "Daniel Cruz",
    role: "CEO, OpsPilot",
    quote: "From concept to launch, every detail was intentional. Fast delivery without compromising polish."
  }
];

export const valueProps = ["Fast delivery", "Premium design", "Client-focused approach", "Affordable pricing"];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { label: "Projects delivered", value: "120+" },
  { label: "Client retention", value: "96%" },
  { label: "Average rating", value: "4.9/5" }
];

export const aboutPillars = [
  {
    title: "Mission",
    text: "To help ambitious brands scale through beautiful product experiences and measurable digital growth."
  },
  {
    title: "Vision",
    text: "To become the most trusted boutique agency for high-performance websites, software, and AI-led marketing."
  },
  {
    title: "Founder",
    text: "Radhika leads strategy, design direction, and delivery with a relentless focus on impact and craftsmanship."
  }
];
