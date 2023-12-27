import React, { Component, Fragment } from "react";
import "../../../assets/dist/css/app.css";
import feather from "feather-icons";

class FooterNav extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <Fragment>
        <footer className="border-theme-24 text-white py-12">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h1 className="text-2xl font-bold">Nama Perusahaan</h1>
              <p className="mt-4">Deskripsi singkat tentang perusahaan Anda.</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Navigasi</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Kategori Wisata Alam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Rekomendasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Hubungi Kami</h2>
              <p>Email: info@namaperusahaan.com</p>
              <p>Telepon: (123) 456-7890</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4">
              <h2 className="text-lg font-semibold mb-4">Ikuti Kami</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="facebook"
                ></a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="twitter"
                ></a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="instagram"
                ></a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="linkedin"
                ></a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="youtube"
                ></a>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default FooterNav;
