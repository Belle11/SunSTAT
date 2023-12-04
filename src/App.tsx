

import Routing from "./components/application/Routing";
import { getAct } from "./components/application/WeatherAPI";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  //getAct();
  return( 


          // <AuthContextProvider>
    <Routing />

          // </AuthContextProvider>

    

  )
}

export default App;


/***
      <Login />
 */