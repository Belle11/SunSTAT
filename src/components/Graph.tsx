import { useEffect, useState } from "react";
import {Line} from "react-chartjs-2";

import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,//X-axis
    LinearScale, //Y-axis
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

function Graph() {
interface ChartData {
        labels: string[];
        datasets: {
          label: string;
          data: number[];
          fill: boolean;
          borderColor: string;
          backgroundColor: string;
        }[];
      }
const [chartData, setChartData] = useState<ChartData>({
    labels: [],
  datasets: [
    {
      label: "Weather Code",
      data: [],
      fill: true,
      borderColor: "",
      backgroundColor: "",
    },
  ],
})


useEffect(() => {
    const fetchData =async () => {
        
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&current_weather=true&timezone=auto';
        let response = await fetch(url);
        const data = await response.json();
        setChartData({
          labels:data.daily.time,
          datasets:[{
            label:"Weather",
            data: data.daily.weathercode,
            fill:true,
            borderColor: "rgb(88,0,81)",
            backgroundColor: "rgba(88,0,81,0.5)",
          }]
        });
    }
    fetchData()
}, [])

    return(
        <>

            <div className="graphbx bg-light-100  shadow-lg rounded-large h-auto mx-5 p-5 ">
                <h1 className='font-title font-semibold text-[15px] text-dark-mode inline-block'>Weekly Weather Forecast</h1>
                <div className="app">
                    <div className="chart">
                    <Line 
                data ={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                          display: true,
                          position: 'top',
                          labels: {
                            color: 'black',
                            font: {
                              size: 9,
                            },
                          },
                        },
                        
                      },
                      scales: {
                        x: {
                          display: true, // Display the x-axis
                          title: {
                            display: true,
                            text: 'Days', // Customize the label for the x-axis
                        
                          },
                          ticks:{
                            font: {
                                size: 9, // Adjust the font size for the x-axis labels
                                weight: 'bold', // You can also set the font weight
                              },
                          }
                        },
                        y: {
                          display: true, // Display the y-axis
                          beginAtZero: true, // Start the y-axis from 0
                          max: 100,
                          min: 0,
                          title: {
                            display: true,
                            text: 'Weather Code',
                          },
                        },
                      },
                      
                }

                }
            />

                    </div>

                </div>
           
            </div>
        </>
    );
}

export default Graph;


