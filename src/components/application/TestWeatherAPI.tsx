export async function NewAct() {
    try {
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&current=temperature_2m,is_day,rain,weathercode,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&timezone=auto';

        let response = await fetch(url);
        let data = await response.json(); 
        
        
        const LogTable = document.getElementsByClassName("tblCODE");
        
        for(let i = 0; i < data.daily.weathercode.length; i++){
            LogTable[i].innerHTML = data.daily.weathercode;

        }
    } catch (error) {
        console.error(`ERROR:${error}`)
    }   
}

