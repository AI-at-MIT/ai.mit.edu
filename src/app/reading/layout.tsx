import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI@MIT Reading Group",
  description:
    "Regular dinners to review interesting AI papers. Featuring paper authors presenting their work.",
  keywords: [
    "ai reading group mit",
    "aim reading group",
    "ai at mit reading group",
    "ai club mit reading group",
    "mit ai club reading group",
    "mit artificial intelligence club reading group",
    "mit machine learning club reading group",
    "artificial intelligence",
    "machine learning",
    "student organization",
  ],
};

export default function ReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}