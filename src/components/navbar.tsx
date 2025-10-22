import Image from "next/image";
import * as Constants from '@/components/util/constants'
const initiative = Constants.initiative_data["aim"]

import ThemeChanger from "@/components/ThemeSwitcher"
import { getAssetPath } from '@/components/util/assetPath'

export default function Navbar() {
    return (
        <header className="fixed w-full top-0 left-0 z-50">
            <nav className="blurred-bg h-20 flex items-center justify-between p-4">
                    <a href={getAssetPath("/")} className=" group transition hover:duration-500 active:duration-200 active:scale-90 hover:rotate-[360deg]">

                    <Image
                        alt="initiative-icon"
                        src={initiative.icon}
                        width="32"
                        height="32"  
                        unoptimized
                        className="mx-2 w-8 h-8 sm:w-10 sm:h-10"         
                        />
                    </a>

                    <div className="flex">
                    <div className={`mx-1 ${initiative.clip_background} text-sm md:text-lg font-semibold  flex quicklink items-center  align-vertical md:space-x-6 space-x-3`}>

                        <a href={getAssetPath("/#events")} className="quicklink-text group ">
                        Events
                        </a>

                        <a href={getAssetPath("/#about")} className={`quicklink-text `}>

                        About

                        </a>

                        <a href={getAssetPath("/#initiatives")} className="quicklink-text group">
                        Initiatives
                        </a>

                        <a href={getAssetPath("/#exec")} className="quicklink-text group">
                        Exec
                        </a>
                        <div>
                        <ThemeChanger/>

                        </div>

                        </div>  
 
                    </div>
  

                </nav>


            </header>

    )
}