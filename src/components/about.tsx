export default function About({blurb}: {blurb: string}) {

    if (typeof blurb !== 'string') {
      throw new Error('blurb must be a string'); 
    }

    return (
      <div >
  
        <h1>About</h1>
  
        <div className="mb-32 max-w-[1000px]  center-text w-3/4 mx-auto">
  
          
        <p>
          {blurb}
  
        </p>
        </div>
  
      </div>
    )
  }
  