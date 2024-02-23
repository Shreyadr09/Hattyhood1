import Link from "next/link";
import { Fragment, useState } from "react";
// import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";


const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [multiMenu, setMultiMenu] = useState(false);
  // const cookies = new Cookies();
  const email = Cookies.get("Email") || null;
  const router = useRouter();

  const Logout = () => {
    Cookies.remove("Authorization");
    Cookies.remove("Email");
    toast.success("Logout Successfully");
    console.log('Email after removing: ', Cookies.get());

    window.location.reload();
  };
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <a
          href="#nav"
          className={`meanmenu-reveal ${
            mainHeader
              ? "d-flex align-items-center justify-content-center"
              : ""
          }`}
          onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}
        >
          {mainHeader ? (
            "X"
          ) : (
            <Fragment>
              <span />
              <span />
              <span />
            </Fragment>
          )}
        </a>
        <nav
          className={`mean-nav mobile-header ${
            mainHeader ? "block d-flex align-items-center" : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {email != null ? (
              <li>
                <Link href="/products">Products</Link>
              </li>
            ) : (
              <li
                onClick={() => {
                  // toast.success("To view our products, please sign up or sign in.");
                  router.push("/products");
                }}
              >
                <a>Products</a>
              </li>
            )}
            <li>
              <Link href="/blog/hh-blog">
                <a>Blog</a>
              </Link>
            </li>
            {/* <li className="mega-menu">
              <Link href="/products">Services</Link>
              <a
                className="mean-expand"
                href="#"
                onClick={(e) => {
                  setSubMenu(subMenu === "shop" ? false : "shop");
                  e.preventDefault();
                }}
              >
                {subMenu === "shop" ? "-" : "+"}
              </a>
              <ul className={`submenu ${subMenu === "shop" ? "block" : ""}`}>
                <li>
                  <a href="#">Category View</a>
                  <ul className={`submenu ${multiMenu === "1" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop">Shop 2 Column</Link>
                    </li>
                    <li>
                      <Link href="/products">Shop Filter Style</Link>
                    </li>
                    <li>
                      <Link href="/products">Shop Full</Link>
                    </li>
                    <li>
                      <Link href="/shop/col-3">Shop 3 Column</Link>
                    </li>
                    <li>
                      <Link href="/shop/list">List View</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "1" ? false : "1");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "1" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Fashion
                  </a>
                  <ul className={`submenu ${multiMenu === "2" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop/left-sidebar">T-Shirts</Link>
                    </li>
                    <li>
                      <Link href="/shop/sidebar-right">Hoodies</Link>
                    </li>
                    <li>
                      <Link href="/cart">Badges</Link>
                    </li>
                 
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "2" ? false : "2");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "2" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#">Products Types</a>
                  <ul className={`submenu ${multiMenu === "3" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop/1">Simple Product</Link>
                    </li>
                    <li>
                      <Link href="/shop/19">Variable Product</Link>
                    </li>
                    <li>
                      <Link href="/shop/upcoming/16">Product Upcoming</Link>
                    </li>
                    <li>
                      <Link href="/shop/up-thumb/16">Thumb Top Product</Link>
                    </li>
                    <li>
                      <Link href="/compare">Compare</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "3" ? false : "3");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "3" ? "-" : "+"}
                  </a>
                </li>
              </ul>
            </li> */}
          <li>
             <Link href="/ourteam">Our Team</Link>
           </li>
          <li className="mean-last">
            <Link href="/contact">Contact</Link>
          </li>
            {email !=null ? (
              <>
            <li >
             <div onClick={(e) => {Logout();}}> <Link href="#">Logout</Link></div>
            </li>
            
            </>
              ):(<>
                {/* <li>
                  <Link href="/login">login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li> */}
                </>)}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
