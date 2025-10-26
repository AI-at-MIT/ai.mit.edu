import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI@MIT Past Executive Members - Alumni Network",
  description:
    "Meet the past executive members of AI@MIT from 2022 onwards. Connect with our alumni network of AI leaders and innovators.",
  keywords: [
    "ai@mit members",
    "aim mit members",
    "ai at mit members",
    "ai club mit members",
    "mit ai club members",
    "mit artificial intelligence club members",
    "mit machine learning club members",
  ],
  openGraph: {
    title: "AI@MIT Past Executive Members - Alumni Network",
    description:
      "Meet the past executive members of AI@MIT from 2022 onwards. Connect with our alumni network.",
    url: "https://aiatmit.com/pastexec",
  },
};

export default function PastExecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}