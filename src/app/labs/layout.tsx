import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI@MIT Labs",
  description:
    "Join MIT's premier AI project incubator. Receive funding, mentorship, and resources to build innovative AI products.",
  keywords: [
    "aim labs",
    "ai at mit labs", 
    "ai club mit labs",
    "mit ai club labs",
    "mit artificial intelligence club labs",
    "mit artificial intelligence labs",
    "mit machine learning labs",
    "artificial intelligence",
    "machine learning",
    "student organization",
  ],
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}