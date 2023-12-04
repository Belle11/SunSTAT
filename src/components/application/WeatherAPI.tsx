import { db } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";
export async function getAct() {
    try {
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&current=temperature_2m,is_day,rain,weathercode,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&timezone=auto';

        let response = await fetch(url);
        let data = await response.json(); 
        
        const DataCollection     = collection(db, "Weather_code_collection")
        
        const createWeatherCodeTime = async () => {
            for (let i = 0; i < data.daily.weathercode.length; i++) {
               await addDoc(DataCollection, {weather_code: data.daily.weathercode[i], code_date: data.daily.time[i]})
                
            }
        }

        createWeatherCodeTime()

        
        //Must Include in className (if needed) ---> current-weather
       const CurrentWeather = document.getElementsByClassName("current-weather")
        CurrentWeather[0].innerHTML = data.daily.weathercode[0];
        
        const CurrentDate = document.getElementsByClassName("current-date");
        CurrentDate[0].innerHTML = data.daily.time[0];

        const CurrentTemp = document.getElementsByClassName("current-temp")
        CurrentTemp[0].innerHTML = data.current.temperature_2m;

        const CurrentLongitude = document.getElementsByClassName("current-longitude")
        const longitudeValue = data.longitude;
        const formattedLongitude = longitudeValue + '°N'; // You can replace '°' with the character you want to add
        CurrentLongitude[0].innerHTML = formattedLongitude;
       

        const CurrentLatitude = document.getElementsByClassName("current-latitude")
        const latitudeValue = data.latitude;
        const formattedLatitude = latitudeValue + '°E';
        CurrentLatitude[0].innerHTML = formattedLatitude;

        const CurrentTimezone = document.getElementsByClassName("current-timezone")
        CurrentTimezone[0].innerHTML = data.timezone;


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
        else if(data.daily.weathercode[0] <= 65 && data.daily.weathercode[0] >= 60){
            CurrentWeather[0].innerHTML = "<p>Rain: Slight, moderate and heavy intensity</p>";
        }      

        else if(data.daily.weathercode[0] >= 80 && data.daily.weathercode[0] <= 82){
            CurrentWeather[0].innerHTML = "<p>Rain showers: Slight, moderate, and violent</p>";
        }
        else if(data.daily.weathercode[0] >= 96 && data.daily.weathercode[0] <= 99){
            CurrentWeather[0].innerHTML = "Thunderstorm with slight and heavy hail";
        }


        /**
         * RECOMMENDATION PANEL
         */
        let sum = 0;
        for(let i = 0; i < data.daily.weathercode.length; i++){
            sum += data.daily.weathercode[i];
            
        }
        
        let avg = sum / data.daily.weathercode.length;

        if(avg >=0 && avg <= 55){
            document.getElementsByClassName('recomm-stats')[0].innerHTML= 'Normal Consumption';
            document.getElementsByClassName('recomm-save')[0].innerHTML= 'Use energy wisely';

        }else if(avg >= 60 || avg <= 65){
            document.getElementsByClassName('recomm-save')[0].innerHTML= 'At least 60%';
            document.getElementsByClassName('recomm-stats')[0].innerHTML= 'Moderate Consumption';
        }else if(avg > 65){
            document.getElementsByClassName('recomm-stats')[0].innerHTML= 'YOU HAVE TO SAVE FOR EMERGENCY!!';
            document.getElementsByClassName('recomm-save')[0].innerHTML= 'Bad weather, save all energy'; 
        }



    } catch (error) {
        console.error(`ERROR:${error}`)
    }   
}

