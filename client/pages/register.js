import { Formik } from "formik";
import Link from "next/link";
import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { registerSchema } from "../src/utils/yupModal";
import Cookies from "universal-cookie";
import axios from "axios";
import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./_app";

const Register = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [username, setUsername] = useState("");
  const cookies = new Cookies();
  let user = React.useContext(UserContext);

  const RegisterUser = async (values) => {
    if (values.password === values.confirmPassword) {
      let response = await axios.post(
        // "https://www.hattyhood.com/api/users/register",
        "http://localhost:4000/users/register",
        // let response = await axios.post("http://localhost:5001/api/users/register",
        {
          username: values.username,
          email: values.email,
          password: values.password,
        }
      );
      if (response.status === 200) {
        let response = await axios.post(
          // "https://www.hattyhood.com/api/users/login",
          "http://localhost:4000/users/login",
          {
            email: values.email,
            passwords: values.password,
          }
        );
        if (response.status === 200) {
          cookies.set("Authorization", response.data.token, {
            path: "/",
            SameSite: "None",
          });
          cookies.set("Email", values.email, { path: "/", SameSite: "None" });
          // toast.success("Login Successfully");
          user.setUser({ email: values.email });
          // window.location.href = "./";
          window.history.go(-1);
        }
        toast.success("Registered successfully");
        location.href = "./";
      } else if (response.status === 400) {
        toast.error("Something went wrong");
      } else {
        toast.error("Regsiteration failed as email already exists");
      }
    } else {
      toast.error("Password and Confirm Password not matching");
    }
  };

  return (
    <Layout
      sticky
      container
      textCenter
      footerBg
      transparent={undefined}
      extraTransparentClass={undefined}
      header2={undefined}
      whiteMenu={undefined}>
      <main>
        <section className="login-area pb-50">
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
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <Formik
                    initialValues={registerSchema.initialValue}
                    validationSchema={registerSchema.schema}
                    onSubmit={(values, { setSubmitting }) => {
                      RegisterUser(values);
                      // setTimeout(() => {
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
                      isValid,
                    }) => (
                      <form className="register-form" onSubmit={handleSubmit}>
                        <InputGroup
                          label="Username"
                          id="username"
                          name="username"
                          type="string"
                          placeholder="Enter Username"
                          values={values.username}
                          errors={errors.username}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                        />
                        <InputGroup
                          label="Email Address"
                          id="email"
                          name="email"
                          type="string"
                          placeholder="Enter Email address"
                          values={values.email}
                          errors={errors.email}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                        />
                        <InputGroup
                          label="Password"
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Enter password"
                          values={values.password}
                          errors={errors.password}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                        />
                        <InputGroup
                          label="Confirm Password"
                          // id="password"
                          name="confirmPassword"
                          type="password"
                          placeholder="Enter confirm password"
                          values={values.confirmPassword}
                          errors={errors.confrimPassword}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                        />
                        {/* <input
                          required
                          type="text"
                          name="user-name"
                          placeholder="Username"
                          onChange={(e) => {
                            e.preventDefault();
                            setUsername(e.target.value);
                          }}
                        />
                        <input
                          required
                          name="user-email"
                          placeholder="Email"
                          type="email"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                          }}
                        />
                        <input
                          required
                          type="password"
                          name="user-password"
                          placeholder="Password"
                          onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                          }}
                        />
                        <input
                          required
                          type="password"
                          name="confirm-user-password"
                          placeholder="Confirm Password"
                          onChange={(e) => {
                            e.preventDefault();
                            setConfirmPassword(e.target.value);
                          }}
                        /> */}
                        <button
                          disabled={isSubmitting || !isValid} // added disabled condition
                          className="btn theme-btn-2 w-100"
                          type="submit"
                          // handleSubmit={handleSubmit}
                        >
                          Register Now
                        </button>
                        <div className="or-divide">
                          <span>or</span>
                        </div>
                        <Link href="/login">
                          <a className="btn theme-btn w-100">Login Now</a>
                        </Link>
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

export default Register;
