// import Link from "next/link";
// import toast from "react-hot-toast";
// import Cookies from "universal-cookie";
// import { useRouter } from 'next/router';

// const DasktopHeader = ({ whiteMenu }) => {
//   const cookies = new Cookies();
//   const router = useRouter();
//   const email = cookies.get("Email") || null;
  
//   function handleClick(e) {
//   e.preventDefault();
//   console.log('entered this function');
//   // check if user is logged in
//   const cookies = new Cookies();
//   const email = cookies.get("Email") || null;
//   console.log(email)
//   if (email === null) {
//     // redirect to login page
//     const router = useRouter();
//     router.push('/login');
//     console.log('getting redirected to login');
//   } else {
//     router.push('/products');
//   }
// }

//   const Logout = () => {
//       cookies.remove("Authorization");
//       cookies.remove("Email");
//       // cookies.set("Email", null, { path: "/", SameSite: "None" });
//       window.location.reload();
//       toast.success("Logout Successfully");
//   };

//   return (
    
//     <div className={`main-menu text-center ${whiteMenu ? "menu-white" : ""}`}>
//       <nav id="mobile-menu">
//         <ul>
//         {email != null ? (
//           <>
          
//           <li>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link onClick={handleClick}>Products</Link>
//           </li>
//           {/* <li className="mega-menu">
//             <Link href="/shop">Services</Link>
//             <ul className="submenu ">
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Fashion
//                 </a>
//                 <ul className="submenu  level-1">
//                   <li>
//                     <Link href="/shop/sidebar-right">T-Shirts</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Hoodies</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Badges</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Stationary
//                 </a>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/shop/sidebar-right">Business Cards</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Diaries</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Others
//                 </a>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/shop/sidebar-right">Cups</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Mugs</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//             </ul>
//           </li> */}
//           {/* <li>
//             <Link href="/ourteam">Our Team</Link>
//           </li> */}
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//           {/* <li>
//             <Link href="#">
//             <div onClick={(e) => {Logout();}} to="">
//               Logout
//               </div>
//             </Link>
//           </li>
//            */}
//           </>
//         ):(
//           <>
           
//           <li>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//           <Link href="/products">
//             <a onClick={handleClick}>Products</a>
//           </Link>
//           </li>
//           {/* <li className="mega-menu">
//             <Link href="/shop">Services</Link>
//             <ul className="submenu ">
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Fashion
//                 </a>
//                 <ul className="submenu  level-1">
//                   <li>
//                     <Link href="/shop/sidebar-right">T-Shirts</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Hoodies</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Badges</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Stationary
//                 </a>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/shop/sidebar-right">Business Cards</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Diaries</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()}>
//                   Others
//                 </a>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/shop/sidebar-right">Cups</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/sidebar-right">Mugs</Link>
//                   </li>
                  
//                 </ul>
//               </li>
//             </ul>
//           </li> */}
          
//         {/* <li>
//            <Link href="/ourteam">Our Team</Link>
//         </li> */}
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//           {/* <li>
//             <Link href="/login">Login</Link>
//           </li> */}
//           {/* <li>
//             <Link href="/register">Register</Link>
//           </li> */}
//           </>
//         )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default DasktopHeader;

import Link from "next/link";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const DesktopHeader = ({ whiteMenu }) => {
  const cookies = new Cookies();
  const router = useRouter();
  const email = cookies.get("Email") || null;

  const handleProductsClick = (e) => {
      // toast.success("To view our products, please sign up or sign in.");
    e.preventDefault();
    if (email === null) {
      router.push("/products");
    } else {
      router.push("/products");
    }
  };

  return (
    <div className={`main-menu text-center ${whiteMenu ? "menu-white" : ""}`}>
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {email != null ? (
            <>
              <li>
                <Link href="/products" onClick={handleProductsClick}>Products</Link>   
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/products">
                  <a onClick={handleProductsClick}>Products</a>
                </Link>
              </li>
            </>
          )}
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
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
