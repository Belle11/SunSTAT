
import Dashboard from './Dashboard'
import Location from './Location'
import MeterPanel from './MeterPanel'
import Graph from './Graph'
import Forecast from './Forecast'
import RecommendPanel from './Recommendation'
import CostForecast from './CostForecast'


function Home() {
  return (
    <>
    <div>

          <Dashboard/>
          <MeterPanel />
          <Graph />
          <CostForecast />
          <Location />
          <Forecast />
          <RecommendPanel />

    </div>
    </>
  )
}

export default Home