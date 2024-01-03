import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import Dashboard from "./Dashboard";
import SliderBanner from "../../../components/SliderBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContentUser extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <div className="content">
          <div className="intro-y box mt-10">
            <SliderBanner />
          </div>
          <div className="intro-y flex items-center justify-center mt-10 mb-10">
            <h2 className="text-lg font-bold">Wisata Alam Lampung</h2>
          </div>
          <div className="flex items-center justify-between bg-gray-100 p-4">
            <div className="relative">
              <input
                type="text"
                className="border rounded-md py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
                placeholder="Cari Wisata Alam ..."
              />
              <button className="absolute right-0 top-0 mt-3 mr-4">
                <i data-feather="search" className="text-gray-500"></i>
              </button>
            </div>
          </div>
          <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <Dashboard />
            {/* pagination */}
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
              <ul className="pagination">
                <li>
                  <a className="pagination__link" href="">
                    {" "}
                    <i
                      className="w-4 h-4"
                      data-feather="chevrons-left"
                    ></i>{" "}
                  </a>
                </li>
                <li>
                  <a className="pagination__link" href="">
                    {" "}
                    <i className="w-4 h-4" data-feather="chevron-left"></i>{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="pagination__link" href="">
                    ...
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="pagination__link" href="">
                    1
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className="pagination__link pagination__link--active"
                    href=""
                  >
                    2
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="pagination__link" href="">
                    3
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="pagination__link" href="">
                    ...
                  </a>{" "}
                </li>
                <li>
                  <a className="pagination__link" href="">
                    {" "}
                    <i
                      className="w-4 h-4"
                      data-feather="chevron-right"
                    ></i>{" "}
                  </a>
                </li>
                <li>
                  <a className="pagination__link" href="">
                    {" "}
                    <i
                      className="w-4 h-4"
                      data-feather="chevrons-right"
                    ></i>{" "}
                  </a>
                </li>
              </ul>
              <select className="w-20 input box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContentUser;
