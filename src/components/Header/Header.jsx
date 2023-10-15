import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const isMobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt='Logo' className='logo' />
      {!menuOpened && isMobile ? (
        <div>
          <img src={Bars} alt='Bars' />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plants</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
