import * as Constants from "./constants";

export default function FancyLink({initiative, href, text} : {initiative: Constants.InitiativeInterface|undefined, href:string, text: string}) {
    if (initiative == undefined){
        return (
        <a href={href} className="underline inline-block group transition-transform  motion-reduce:transform-none duration-100 hover:opacity-50 active:scale-95">{text}</a>
            
        )
    }
    return (
        
        <div className="inline-block group transition-transform  motion-reduce:transform-none duration-100 hover:opacity-50 active:scale-95"><a href={href} className={`quicklink ${initiative.clip_background} transition-transform  motion-reduce:transform-none quicklink`}>{text}</a></div>
    )
}

