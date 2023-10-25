

function Forecast() {

    async function getAct() {
        try {
            let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&current_weather=true&timezone=auto';
    
            let response = await fetch(url);
            let data = await response.json(); 
            
            //Must Include in className (if needed) ---> current-weather
           const CurrentWeather = document.getElementsByClassName("current-weather")
            CurrentWeather[0].innerHTML = data.daily.weathercode[0];
            
            const CurrentDate = document.getElementsByClassName("current-date");
            CurrentDate[0].innerHTML = data.daily.time[0];

            // const CurrentTemp = document.getElementsByClassName("current-temp");
            // CurrentTemp[0].innerHTML = data.current.temperature_2m[0];
            
            //WEATHER CONDITIONS CODE

            //
            if(data.daily.weathercode[0] == 95){
                CurrentWeather[0].innerHTML = "<p>Thunderstorm: Slight or moderate</p>";
            }
            else if(data.daily.weathercode[0] == 0){
                CurrentWeather[0].innerHTML = "<p>Clear sky</p>";
            }
            else if(data.daily.weathercode[0] <= 3 && data.daily.weathercode[0] >= 1){
                CurrentWeather[0].innerHTML = "<p>Mainly clear, partly cloudy, and overcast</p>";                
            }
            else if(data.daily.weathercode[0] <= 48 && data.daily.weathercode[0] >= 45){
                CurrentWeather[0].innerHTML = "<p>Fog and depositing rime fog</p>";
            }
            else if(data.daily.weathercode[0] <= 55 && data.daily.weathercode[0] >= 51){
                CurrentWeather[0].innerHTML = "<p>Drizzle: Light, moderate, and dense intensity</p>";
            }
            else if(data.daily.weathercode[0] <= 55 && data.daily.weathercode[0] >= 51){
                CurrentWeather[0].innerHTML = "<p>Freezing Drizzle: Light and dense intensity</p>";
            }
            else if(data.daily.weathercode[0] == 56 || data.daily.weathercode[0] == 57){
                CurrentWeather[0].innerHTML = "<p>Rain: Slight, moderate and heavy intensity</p>";
            }
            else if(data.daily.weathercode[0] <= 65 && data.daily.weathercode[0] >= 60){
                CurrentWeather[0].innerHTML = "<p>Freezing Rain: Light and heavy intensity</p>";
            }      
            else if(data.daily.weathercode[0] == 66 || data.daily.weathercode[0] == 67){
                CurrentWeather[0].innerHTML = "<p>Snow fall: Slight, moderate, and heavy intensity</p>";
            }
            else if(data.daily.weathercode[0] >= 80 && data.daily.weathercode[0] <= 82){
                CurrentWeather[0].innerHTML = "<p>Rain showers: Slight, moderate, and violent</p>";
            }
            else if(data.daily.weathercode[0] >= 96 && data.daily.weathercode[0] <= 99){
                CurrentWeather[0].innerHTML = "Thunderstorm with slight and heavy hail";
            }









            
    
        } catch (error) {
            console.error(`ERROR:${error}`)
        }
    
    
    }

    getAct();
    return(
        <>
            <div className="calendarbx bg-light-100  shadow-lg rounded-large h-40 mb-10 mx-5 p-5">
                <h1 className="font-title font-normal text-dark-mode ">Current Weather Status</h1>
                
                {/* Current Weather data*/}

                 {/* Current date*/}
                 <h1 className="font-title font-normal text-[12px] text-dark-mode inline-block">Date: &nbsp;</h1>
                 <h1 className="font-title text-[12px] text-dark-mode inline-block current-date"> </h1> <br></br>

                 {/* Weather Status*/}
                <h1 className="font-title font-normal text-[12px] text-dark-mode inline-block">Weather: &nbsp;</h1>
                 <h1 className="font-title text-[12px] text-dark-mode current-weather inline-block"> </h1>
                
               

                 
                
            </div>
        </>
    );
}

export default Forecast;