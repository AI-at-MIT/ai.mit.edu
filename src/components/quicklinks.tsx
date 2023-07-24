import * as Constants from './constants'

export default function QuickLinks({type, l1_l, l1_t, l2_l, l2_t, l3_l, l3_t}) {
  
    return (
        <div className={`${Constants.clip_backgrounds[type]} quicklink mb-32 grid text-center md:mb-0 md:grid-cols-3 justify-center`}>
        <a
          href={l1_l}
          className={`quicklink-text w-48 m-5 group rounded-full border border-transparent px-5 py-4 transition-colors  hover:border-neutral-700 flex flex-col justify-center items-center`}
          target="_blank"
          rel="noopener noreferrer"
        >

          <h2 className="text-2xl font-semibold">
              
            {l1_t}
        
          </h2>

        </a>

        <a
          href={l2_l}
          className="quicklink-text w-48 m-5 group rounded-full border border-transparent px-5 py-4 transition-colors  hover:border-neutral-700 flex flex-col justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            {l2_t}
          </h2>
        </a>
  
        <a
          href={l3_l}
          className="quicklink-text w-48 m-5 group rounded-full border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 flex flex-col justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold ">
            {l3_t}
          </h2>
        </a>
      </div>    
    )
  }
  