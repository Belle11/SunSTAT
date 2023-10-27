import { getAct } from "./WeatherAPI";

function RecommendPanel() {
    getAct()
    return(
    <>
            <div className="calendarbx bg-light-100  shadow-lg rounded-large h-40 mb-10 mx-5 p-5">
                <h1 className="font-title font-semibold text-dark-mode ">Utility Recommendation</h1>
                
                {/* Current Weather data*/}

                 {/* Current date*/}
                 <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Status: &nbsp;</h1>
                 <h1 className="font-title text-[13px] text-dark-mode inline-block recomm-stats"> </h1> <br></br>

                 <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Consumption: &nbsp;</h1>
                 <h1 className="font-title text-[13px] text-dark-mode inline-block recomm-stats"><i>Recommended consumption</i> </h1> <br></br>

                 <h1 className="font-title font-bold text-[13px] text-dark-mode inline-block">Save: &nbsp;</h1>
                 <h1 className="font-title text-[13px] text-dark-mode inline-block recomm-stats"><i>Save up to based on recommendations</i> </h1> <br></br>
                 

                
            </div>
        
    </>
    )
}

export default RecommendPanel;
