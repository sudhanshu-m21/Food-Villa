import React, { useState, useContext } from "react";
import Logo from "../assets/img/food  villa.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const title = (
  <a href="/">
    <img className="h-28 p-2" alt="Logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col sm:flex-row justify-between p-3 bg-pink-50 shadow-sm">
      <div className="flex items-center justify-between sm:w-2/6">
        {title}
        {!isLoggedIn ? (
          <button
            className="sm:hidden bg-transparent border border-white text-black rounded-lg p-2"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        ) : (
          <button
            className="sm:hidden bg-transparent border border-white text-black rounded-lg p-2"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        )}
      </div>
      <div className="sm:w-4/6 flex items-center justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-black">
              Cart- ({cartItems.length} items)
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="text-black">
              Instamart
            </Link>
          </li>
          {isLoggedIn && (
            <li className="text-black font-bold">{loggedInUser}</li>
          )}
        </ul>
        {!isLoggedIn ? (
          <button
            className="hidden sm:block bg-transparent border border-white text-black rounded-lg p-2 ml-4"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        ) : (
          <button
            className="hidden sm:block bg-transparent border border-white text-black rounded-lg p-2 ml-4"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
