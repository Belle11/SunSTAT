
import Home from "./components/application/home/Home";
import Routing from "./components/application/Routing";
import { getAct } from "./components/application/WeatherAPI";
import { AuthProvider } from "./components/autroute";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import { Auth } from "./components/auth";

function App() {
  getAct();
  return( 

    <div>
        <Auth /> 
        {/* Uncomment Auth for viewing of Home page etc. */}
        {/* Comment routing for testing of login */}
        <Routing />
    </div>


    


  )
}

export default App;


/***
      <Login />
 */