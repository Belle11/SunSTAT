import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { rdb } from "../../../firebase";
import { onValue } from "firebase/database";
import { ref } from "firebase/database";

import {
  Chart as ChartJs,
  LineElement,
  CategoryScale, //X-axis
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
);

function CostForecast() {
  const [data, setData] = useState("");
  const [datas, setDatas] = useState([]);
  const [chartData, setChartData] = useState({
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
  });

  const handleTodoChange = (e) => {
    setData(e.target.value);
  };

  // Read data from Firebase Realtime Database
  useEffect(() => {
    onValue(ref(rdb), (snapshot) => {
      const rdata = snapshot.val();
      if (rdata !== null) {
        const newData = Object.keys(rdata.Pushing).map((key) => rdata.Pushing[key]);
        setDatas(newData);
      }
    });
  }, []);

  // Fetch data from the external API and update chartData
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=14.6042&longitude=120.9822&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,precipitation_sum&current_weather=true&timezone=auto';
        let response = await fetch(url);
        const externalData = await response.json();

        setChartData({
          labels: externalData.daily.time,
          datasets: [{
            label: "Current Value",
            data: datas,
            fill: true,
            borderColor: "rgb(0,38,255)",
            backgroundColor: "rgba(0,38,255,0.47)",
          }],
        });
      } catch (error) {
        console.error('Error fetching external data:', error);
      }
    };

    fetchData();
  }, [datas]); // Re-fetch when datas changes

  return (
    <div className="graphbx bg-light-100  shadow-lg rounded-large h-auto mx-5 p-5 ">
                        <h1 className='font-title font-semibold text-[15px] text-dark-mode inline-block'>Cost Foreasting</h1>
      <div className="app">
        <div className="chart">
          <Line
            data={chartData}
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
                  display: true,
                  title: {
                    display: true,
                    text: 'Days',
                  },
                  ticks: {
                    font: {
                      size: 9,
                      weight: 'bold',
                    },
                  },
                },
                y: {
                  display: true,
                  beginAtZero: true,
                  max: 5,
                  min: 0,
                  title: {
                    display: true,
                    text: 'Current Value',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CostForecast;
