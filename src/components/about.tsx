export default function About({blurb}: {blurb: string}) {

    if (typeof blurb !== 'string') {
      throw new Error('blurb must be a string'); 
    }

    return (
      <div className="">
  
        <h1>About</h1>
  
        <div className="snap-always snap-center  max-w-[1000px]  center-text w-3/4 mx-auto">
  
          
          <p className="gray-text ">
            {blurb.split('\n').map((str, index, array) => 
              index === array.length - 1 ? str : <>
                {str}<br />
              </>
            )}

    
          </p>
        </div>
  
      </div>
    )
  }
  