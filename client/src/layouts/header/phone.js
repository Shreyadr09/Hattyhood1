import Link from "next/link";

const Phone = ({phonenum}) => {
  
    const phoneredirect=()=>{
        const phoneurl=`tel:${phonenum}`
        window.open(phoneurl)
    }
 

  return (
    <>
    <li className="d-shop-cart ">
      <a href="#" onClick={phoneredirect}>
          <i className="fas  fa-phone fa-flip-horizontal" />
          <span className="phone-number">+91 84313 41521</span>
      </a>
    </li>
    </>

  );
};

export default Phone;
