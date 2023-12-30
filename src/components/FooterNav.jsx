import React, { Component, Fragment } from "react";
import feather from "feather-icons";
import { Link } from "react-router-dom";

class FooterNav extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <Fragment>
        <footer className="border-theme-24 text-white py-12">
          <div className="container mx-auto flex flex-wrap items-start justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 ml-auto">
              <h1 className="text-2xl font-bold">Pariwisata Lampung</h1>
              <p className="mt-4">
                Website Pariwisata Lampung merupakan platform digital yang
                dirancang untuk memberikan informasi lengkap dan menarik tentang
                destinasi pariwisata di provinsi Lampung. Dengan tampilan yang
                ramah pengguna, website ini menyajikan beragam konten
                informatif, mulai dari keindahan alam, objek wisata, budaya.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Navigasi</h2>
              <ul>
                <li>
                  <Link to="/" className="hover:text-gray-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/kategori-wisata" className="hover:text-gray-500">
                    Kategori Wisata Alam
                  </Link>
                </li>
                <li>
                  <Link to="/rekomendasi" className="hover:text-gray-500">
                    Rekomendasi
                  </Link>
                </li>
                <li>
                  <Link to="/tentang-kami" className="hover:text-gray-500">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-gray-500">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-gray-500">
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Hubungi Kami</h2>
              <p>Email: pariwisata-lampung@gmail.com</p>
              <p>Telepon: (0896) 7213-7890</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4">
              <h2 className="text-lg font-semibold mb-4">Ikuti Kami</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  data-feather="youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default FooterNav;
