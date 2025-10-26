import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI@MIT Permeate",
  description:
    "Implementing state-of-the-art AI solutions for non-profits while ensuring job security.",
  keywords: [
    "aim permeate",
    "ai at mit permeate",
    "ai club mit permeate",
    "mit ai club permeate",
    "mit artificial intelligence club permeate",
    "mit machine learning club permeate",
    "artificial intelligence",
    "machine learning",
    "student organization",
  ],
};

export default function PermeateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}