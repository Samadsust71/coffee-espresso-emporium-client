import React from "react";
import logo from '../assets/logo1.png'

const Header = () => {
  return (
    <div className="navbar justify-center bg-header bg-center bg-cover bg-no-repeat text-white py-4">
      <div className="text-center flex items-center gap-3">

        <img src={logo} className="h-20 w-20 object-cover" alt="logo" />
        <h1 className="lg:text-6xl text-3xl text-center">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
