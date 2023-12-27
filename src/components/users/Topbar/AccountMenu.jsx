import React, { Component, Fragment } from "react";
import Profile9 from "../../../assets/dist/images/profile-9.jpg";
import feather from "feather-icons";

class AccountMenu extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <Fragment>
        <div className="intro-x dropdown w-8 h-8 relative">
          <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110">
            <img alt="Midone Tailwind HTML Admin Template" src={Profile9} />
          </div>
          <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
            <div className="dropdown-box__content box bg-theme-38 text-white">
              <div className="p-4 border-b border-theme-40">
                <div className="font-medium">Denzel Washington</div>
                <div className="text-xs text-theme-41">Frontend Engineer</div>
              </div>
              <div className="p-2">
                <a
                  href="#"
                  className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                >
                  <i data-feather="user" className="w-4 h-4 mr-2"></i> Profile
                </a>
                <a
                  href="#"
                  className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                >
                  <i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset
                  Password
                </a>
                <a
                  href="#"
                  className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                >
                  <i data-feather="log-out" className="w-4 h-4 mr-2"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AccountMenu;
