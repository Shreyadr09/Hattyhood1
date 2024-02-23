import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Logo from "../../../public/img/logo/logo-white.png";
import toast from "react-hot-toast";

const DasktopHeader3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="basic-bar info-bar" onClick={() => setIsOpen(true)}>
        <span className="bar1" />
        <span className="bar2" />
        <span className="bar3" />
      </div>
      <div className={`extra-info ${isOpen ? "info-open" : ""}`}>
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          <button>
            <i className="far fa-window-close" />
          </button>
        </div>
        <div className="logo-side">
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <div className="side-info mb-30">
          <div className="main-menu side-menu">
            <nav id="mobile-menu-3" style={{ display: "block" }}>
              <ul>
                 <li>
              <Link href="/about">About</Link>
            </li>
           
                <li className="mega-menu">
                  <Link href="/products">Products</Link>
                  <ul className="submenu ">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Fashion
                      </a>
                      <ul className="submenu  level-1">
                        <li>
                          <Link href="/shop">T-Shirts</Link>
                        </li>
                        <li>
                          <Link href="/products">Hoodies</Link>
                        </li>
                        <li>
                          <Link href="/products">Badges</Link>
                        </li>
                       
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Stationary
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/shop/left-sidebar">Business Cards</Link>
                        </li>
                        <li>
                          <Link href="/shop/sidebar-right">Diaries</Link>
                        </li>
                
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Others
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/shop/1">Cups</Link>
                        </li>
                        <li>
                          <Link href="/shop/19">Mugs</Link>
                        </li>
                      
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/products">Products </Link>
                </li>
                <li>
                  <Link href="/blog/hh-blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ourteam">Our Team</Link>
                </li> 
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="side-info-bottom">
          <div className="side-cta">
            <p>info@example.com</p>
            <h4>+(090) 8765 86543 85</h4>
          </div>
          <div className="social-icon-right mt-20">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-twitter" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DasktopHeader3;
