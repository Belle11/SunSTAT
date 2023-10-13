import {Line} from "react-chartjs-2";

import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,//X-axis
    LinearScale, //Y-axis
    PointElement
} from 'chart.js';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Graph() {

    //FUNCTION TO GET WEATHER DATA FROM API



async function getAct() {
    try {
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&current_weather=true&timezone=auto';

        let response = await fetch(url);
        let data = await response.json(); 
        
        //Must Include in className (if needed) ---> current-weather
       const CurrentWeather = document.getElementsByClassName("current-weather")
        CurrentWeather[0].innerHTML = data.daily.weathercode;
        

        //Dates
        // DailyTime = document.getElementsByClassName("daily-time")
        // DailyTime[0].innerHTML = data.daily.time;

        
       // const max_temp = document.getElementsByClassName("max_temp")
        
        

    } catch (error) {
        console.error(`ERROR:${error}`)
    }


}//END OF FUNCTION HERE

getAct();//CALLING THE FUNCTION


const graph_data = {
    
    labels: ["Mon", "Tues", "Wed"],
    datasets: [{
        labels: 'Weather Code',
        data: [6,3, 9],
        backgroundcolor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4,

    }]
}

const options ={
    plugins:{
        legend:true
    },
    scale:{
        y:{
            // min: 3,
            // max: 6
        }
    }
}
    return(
        <>

            <div className="graphbx bg-light-100  shadow-lg rounded-large h-60 mx-5 p-5 ">
                <h1 className='font-title font-normal text-[15px] text-dark-mode inline-block'></h1>

                <Line
                    data= {graph_data}
                    options={options}
                > </Line>
            </div>
        </>
    );
}

export default Graph;