import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { getCarts, removeCart } from "../../redux/action/utilis";
import { totalPrice } from "../../utils/utils";
import Cookies from "js-cookie";
// import Cookies from "universal-cookie";


const Profile = () => {
    // const cookies = new Cookies();
    const email = Cookies.get("Email") || null;
  
    const Logout = () => {
      Cookies.remove("Authorization");
      Cookies.remove("Email");
      // cookies.set("Email", null, { path: "/", SameSite: "None" });
      console.log('Email after removing: ', Cookies.get());
      window.location.reload();
      toast.success("Logout Successfully");
    };

 

  return (
    <>
    <li className="d-sho-cart">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <i className="far fa-user" />
      </a>
      <ul className="minicart">
      {email != null ? (
     <>
     <div className="checkout-link">
       <br/>
       <strong>{email} <br/></strong>
       <br/>
       <Link href="#">
         <a className="red-color" onClick={(e) => {Logout();}}>Logout</a>
       </Link>
     </div>
     </>        
        ) : (
            <>
          <div className="checkout-link">
          <Link href="/login">Login</Link>
            <Link href="/register">
              <a className="red-color">Register</a>
            </Link>
          </div>
          </>
        )}
        
       
      </ul>
    </li>
    </>

  );
};

export default connect(null, { removeCart, getCarts })(Profile);
