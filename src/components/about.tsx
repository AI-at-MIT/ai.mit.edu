export default function About({blurb}: {blurb: string}) {

    if (typeof blurb !== 'string') {
      throw new Error('blurb must be a string'); 
    }

    return (
      <div className="">
  
        <h1>About</h1>
  
        <div className="snap-always snap-center mb-32 max-w-[1000px]  center-text w-3/4 mx-auto">
  
          
          <p className="gray-text ">
            {blurb}
    
          </p>
        </div>
  
      </div>
    )
  }
  