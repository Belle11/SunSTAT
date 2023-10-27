import { FiMenu } from 'react-icons/fi';

function TopBar() {
   
    return(
        <>
        <div className="fixed h-20 bg-navcolor w-screen z-50 flex items-center justify-between">
            <h2 className='inline-block ml-3 text-[45px] align-center text-light-100'><FiMenu /></h2>
            <img src="src/assets/app_logo.png" className="h-[60px] mr-5 inline-block"/>
        </div>
        </>
    )
}

export default TopBar;