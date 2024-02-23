import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row" style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div className="col-xs-12 col-sm-6 col-md-3" >
              <div className="widget subscribe no-box">
                <a href="/">
                <img className='responsive-logo' src='https://bigbuddy-store-1.s3.us-west-1.amazonaws.com/hattyhoodnewlogo2.png' alt='logo'></img>
                </a>
                <p style={{margin:'0px', whiteSpace: 'nowrap'}}><span style={{color:'#785536', fontWeight:'500'}}>Hat and Hood for</span> <span style={{color:'#48965f', fontWeight:'500'}}>Mother Earth! </span></p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3" >
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">Sustainability store</a>
                  </li>
                  <li>
                    <a href="https://tally.so/r/3X5paY" target='_blank'>Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3" >
              <div className="widget no-box">
                <h5 className="widget-title">Get in Touch<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="tel:+918431341521">Call Us Now</a>
                  </li>
                  <li>
                    <a href="mailto:info@hattyhood.com">Shoot an email</a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: 'flex', justifyContent: 'center',marginTop: '20px' }}>
            <div className="col-md-12" style={{ textAlign: 'center' }}>
              <ul className="thumbnail-widget social-icons" style={{ display: 'flex', justifyContent: 'center' }}>
                <li>
                  <a href="https://wa.me/918431341521" target='blank'>  
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', width: '20px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/behattyhood?igshid=ZDdkNTZiNTM=" target='blank'>  
                    <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', width: '20px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/hattyhood/" target='blank'>  
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', width: '20px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hattyhood" target='blank'>  
                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', width: '20px' }} />
                  </a>
                </li>
                <li>
                  <a href="#" target='blank'>  
                    {/* <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', width: '20px' }} /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Hattyhood © 2022. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;






// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../../public/img/banner/add.jpg";
// import Time from "../../public/img/icon/time.png";
// import Logo from "../../public/img/logo/footer-logo.png";
// const Footer = ({ container, footerBg, textCenter }) => {
//   return (
//     <footer>
//       <div
//         className={`${
//           !container
//             ? "footer-area box-90 pt-100 pb-60"
//             : "footer-area pl-100 pr-100 mt-100"
//         }`}
//       >
//         <div
//           className={footerBg ? "footer-area box-90 pt-100 pb-60" : ""}
//           data-background={footerBg ? "/img/bg/footer.jpg" : ""}
//           style={{
//             backgroundImage: footerBg ? 'url("/img/bg/footer.jpg")' : "",
//           }}
//         >
//           <div className={`${container ? "container" : "container-fluid"}`}>
//             <div className="row">
//               <div className="col-xl-3 col-lg-5 col-md-6 ">
//                 <div className="footer-widget mb-40">
//                   <div className="footer-logo">
//                     <Link href="/">
//                       <a> 
//                         {/* <Image src={Logo} alt="Logo" /> */}
//                         <img src= "/img/logo/image23.png" alt="Logo" />
//                       </a>
//                     </Link>
//                     <center>
//                     <p>
//                     Stay Active, Stay Creative with Hattyhood.
//                   </p>
//                   <p>
//                     Choose the dress style that best suits you with our diverse clothing collection.
//                   </p>
//                   </center>
//                   </div>
                  
                  
//                   <div className="footer-time d-flex mt-30">
//                     <div className="time-icon">
//                       <Image src={Time} alt="" />
//                     </div>
//                     <div className="time-text">
//                       <span>Got Questions ? Call us 24/7!</span>
//                       <h2>(0600) 874 548</h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
//                 <div className="footer-widget pl-50 mb-40">
//                   <h3>Social Media</h3>
//                   <ul className="footer-link">
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Facebook
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Twitter
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Behance
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         {" "}
//                         Dribbble
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Linkedin
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Youtube
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
//                 <div className="footer-widget pl-30 mb-40">
//                   <h3>Location</h3>
//                   <ul className="footer-link">
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         New York
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Tokyo
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Dhaka
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         {" "}
//                         Chittagong
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         China
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Japan
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-3">
//                 <div className="footer-widget mb-40">
//                   <h3>About</h3>
//                   <ul className="footer-link">
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Terms &amp; Conditions
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         {" "}
//                         Privacy Policy
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Contact Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         FAQ
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Wholesale
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" onClick={(e) => e.preventDefault()}>
//                         Direction
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-5 col-md-6">
//                 <div className="footer-widget mb-40">
//                   <div className="footer-banner">
//                     {/* <Link href="/shop">
//                       <a>
//                         <Image src={Banner} alt="Banner" />
//                       </a>
//                     </Link> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copyright-area box-105">
//         <div className="container-fluid">
//           <div className={`${footerBg ? "" : "copyright-border"} pt-30 pb-30`}>
//             <div className="row">
//               <div
//                 className={`${
//                   textCenter ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6"
//                 }`}
//               >
//                 <div
//                   className={`copyright text-center  ${
//                     textCenter ? "" : "text-md-left"
//                   }`}
//                 >
//                   <p>
//                     Copyright © {new Date().getFullYear()}{" "}
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       Hattyhood
//                     </a>
//                     . All Rights Reserved
//                   </p>
//                 </div>
//               </div>
//               {!textCenter && (
//                 <div className="col-xl-6 col-lg-6 col-md-6">
//                   <div className="footer-icon text-center text-md-right ">
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       <i className="fab fa-facebook-f" />
//                     </a>
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       <i className="fab fa-twitter" />
//                     </a>
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       <i className="fab fa-behance" />
//                     </a>
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       <i className="fab fa-linkedin-in" />
//                     </a>
//                     <a href="#" onClick={(e) => e.preventDefault()}>
//                       <i className="fab fa-youtube" />
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
