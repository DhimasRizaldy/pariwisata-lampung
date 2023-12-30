import React, { Fragment, useEffect } from "react";
import "./SliderBanner";
import feather from "feather-icons";
import ilustrasi from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Register = (props) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Fragment>
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <div className="my-auto">
              <img
                alt="Image"
                className="-intro-x w-1/2 -mt-16"
                src={ilustrasi}
              />
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                Hi, if you don't have an account,
                <br />
                please create one for free.
              </div>
              <div className="-intro-x mt-5 text-lg text-white">
                let's explore Lampung tourism.
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign Up
              </h2>
              <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
                Hi, if you don't have an account, please create one for free.
                let's explore Lampung tourism.
              </div>
              <div className="intro-x mt-8">
                <input
                  type="text"
                  className="intro-x login__input input input--lg border border-gray-300 block"
                  placeholder="Username"
                  required
                />
                <input
                  type="text"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="Password"
                  required
                />
                <input
                  type="text"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="Password Confirmation"
                />
              </div>
              <div className="intro-x flex items-center text-gray-700 mt-4 text-xs sm:text-sm">
                <input
                  type="checkbox"
                  className="input border mr-2"
                  id="remember-me"
                />
                <label className="cursor-pointer select-none" for="remember-me">
                  I agree to the Envato
                </label>
                <a className="text-theme-1 ml-1" href="">
                  Privacy Policy
                </a>
                .
              </div>
              <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
                  Register
                </button>
                <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">
                  <Link to="/login">Sign in</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
