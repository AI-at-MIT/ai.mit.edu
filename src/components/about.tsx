export default function About({blurb}: {blurb: string}) {

    return (
      <div className="section">
  
        <h1>About</h1>
  
        <div className="max-w-[600px] w-auto text-left mx-auto">
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
  