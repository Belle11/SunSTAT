import { useState } from 'react';

function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="menubx">
      <div className="top-nav">
        <div className="logo">
          <img src="public/images/logo.png" className="logo-image" alt="Logo" />
          <h1>SUNSTATS</h1>
        </div>
        <div className="user">
    
            <a href="navbar" onClick={() => { setShowSidebar(!showSidebar); console.log(showSidebar); }}>     
            <img src="public/images/user.png" alt="User Icon" />
            </a>
          
        </div>
      </div>

      {showSidebar && (
        <div className="sidebar">
          <ul>
            <li><a href="#">User Profile</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
