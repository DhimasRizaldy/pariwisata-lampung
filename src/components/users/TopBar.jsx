import React, { Component, Fragment } from "react";
import logo from "../../assets/dist/images/logo.svg";
import Breadcrumb from "./Breadcrumb";
import Notifications from "./Notifications";
import Search from "./Seacrh";
import AccountMenu from "./AccountMenu";
import feather from "feather-icons";

class TopBar extends Component {
  componentDidMount() {
    feather.replace();
  }
  render() {
    return (
      <Fragment>
        <div className="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
          <div className="top-bar-boxed flex items-center">
            <a href="" className="-intro-x hidden md:flex">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="w-6"
                src={logo}
              />
              <span className="text-white text-lg ml-3">
                Wisata<span className="font-medium">Lampung</span>
              </span>
            </a>
            <Breadcrumb />
            <Search />
            <Notifications />
            <AccountMenu />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TopBar;
