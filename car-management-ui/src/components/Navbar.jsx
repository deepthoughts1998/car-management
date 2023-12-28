import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <div className="bg-black">
      <div className="h-16 flex items-center">
        <p
          className="text-white px-10 font-bold text-xl"
          onClick={() => nav("/")}
        >
          Car Management System
        </p>
      </div>
    </div>
  );
};

export default Navbar;
