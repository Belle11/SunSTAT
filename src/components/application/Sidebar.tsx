import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import app_logo from 'public/icons/app_logo.png'

function TopBar() {

   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);


    return(
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="shadow-md shadow-navcolor fixed h-20 bg-navcolor w-screen z-10 flex items-center justify-between navbar">
            <Link to="#"className='menu-bars inline-block ml-3 text-[40px] align-center text-light-100'><FaBars onClick={showSidebar} /></Link>
        {/* LOGO HERE */}
            <img src="../public/icons/app_logo.png" className="h-[60px] mr-5 inline-block" alt="applogo"/>
        </div>

        <nav className={sidebar ? 'nav-menu active z-20' : 'nav-menu z-20'}>
            <ul className="nav-menu-items list-disc">
                <li className="navbar-toggle ">
                    <Link to='#' className='menu-bars inline-block ml-3 text-[40px]align-center text-light-100'>
                        <AiOutlineClose  onClick={showSidebar} />
                    </Link>
                </li>

                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                        <Link to={item.path} >{item.icon}<span >{item.title}</span> </Link>
                        </li>
                    );
                })}

                
            </ul>
        </nav>

        </IconContext.Provider>
        </>
    );
}

export default TopBar;