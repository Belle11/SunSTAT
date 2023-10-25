import Menu from "./components/Menu";

import Dashboard from "./components/Dashboard";
import MeterPanel from "./components/MeterPanel";
import Graph from "./components/Graph";
import Forecast from "./components/Forecast";

function App() {
  return( 
    <div>
          <Menu/>
          
          <Dashboard/>
          <MeterPanel />
          <Graph />
          <Forecast />
    </div>


  )
}

export default App;
