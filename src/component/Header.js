import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/img/food  villa.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const title = (
  <a href="/">
    <img className="h-28 p-2" alt="Logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate("/login");
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        setIsLoggedIn(true);
        navigate("/");
      } else {
        dispatch(removeUser());
        setIsLoggedIn(false);
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  if (location.pathname === "/login") {
    return null;
  }
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
            on
            onClick={handleClick}
          >
            Login
          </button>
        ) : (
          <button
            className="hidden sm:block bg-transparent border border-white text-black rounded-lg p-2 ml-4"
            onClick={handleSignOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
