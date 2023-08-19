"use client";
import BackgroundAnimation from "@/components/backgroundanimation";
import FancyLink from "@/components/fancylink";
import Image from "next/image";

export default function Home() {
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="section">
        <h1>Page Not Found</h1>
        <div className="max-w-[600px] w-auto text-left mx-auto">
          <p className="gray-text ">
            The page you're trying to reach doesn't exist. Perhaps there's a typo in the URL you've entered. If you believe this to be an error <FancyLink initiative={undefined} href="/email/contact" text="contact us"/>.
          </p>
        </div>
        <div className="w-64 mt-12 z-100">
          <a href="./" >
              <Image
                  alt="aim-logo-full"
                  src="/icons/aim-icon-full.svg"
                  layout="responsive"
                  width={100}
                  height={100}
                  quality={100}
                  className="transition duration-100 hover:opacity-50 active:scale-95"
                />
          </a>
        </div>
      </div>

    </main>
  );
}
