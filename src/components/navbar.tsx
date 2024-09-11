import Image from "next/image";
import * as Constants from '@/components/util/constants'
const initiative = Constants.initiative_data["aim"]

import ThemeChanger from "@/components/ThemeSwitcher"

export default function Navbar() {
    return (
        <header className="fixed w-full top-0 left-0 z-50">
            <nav className="blurred-bg h-20 flex items-center justify-between p-4">
                    <a href={"/"} className=" group transition hover:duration-500 active:duration-200 active:scale-90 hover:rotate-[360deg]">

                    <Image
                        alt="initiative-icon"
                        src={initiative.icon}
                        width="32"
                        height="32"  
                        unoptimized
                        className="mx-2 w-10 h-10"         
                        />
                    </a>

                    <div className="flex">
                    <div className={`mx-1 ${initiative.clip_background} text-base md:text-lg font-semibold flex quicklink items-center md:space-x-6 space-x-4`}>

                        <a href={"/#events"} className="quicklink-text group ">
                        Events
                        </a>

                        <a href={"/#about"} className={`quicklink-text `}>

                        About

                        </a>

                        <a href={"/#initiatives"} className="quicklink-text group">
                        Initiatives
                        </a>

                        <a href={"/#exec"} className="quicklink-text group">
                        Exec
                        </a>
                        <div>

                        </div>

                        </div>  
                        <ThemeChanger/>
 
                    </div>
  

                </nav>


            </header>

    )
}