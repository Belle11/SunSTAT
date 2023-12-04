import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
        {
            title: 'Home',
            path:'/',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text inline-block'
        },
    
        {
            title: 'Account',
            path:'/account_infos/account_page',
            icon: <MdIcons.MdAccountBox/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Weather Legends',
            path:'/weather_infos/Weather_Table',
            icon: <TiIcons.TiWeatherPartlySunny/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Logs',
            path:'/log_infos/Log_Table',
            icon: <BsIcons.BsStack/>,
            cName: 'nav-text'
        },
    ];

    



