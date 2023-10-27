import Dashboard from "./components/Dashboard";
import MeterPanel from "./components/MeterPanel";
import Graph from "./components/Graph";
import Forecast from "./components/Forecast";
import RecommendPanel from "./components/Recommendation";
import TopBar from "./components/topbar";
function App() {
  return( 
    <div>
          <TopBar/>
          <Dashboard/>
          <MeterPanel />
          <Graph />
          <Forecast />
          <RecommendPanel />
    </div>


  )
}

export default App;
