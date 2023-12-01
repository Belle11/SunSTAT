import { getAct } from "../WeatherAPI";

function Location() { 
    getAct()
    return (
        <>
              <div className="calendarbx bg-light-100 font-title shadow-lg rounded-large h-40 mb-10 mx-5 p-5">
              <h1 className="font-title font-semibold text-dark-mode ">INFORMATION</h1>
                <div className="mt-2">
                <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Longitude: &nbsp;</h1>
              <h1 className="font-title text-[13px] text-dark-mode inline-block current-longitude"> </h1> <br></br>
              
              <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Latitude: &nbsp;</h1>
              <h1 className="font-title text-[13px] text-dark-mode inline-block current-latitude"> </h1> <br></br>
              
              <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Timezone: &nbsp;</h1>
              <h1 className="font-title text-[13px] text-dark-mode inline-block current-timezone"> </h1> <br></br>

                </div>


              
              </div>

        </>
        
            
    
    )
  }
  
  export default Location;