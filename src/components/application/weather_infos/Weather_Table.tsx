

function Weather_Table() {
  return (
    <div className='weathertbl pt-[80px]'>
      <h1 className='text-light-100  mt-[10px] text-[20px] text-center font-title font-bold'>WMO Weather interpretation codes (WW)</h1>

      <table className='text-light-100 mx-7 leading-[20px] mt-5 border '>
        <tr className=''>
          <th>Code</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>0</td>
          <td>Clear Sky</td>
        </tr>

        <tr>
          <td>1,2,3</td>
          <td>Mainly clear, partly cloudy, and overcast</td>
        </tr>


        <tr>
          <td>51, 53, 55</td>
          <td>Drizzle: Light, Moderate, and dense intensity</td>
        </tr>
  
        <tr>
          <td>61, 63, 65</td>
          <td>Rain: Slight, moderate and heavy intensity</td>
        </tr>

        <tr>
          <td>80, 81, 82</td>
          <td>Rain Showers: Slight, moderate and violent</td>
        </tr>

        <tr>
          <td>95</td>
          <td>	Thunderstorm: Slight or moderate</td>
        </tr>

        <tr>
          <td>96, 99</td>
          <td>	Thunderstorm with slight and heavy hail</td>
        </tr>

      </table>
      </div>
  )
}

export default Weather_Table