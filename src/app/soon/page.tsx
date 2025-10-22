"use client";
import FancyLink from "@/components/fancylink";
import Image from "next/image";
import * as Constants from "@/components/util/constants";
import Navbar from '@/components/navbar'
import { getAssetPath } from '@/components/util/assetPath'

export default function Home() {

  return (
    <main>
      <Navbar/>
      <div className="section">
        <h1>Coming Soon</h1>
        <div className="max-w-[600px] w-auto text-left mx-auto">
          <p className="gray-text ">
            {`The link you've pressed leads to a page that isn't yet active. It's likely you're trying to reach a page that is only active during a certain period of time (i.e. an application) or service that is still being developed. Check again soon for the desired page. If you believe this to be an error`} <FancyLink initiative={undefined} href={Constants.emails["website"]} text="contact us"/>.
          </p>
        </div>
        <div className="w-64 mt-12 z-100">
          <a href={getAssetPath("/")} >
              <Image
                  alt="aim-logo-full"
                  src={getAssetPath("/icons/aim-icon-full.svg")}
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
