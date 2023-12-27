import React, { Component, Fragment } from "react";
import Profile11 from "../assets/images/profile-11.jpg";
import Profile7 from "../assets/images/profile-7.jpg";
import Profile3 from "../assets/images/profile-3.jpg";
import Profile1 from "../assets/images/profile-1.jpg";
import feather from "feather-icons";

class Notifications extends Component {
  render() {
    return (
      <Fragment>
        <div className="intro-x dropdown relative mr-4 sm:mr-6">
          <div className="dropdown-toggle notification notification--light notification--bullet cursor-pointer">
            <i data-feather="bell" className="notification__icon"></i>
          </div>
          <div className="notification-content dropdown-box mt-8 absolute top-0 right-0 z-10 -mr-10 sm:mr-0">
            <div className="notification-content__box dropdown-box__content box">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={Profile11}
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Denzel Washington
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={Profile7}
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Robert De Niro
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={Profile3}
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      John Travolta
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600">
                    It is a long established fact that a reader will be racted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={Profile1}
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Tom Cruise
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classNameical Latin
                    literature from 45 BC, making it over 20
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={Profile3}
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Al Pacino
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                      05:09 AM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Notifications;
