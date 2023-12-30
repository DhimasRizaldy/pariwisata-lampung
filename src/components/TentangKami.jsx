import React, { Fragment, useEffect } from "react";
import "./SliderBanner";
import feather from "feather-icons";

const TentangKami = (props) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Fragment>
      <div className="intro-y flex justify-center mt-6">
        <div className="pricing-tabs nav-tabs box rounded-full overflow-hidden flex">
          <a
            data-toggle="tab"
            data-target="#layout-1-monthly-fees"
            href="#"
            className="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-no-wrap text-center active"
          >
            Pariwisata Lampung
          </a>
          <a
            data-toggle="tab"
            data-target="#layout-1-annual-fees"
            href="#"
            className="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-no-wrap text-center"
          >
            Wisata ALam Lampung
          </a>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="tab-content">
          <div
            className="tab-content__pane flex flex-col lg:flex-row active"
            id="layout-1-monthly-fees"
          >
            <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
              <i
                data-feather="briefcase"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Business
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  60
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
              <i
                data-feather="briefcase"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Business
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  60
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div className="intro-y flex-1 box py-16 lg:ml-5">
              <i
                data-feather="shopping-bag"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Enterprise
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  120
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
          </div>
          <div
            className="tab-content__pane flex flex-col lg:flex-row"
            id="layout-1-annual-fees"
          >
            <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
              <i
                data-feather="briefcase"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Business
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  60
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
              <i
                data-feather="briefcase"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Business
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  40
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div className="intro-y flex-1 box py-16 lg:ml-5">
              <i
                data-feather="shopping-bag"
                className="w-12 h-12 text-theme-1 mx-auto"
              ></i>
              <div className="text-xl font-medium text-center mt-10">
                Enterprise
              </div>
              <div className="text-gray-700 text-center mt-5">
                1 Domain <span className="mx-1">•</span> 10 Users
                <span className="mx-1">•</span> 20 Copies
              </div>
              <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex justify-center">
                <div className="relative text-5xl font-semibold mt-8 mx-auto">
                  90
                  <span className="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1">
                    $
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y box mt-20 px-8 py-12">
        <h2 className="intro-y text-2xl font-medium text-center mr-auto">
          Developer
        </h2>
        <div className="intro-y flex justify-center mt-6">
          <div className="pricing-tabs nav-tabs box rounded-full overflow-hidden flex">
            <a
              data-toggle="tab"
              data-target="#layout-2-monthly-fees"
              href="#"
              className="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-no-wrap text-center active"
            >
              Informasi
            </a>
            <a
              data-toggle="tab"
              data-target="#layout-2-annual-fees"
              href="#"
              className="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-no-wrap text-center"
            >
              Developer
            </a>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="tab-content">
            <div
              className="tab-content__pane flex flex-col lg:flex-row active"
              id="layout-1-monthly-fees"
            >
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <i
                  data-feather="briefcase"
                  className="w-12 h-12 text-theme-1 mx-auto"
                ></i>
                <div className="text-xl font-medium text-center mt-10">
                  Sabda Adjie Saputra
                </div>
                <div className="text-xl font-medium text-center mt-1">
                  20312040
                </div>
                <div className="text-gray-700 text-center mt-2">
                  Divisi <span className="mx-1">:</span> Product Manager
                </div>
                <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center"></div>
                <button
                  type="button"
                  className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
                >
                  Kunjungi Sosmed
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <i
                  data-feather="briefcase"
                  className="w-12 h-12 text-theme-1 mx-auto"
                ></i>
                <div className="text-xl font-medium text-center mt-10">
                  Dhimas Rizaldy
                </div>
                <div className="text-xl font-medium text-center mt-1">
                  20312030
                </div>
                <div className="text-gray-700 text-center mt-2">
                  Divisi <span className="mx-1">:</span> Backend Developer
                </div>
                <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center"></div>
                <button
                  type="button"
                  className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
                >
                  Kunjungi Sosmed
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <i
                  data-feather="briefcase"
                  className="w-12 h-12 text-theme-1 mx-auto"
                ></i>
                <div className="text-xl font-medium text-center mt-10">
                  Adhitya Elga Nalendra
                </div>
                <div className="text-xl font-medium text-center mt-1">
                  20312156
                </div>
                <div className="text-gray-700 text-center mt-2">
                  Divisi <span className="mx-1">:</span> Ui/UX
                </div>
                <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center"></div>
                <button
                  type="button"
                  className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
                >
                  Kunjungi Sosmed
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <i
                  data-feather="briefcase"
                  className="w-12 h-12 text-theme-1 mx-auto"
                ></i>
                <div className="text-xl font-medium text-center mt-10">
                  Siti Anisa
                </div>
                <div className="text-xl font-medium text-center mt-1">
                  20312035
                </div>
                <div className="text-gray-700 text-center mt-2">
                  Divisi <span className="mx-1">:</span> Frontend Developer
                </div>
                <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center"></div>
                <button
                  type="button"
                  className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
                >
                  Kunjungi Sosmed
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <i
                  data-feather="briefcase"
                  className="w-12 h-12 text-theme-1 mx-auto"
                ></i>
                <div className="text-xl font-medium text-center mt-10">
                  Adelia Riskhi Arisandi
                </div>
                <div className="text-xl font-medium text-center mt-1">
                  20312105
                </div>
                <div className="text-gray-700 text-center mt-2">
                  Divisi <span className="mx-1">:</span> Frontend Developer
                </div>
                <div className="text-gray-600 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center"></div>
                <button
                  type="button"
                  className="button button--lg block text-white bg-theme-1 rounded-full mx-auto mt-8"
                >
                  Kunjungi Sosmed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TentangKami;
