
import Dashboard from './Dashboard'
import Location from './Location'
import MeterPanel from './MeterPanel'
import Graph from './Graph'
import Forecast from './Forecast'
import RecommendPanel from './Recommendation'



function Home() {
  return (
    <>
    <div>

          <Dashboard/>
          <MeterPanel />
          <Graph />
          <Location />
          <Forecast />
          <RecommendPanel />
    </div>
    </>
  )
}

export default Home