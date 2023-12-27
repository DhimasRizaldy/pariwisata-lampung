import React, { Component, Fragment, useState } from "react";
import "../../../assets/dist/css/app.css";
import Logo from "../../../assets/dist/images/logo.svg";
import feather from "feather-icons";
import { Link } from "react-router-dom";

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavVisible: false,
    };
  }

  componentDidMount() {
    feather.replace();
  }

  toggleNavVisibility = () => {
    this.setState((prevState) => ({
      isNavVisible: !prevState.isNavVisible,
    }));
  };

  render() {
    const { isNavVisible } = this.state;

    return (
      <Fragment>
        <div className={`mobile-menu md:hidden ${isNavVisible ? "open" : ""}`}>
          <div className="mobile-menu-bar" onClick={this.toggleNavVisibility}>
            <a href="" className="flex mr-auto">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="w-6"
                src={Logo}
              />
            </a>
            <a href="#" id="mobile-menu-toggler">
              <i
                data-feather="bar-chart-2"
                className="w-8 h-8 text-white transform -rotate-90"
              ></i>
            </a>
          </div>
          <ul
            className={`border-t border-theme-24 py-5 ${
              isNavVisible ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`menu ${isNavVisible ? "menu--active" : ""}`}
              >
                <div className="menu__icon">
                  <i data-feather="home"></i>
                </div>
                <div className="menu__title"> Home </div>
              </Link>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  <i data-feather="layout"></i>
                </div>
                <div className="menu__title">
                  Kategori Wisata Alam
                  <i data-feather="chevron-down" className="menu__sub-icon"></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-crud-data-list.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Pantai </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-form.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Gunung </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-data-list.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Air terjun </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-form.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Hutan </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-data-list.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Danau </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-crud-form.html" className="menu">
                    <div className="menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="menu__title"> Wisata Taman Nasional </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/rekomendasi"
                href="side-menu-chat.html"
                className="menu"
              >
                <div className="menu__icon">
                  <i data-feather="grid"></i>
                </div>
                <div className="menu__title"> Rekomendasi </div>
              </Link>
            </li>
            <li>
              <a href="side-menu-post.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="pocket"></i>
                </div>
                <div className="menu__title"> Tentang kami </div>
              </a>
            </li>
            <li>
              <a href="side-menu-post.html" className="menu">
                <div className="menu__icon">
                  <i data-feather="log-in"></i>
                </div>
                <div className="menu__title"> Login </div>
              </a>
            </li>
            <li className="menu__devider my-6"></li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default MobileNav;
