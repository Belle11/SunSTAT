import { getAct } from "./WeatherAPI";

function Forecast() {
    getAct();
    return(
        <>
            <div className="calendarbx bg-light-100  shadow-lg rounded-large h-40 mb-10 mx-5 p-5">
                <h1 className="font-title font-semibold text-dark-mode ">Current Weather Status</h1>
                
                {/* Current Weather data*/}

                 {/* Current date*/}
                 <h1 className="font-title font-normal text-[12px] text-dark-mode inline-block">Date: &nbsp;</h1>
                 <h1 className="font-title text-[12px] text-dark-mode inline-block current-date"> </h1> <br></br>

                 {/* Weather Status*/}
                <h1 className="font-title font-normal text-[12px] text-dark-mode inline-block">Weather: &nbsp;</h1>
                 <h1 className="font-title text-[12px] text-dark-mode current-weather inline-block"> </h1> <br></br>
                
                 {/* Weather Status*/}
                 <h1 className="font-title font-normal text-[12px] text-dark-mode inline-block">Temperature: &nbsp;</h1>
                 <h1 className="font-title text-[12px] text-dark-mode current-temp inline-block"> </h1> <br></br>
            
                 
                
            </div>
        </>
    );
}

export default Forecast;