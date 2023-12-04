
import TopBar from './Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home/Home';
import Weather_Table from './weather_infos/Weather_Table';
import Log_Table from './log_infos/Log_Table';
import Account_Page from './account_infos/Account_Page';



function Routing() {
  
  return (
        <>

        <Router>
        <TopBar />
                <Routes>                   
                      <Route path='/' element={<Home />} />
                      <Route path='/account_infos/account_page' element={<Account_Page />} />
                      <Route path='/weather_infos/Weather_Table' element={<Weather_Table />} />
                      <Route path='/log_infos/Log_Table' element={<Log_Table />} />
                </Routes>
        </Router>            
        </>

  )
}

export default Routing