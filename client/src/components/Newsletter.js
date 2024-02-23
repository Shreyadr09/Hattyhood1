import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Newsletter = ({ container }) => {
  let [email, setEmail] = useState("");
  const subscribe = () => {
    axios
    .post("https://www.hattyhood.com/api/newsletter/subscribe", {
      // .post("http://localhost:4000/newsletter/subscribe", {
        email: email,
      })
      .then((response) => {
        toast.success("Successfully subscribed to newsletter!");
      })
      .catch((error) => {
        toast.error("Error subscribing to newsletter");
        console.error("Error subscribing to newsletter", error);
      });
  };

  return (
    <section className="subscribe-area black-bg box-105">
      <div
        className={`${
          container ? "container" : "subscribe-inner black-bg pt-70 pb-20"
        }`}>
        <div
          className={`${
            container
              ? "subscribe-inner black-bg pt-70 pb-20"
              : "container-fluid"
          }`}>
          <div className="row">
            <div className="col-xl-5">
              <div className="subscribe d-flex fix">
                <div className="subscribe-icon">
                  <img src="img/icon/subscribe.png" alt="" />
                </div>
                <div className="area-title white-color mb-50">
                  <h2>Newsletter</h2>
                  <p>Subscribe here for get every single updates</p>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="subscribe fix">
                <div className="subscribe-form mb-50">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <input
                      onChange={(e) => {
                        e.preventDefault();
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <button
                      className="btn theme-btn"
                      type="submit"
                      onClick={subscribe}>
                      Subscribe now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
