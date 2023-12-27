import React, { Component, Fragment } from "react";
import "../../../assets/dist/css/app.css";
import feather from "feather-icons";

class Search extends Component {
  componentDidMount() {
    feather.replace();
  }
  render() {
    return (
      <Fragment>
        <div className="intro-x relative mr-3 sm:mr-6">
          <div className="search hidden sm:block">
            <input
              type="text"
              className="search__input input placeholder-theme-13"
              placeholder="Search..."
            />
            <i data-feather="search" className="search__icon"></i>
          </div>
          <a className="notification notification--light sm:hidden" href="">
            <i data-feather="search" className="notification__icon"></i>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Search;
