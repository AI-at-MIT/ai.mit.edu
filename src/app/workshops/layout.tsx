import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI@MIT Workshops",
  description:
    "Bi-weekly AI learning sessions covering full-stack deep learning development from PyTorch basics to serving recent models. No experience required.",
  keywords: [
    "ai workshops mit",
    "aim workshops",
    "ai at mit workshops",
    "ai club mit workshops",
    "mit ai club workshops",
    "mit artificial intelligence club workshops",
    "mit machine learning club workshops",
    "deep learning",
    "PyTorch",
    "machine learning tutorials",
    "neural networks",
    "CNN",
  ],
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}