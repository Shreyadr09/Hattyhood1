import PropTypes from "prop-types";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { loginSchema } from "../src/utils/yupModal";
import Cookies from "js-cookie";
// import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./_app";
import React from "react";
import { Router } from "next/router";

const Login = (location) => {
  let history = useHistory();
  const { pathname } = location;
  // const cookies = new Cookies();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  // const history = useHistory();
  // const navigate = useNavigate();
  let user = React.useContext(UserContext);

  const LoginUser = async () => {
    let response = await axios.post(
      // "https://www.hattyhood.com/api/users/login",

      "http://localhost:4000/users/login",
      {
        // let response = await axios.post(`http://54.208.41.239:8080/user/login`, {
        email: email,
        passwords: password,
      }
    );
    if (response.status === 200) {
      Cookies.set("Authorization", response.data.token, { expires: 3 });
      // cookies.set("Authorization", response.data.token, {
      //   path: "/",
      //   SameSite: "None",
      // });
      Cookies.set("Email", email, { expires: 3 });
      // Cookies.set("Email", email, { path: "/", SameSite: "None" });
      toast.success("Login Successfully");
      user.setUser({ email: email });
      // window.location.href = "./";
      window.history.go(-1);
      console.log(Cookies.get("Authorization"));
      console.log(Cookies.get("Email"));
    }
    if (response.status === 400) {
      console.log("Email or Password incorrect");
      toast.error("Email or Password incorrect");
    }
  };

  return (
    <Layout
      sticky
      textCenter
      footerBg
      container
      transparent={undefined}
      extraTransparentClass={undefined}
      header2={undefined}
      whiteMenu={undefined}>
      <main>
        {/* <PageTitle
          pageHeading=""
          active="Login"
          dataBackground={'img/bg/login.png'}
          thankupage={undefined}
          id={undefined}
        /> */}
        <section className="login-area">
          <div className="container">
            <div className="row">
              <div className="login-page">
                <div className="basic-login basic-login-img">
                  <img
                    className="login-image animate glow delay-3"
                    srcSet="img/bg/login_page.png"
                  />
                </div>
                <div className="basic-login animate glow delay-2">
                  <h3 className="text-center mb-30">Login From Here</h3>
                  <Formik
                    initialValues={loginSchema.initialValue}
                    validationSchema={loginSchema.schema}
                    onSubmit={(values, { setSubmitting }) => {
                      // setTimeout(() => {
                      //   {toast.error("Incorrect Login Details");  }
                      //   alert(JSON.stringify(values, null, 2));
                      //   setSubmitting(false);
                      // }, 400);
                    }}>
                    {({
                      values,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <>
                          <input
                            type="email"
                            name="user-email"
                            placeholder="Email"
                            onChange={(e) => {
                              e.preventDefault();
                              setEmail(e.target.value);
                            }}
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                            onChange={(e) => {
                              e.preventDefault();
                              setPassword(e.target.value);
                            }}
                          />
                          <div className="login-action mb-20 fix">
                            <span className="log-rem f-left">
                              <input id="remember" type="checkbox" />
                              <label htmlFor="remember">Remember me!</label>
                            </span>
                            <span className="forgot-login f-right">
                              <a href="#" onClick={(e) => e.preventDefault()}>
                                Forgot Password?
                              </a>
                            </span>
                          </div>
                          <button
                            disabled={isSubmitting}
                            className="btn theme-btn-2 w-100"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              LoginUser();
                            }}>
                            Login Now
                          </button>
                          <div className="or-divide">
                            <span>or</span>
                          </div>
                          <Link href="/register">
                            <a className="btn theme-btn w-100">Register Now</a>
                          </Link>
                        </>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Login;
