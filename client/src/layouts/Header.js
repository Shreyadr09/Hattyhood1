import Link from "next/link";
import React, { useEffect, useState, createContext } from "react";
import { scroll } from "../utils/utils";
import Catagory from "./header/Catagory";
import DasktopHeader1 from "./header/DasktopHeader1";
import MobileHeader from "./header/MobileHeader";
import SearchTrigger from "./header/SearchTrigger";
import ShopCart from "./header/ShopCart.js";
import PropTypes from "prop-types";
import Login from "../../pages/login";
import Cookies from "js-cookie";

// import Cookies from "universal-cookie";
import Profile from "./header/Profile";
import toast from "react-hot-toast";
import Phone from "./header/phone";

const Header = ({
  props,
  sticky,
  container,
  transparent,
  whiteMenu,
  extraTransparentClass,
}) => {
  // const cookies = new Cookies();
  const email = Cookies.get("Email") || null;

  const Logout = () => {
    Cookies.remove("Authorization");
    Cookies.remove("Email");
    // cookies.set("Email", null, { path: "/", SameSite: "None" });
    toast.success("Logout Successfully");
      console.log('Email after removing: ', Cookies.get());
    window.location.reload();
  };

  useEffect(() => {
    sticky && window.addEventListener("scroll", scroll);
  }, []);

  return (
      <header
      className={`${
        transparent
          ? `transparent-header ${
              extraTransparentClass ? extraTransparentClass : ""
            }`
          : ""
      }`}
    >
      <div
        className="header-area box-90"
        id={`${sticky ? "header-sticky" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <Catagory whiteMenu={whiteMenu} />
            </div>
            <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <DasktopHeader1 whiteMenu={whiteMenu} />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
              <div className="header-right f-right">
                <ul className="d-flex align-items-center justify-content-end">                  
                <SearchTrigger className="visibility" />
                  <Phone phonenum="+918431341521"/>
                  <Profile />
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <MobileHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


// import Link from "next/link";
// import React, { useEffect, useState, createContext } from "react";
// import { scroll } from "../utils/utils";
// import Catagory from "./header/Catagory";
// import DasktopHeader1 from "./header/DasktopHeader1";
// import MobileHeader from "./header/MobileHeader";
// import SearchTrigger from "./header/SearchTrigger";
// import ShopCart from "./header/ShopCart.js";
// import PropTypes from "prop-types";
// import Login from "../../pages/login";
// import Cookies from "universal-cookie";
// import Profile from "./header/Profile";
// import toast from "react-hot-toast";



// const Header = ({
//   props,
//   sticky,
//   container,
//   transparent,
//   whiteMenu,
//   extraTransparentClass,
// }) => {
//   const cookies = new Cookies();
//   const email = cookies.get("Email") || null;

//   const Logout = () => {
//     cookies.remove("Authorization");
//     cookies.remove("Email");
//     // cookies.set("Email", null, { path: "/", SameSite: "None" });
//     toast.success("Logout Successfully");
//     window.location.reload();
//   };

//   useEffect(() => {
//     sticky && window.addEventListener("scroll", scroll);
//   }, []);

//   return (
   
//       <header
//         className={`${
//           transparent
//             ? `transparent-header ${
//                 extraTransparentClass ? extraTransparentClass : ""
//               }`
//             : ""
//         }`}
//       >
//         <div
//           className="header-area box-90"
//           id={`${sticky ? "header-sticky" : ""}`}
//         >
//           <div className={`${container ? "container" : "container-fluid"}`}>
//             <div className="row align-items-center">
//               <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
//                 <Catagory whiteMenu={whiteMenu} />
//               </div>
//               <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
//                 <DasktopHeader1 whiteMenu={whiteMenu} />
//               </div>
//               <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
//                 <div className="header-right f-right">
//                   <ul>
//                     <SearchTrigger />
//                     {/* <li className="login-btn">
//                       <Link href="">
//                         <a>
//                           <i className="far fa-user" />
//                         <Profile/>
//                         </a>
//                       </Link>
//                     </li> */}
//                     <Profile/>
//                     {/* <ShopCart /> */}
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-12 d-xl-none">
//                 <MobileHeader />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//   );
// };

// export default Header;

