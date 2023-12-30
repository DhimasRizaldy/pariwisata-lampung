import React, { Component, useEffect, Fragment } from "react";
import feather from "feather-icons";
import { Link } from "react-router-dom";

class TopNav extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <Fragment>
        <nav className="top-nav">
          <ul>
            <li>
              <Link to="/" className="top-menu top-menu--active">
                <div className="top-menu__icon">
                  <i data-feather="home"></i>
                </div>
                <div className="top-menu__title"> Home </div>
              </Link>
            </li>
            <li>
              <a href="#" className="top-menu top-menu--active">
                <div className="top-menu__icon">
                  <i data-feather="layout"></i>
                </div>
                <div className="top-menu__title">
                  Kategori Wisata Alam
                  <i
                    data-feather="chevron-down"
                    className="top-menu__sub-icon"
                  ></i>
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title"> Wisata Pantai </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title"> Wisata Gunung </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title"> Wisata Air terjun </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title"> Wisata Hutan </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title"> Wisata Danau </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="top-menu">
                    <div className="top-menu__icon">
                      <i data-feather="layout"></i>
                    </div>
                    <div className="top-menu__title">
                      {" "}
                      Wisata Taman Nasional{" "}
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/rekomendasi" className="top-menu top-menu--active">
                <div className="top-menu__icon">
                  <i data-feather="grid"></i>
                </div>
                <div className="top-menu__title"> Rekomendasi </div>
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className="top-menu top-menu--active">
                <div className="top-menu__icon">
                  <i data-feather="pocket"></i>
                </div>
                <div className="top-menu__title"> Tentang Kami </div>
              </Link>
            </li>
            <li>
              <Link to="/login" className="top-menu top-menu--active">
                <div className="top-menu__icon">
                  <i data-feather="log-in"></i>
                </div>
                <div className="top-menu__title"> Login </div>
              </Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default TopNav;
