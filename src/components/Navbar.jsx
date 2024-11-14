import React, { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">Sign-Out</button>
        ) : (
          <Link to="/auth/signIn" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
