import React from "react";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-5">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/signIn" className="btn btn-neutral rounded-none">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
