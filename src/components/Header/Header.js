import React, { useState } from "react";
import { useRef } from "react";
import "./Header.css";
import logo from "../../assets/images/youbie-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isActive, setIsActive ] = useState(false)
  const mobileMenuRef = useRef();
  const iconRef = useRef();

// handle mobile menu
const handleMobileMenu = ()=>{
  const menuBtn = iconRef.current;
  const  mobileMenu = mobileMenuRef.current;
  if(!isActive){
    menuBtn.classList.add("active");
    mobileMenu.classList.add("show");
    setIsActive(true);
  }else{
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("show");
    setIsActive(false);
  }
    
}


  return (
    <header id="main-header" className="header-main">
    <nav className="navigation-menu">
      <div className="container">
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="Youbie"
            className="brand-logo"
          />
        </Link>
        <ul className="nav-menu__nav">
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">Home</Link>
          </li>
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">Explore</Link>
          </li>
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">Stream</Link>
          </li>
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">Bets</Link>
          </li>
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">NFT Marketplace</Link>
          </li>
          <li className="nav-menu__nav-item">
            <Link to="/" className="nav-item-link">Whitepaper</Link>
          </li>
        </ul>
        <div className="user-group">
          <div className="cta-group">
            <Link to="/" className="you-btn"> Buy Premium </Link>
            <Link to="/" className="you-btn"> Connect Wallet </Link>
          </div>
          <div className="dropdown user-details-btn">
            <button
              className="btn"
              type="button"
              id="userCridentials"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <FontAwesomeIcon icon={faUserCircle} />
              <span className="icon">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 12"
                  width="18"
                  height="12"
                >
                  
                  <path
                  fill="#fff"
                    className="a"
                    d="m0.9 0.3l8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                  />
                </svg>
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="userCridentials">
              <li><Link to="/dashboard" className="dropdown-item" href="#">Dashboard</Link></li>
              <li><Link to="/settings" className="dropdown-item" href="#">Settings</Link></li>
            </ul>
          </div>
        </div>
        <button type="button" className="menu-btn" ref={iconRef} onClick={handleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
    {/* mobile-menu */}
    <section id="extra-elems">
        <aside className="mobile-menu" ref={mobileMenuRef}>
          <ul className="nav-menu__nav">
            <li className="nav-menu__nav-item">
              <a href="./index.html" className="nav-item-link">Home</a>
            </li>
            <li className="nav-menu__nav-item">
              <Link to="/" className="nav-item-link">Explore</Link>
            </li>
            <li className="nav-menu__nav-item">
              <Link to="/" className="nav-item-link">Stream</Link>
            </li>
            <li className="nav-menu__nav-item">
              <Link to="/" className="nav-item-link">Bets</Link>
            </li>
            <li className="nav-menu__nav-item">
              <Link to="/" className="nav-item-link">NFT Marketplace</Link>
            </li>
            <li className="nav-menu__nav-item">
              <Link to="/" className="nav-item-link">Whitepaper</Link>
            </li>
          </ul>
          <div className="user-group">
            <div className="cta-group">
              <Link to="/" className="you-btn"> Buy Premium </Link>
              <Link to="/" className="you-btn"> Connect Wallet </Link>
            </div>
            <div className="dropdown user-details-btn">
              <button
                className="btn"
                type="button"
                id="userCridentials"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                   <FontAwesomeIcon icon={faUserCircle} />
                <span className="icon">
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 12"
                    width="18"
                    height="12"
                  >
                    <path
                    fill="#fff"
                      className="a"
                      d="m0.9 0.3l8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                    />
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="userCridentials">
                <li><Link to="/" className="dropdown-item" href="#">Dashboard</Link></li>
                <li><Link to="/" className="dropdown-item" href="#">Settings</Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
  </header>
  );
};

export default Header;
