import * as Constants from "./constants";

export default function FancyLink({type, href, text} : {type: string, href:string, text: string}) {
    if (type=="" || type == undefined){
        return (
        <a href={href} className="underline inline-block group transition-transform  motion-reduce:transform-none duration-100 hover:opacity-50 active:scale-95">{text}</a>
            
        )
    }
    return (
        
        <div className="inline-block group transition-transform  motion-reduce:transform-none duration-100 hover:opacity-50 active:scale-95"><a href={href} className={`quicklink ${Constants.clip_backgrounds[type]} transition-transform  motion-reduce:transform-none quicklink`}>{text}</a></div>
    )
}

