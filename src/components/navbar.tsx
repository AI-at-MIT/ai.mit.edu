import Image from "next/image";
import * as Constants from '@/components/constants'
const initiative = Constants.initiative_data["aim"]


export default function Navbar() {
    return (
        <header className="fixed w-full top-0 left-0 z-50">
            <nav className="backdrop-blur-md bg-black/30 h-20 flex items-center justify-between p-4">
                    
                    <a href={"/"} className="quicklink-text group ">

                    <Image
                        alt="initiative-icon"
                        src={initiative.icon}
                        width="32"
                        height="32"  
                        unoptimized
                        className="mx-2 w-10 h-10"         
                        />
                    </a>


                    <div className={`mx-2 ${initiative.clip_background} flex quicklink space-x-6`}>


                        <a href={"/#events"} className="quicklink-text group ">
                        <span className="text-lg font-semibold">{"Events"}</span>
                        </a>

                        <a href={"/#about"} className={`quicklink-text `}>

                    <span className="text-lg text-center font-semibold">{"About"}</span>

                    </a>
            
                        <a href={"/#initiatives"} className="quicklink-text group">
                        <span className="text-lg font-semibold ">{"Initiatives"}</span>
                        </a>

                        <a href={"/#exec"} className="quicklink-text group">
                        <span className="text-lg font-semibold ">{"Exec"}</span>
                        </a>
                    </div>   

                </nav>


            </header>

    )
}