import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import imag from "../public/img/contact/vector.png"
import Image from 'next/image' 
import envolope from "../public/img/contact/vector1.svg"
import shop1 from "../public/img/contact/vector2.svg"
import contact from "../public/img/contact/vector3.svg"
import whatsapp from "../public/img/contact/whatsapp.svg"
import { toast } from "react-hot-toast";
import axios from 'axios';
import { useState } from "react";

const Contact = () => {

  const [formname, setFormname] = useState("");
  const [formemail, setFormemail] = useState("");
  const [formphoneNumber, setFormPhoneNumber] = useState("");
  const [formmessage, setFormMessage] = useState("");

const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setFormname(e.target.value);
        break;
      case "email":
        setFormemail(e.target.value);
        break;
      case "phoneNumber":
         setFormPhoneNumber(e.target.value);
        break;
      case "message":
        setFormMessage(e.target.value);
        break;
      default:
        console.log("Error");
  }
  };
  const handleFormSubmission = async () => {
    try {
      const response = await axios.post('https://www.hattyhood.com/api/contact', { formname, formemail, formphoneNumber, formmessage }); // Removed unnecessary .then() and .catch() blocks
      console.log("data sent");
      toast.success("Email sent successfully"); // Moved console.log inside try block
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Layout sticky>
      <main>
        {/* <PageTitle active="Contact" pageHeading="" dataBackground={'img/bg/contact.png'}/> */}
         <div className="main-flex" >
        <section className="contact-area  pb-90 section1"data-background="/assets/img/bg/bg-map.png"
        >
          <div className="">
            <div className="row details1">
            <div>
                <Image src={imag}   className="vectorstyle" width={"366px"} height={"381px"}  alt="image not working" />
            </div>

              <div className="">
                <a href="mailto:info@hattyhood.com" className="flex-cont text-center mb-30" >
                <div  className="image1" >

                <Image height={"50%"} width={"50%"} src={envolope} alt="bbbbbbbbbbb" />
                </div>
                <div  className="imagcont" >

                  <a href="mailto:teamhattyhood@gmail.com">
                  <h3>Mail Here</h3>
                    <a href="mailto:teamhattyhood@gmail.com"><p className="ptag" >info@hattyhood.com</p></a>
                    <a href="mailto:aayushi@hattyhood.com"><p  className="ptag">aayushi@hattyhood.com</p></a>
                    </a>
                    </div>
                </a>
              </div>
              <div className="">
                <a className="flex-cont text-center mb-30" href="https://wa.me/918431341521" >
                <div  className="whatsappimg" >

                <Image height={"50%"} width={"50%"} src={whatsapp} alt="bbbbbbbbbbb" />
                </div>
                <div className="whatsapp1" >

                   
                  <a href="https://wa.me/918431341521" target="_blank" rel="noreferrer">
                  <h3>Shop Now</h3>
                  <p>+91 84313 41521</p>  
                  </a>
                  </div>
                </a>
              </div>
              

              <div className=" ">
                <a className="flex-cont text-center mb-30" href="tel:+918431341521">
                
                  <div  className="contactimg">
                  <Image   height={"50%"} width={"50%"} src={contact} alt="error" />

                  </div>
                   <div className="contact-cont" >
                 
                    <h3>Visit Us</h3>
                    <p>
                    5th floor, PG Block, B M S College of Engineering, Bangalore-560019
                  </p>
                   </div>

                 
                </a>
              </div>
            </div>
          </div>

        </section >
        <section  className="section2 contact-form-area pt-100 pb ">
      <form action="" className="formstyle">
        <h1 className="h1styling" >Let&apos;s Connect...</h1>
        <input type="text" className="inputstyling" name="name" placeholder={"NAME"} onChange={handleChange} />
        <input type="text" className="inputstyling" name="email" placeholder={"EMAIL"} onChange={handleChange} />
        <input type="tel" className="inputstyling" name="phoneNumber" required pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$" placeholder={"PHONE NUMBER"}  onChange={handleChange} />
        <textarea type="text" className="textareastyle" placeholder={"MESSAGE"} name="message" onChange={handleChange} />
        <button type="submit" onClick={(e) => { e.preventDefault(); handleFormSubmission(); }} className="hooverContact">Send Message</button>
      </form>
    </section>

        </div>
        {/* contact-form-area end */}
        <section className="map-area" >
          <div id="contact-map" className="contact-map" style={{height:"400px"}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1863.0049971384537!2d77.56452747763278!3d12.94108005509879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1663412139671!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style="border:0;"
              allowfullscreen=""
              // loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"

              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.1085069628666!2d90.42812861449441!3d23.707818884610447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b945a84ee027%3A0xec54e6d513238060!2sSabuj%20Hasan%20Sarker!5e0!3m2!1sen!2sbd!4v1629655323737!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </section>
      
      </main>

    </Layout>
  );
};

export default Contact;
