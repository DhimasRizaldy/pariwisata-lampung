import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../../services/api/config";
import admin from "../../../assets/images/avatar/logo avatar 1.jpg";
import user1 from "../../../assets/images/avatar/logo avatar 2.jpg";
import user2 from "../../../assets/images/avatar/logo avatar 1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import YouTube from "react-youtube";

const DetailContent = () => {
  const [wisata, setWisata] = useState({
    nama_wisata: "",
    kategoriId: "",
    daerahId: "",
    alamat: "",
    deskripsi: "",
    jam_operasi: "",
    harga_tiket: "",
    tanggal: "",
    foto_wisata: "",
    urlmaps: "",
    urlvideo: "",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 60000,
  };

  const { wisataId } = useParams();

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/wisata/${wisataId}`)
      .then((res) => {
        console.log("result: ", res);
        let dataWisata = res.data.data;
        setWisata({
          nama_wisata: dataWisata.nama_wisata,
          kategoriId: dataWisata.kategoriId,
          daerahId: dataWisata.daerahId,
          alamat: dataWisata.alamat,
          deskripsi: dataWisata.deskripsi,
          jam_operasi: dataWisata.jam_operasi,
          harga_tiket: dataWisata.harga_tiket,
          tanggal: dataWisata.tanggal,
          foto_wisata: dataWisata.foto_wisata,
          urlmaps: dataWisata.urlmaps,
          urlvideo: dataWisata.urlvideo,
        });
      })
      .catch((error) => {
        console.error("Error fetching wisata:", error);
      });
  }, [wisataId]);

  return (
    <div className="intro-y news p-5 box mt-8">
      <h2 className="intro-y font-medium text-xl sm:text-2xl">
        {wisata.nama_wisata}
      </h2>
      <div className="intro-y text-gray-700 mt-3 text-xs sm:text-sm">
        13 June 2022 <span className="mx-1">•</span>
        <a className="text-theme-1" href="">
          Wisata Alam
        </a>
        <span className="mx-1">•</span> 7 Min read
      </div>
      <div className="intro-y mt-6">
        <Slider {...settings}>
          <div className="news__preview image-fit">
            <img
              src={wisata.foto_wisata}
              alt="Slide 1"
              className="w-full h-auto max-h-64 object-cover !important"
            />
          </div>
          <div className="news__preview image-fit flex justify-center items-center">
            <YouTube
              videoId={wisata.urlvideo}
              className="w-full flex flex-col gap-4 flex justify-center items-center"
            />
          </div>
          <div className="news__preview image-fit">
            <img
              src={wisata.foto_wisata}
              alt="Slide 3"
              className="w-full h-auto max-h-64 object-cover !important"
            />
          </div>
        </Slider>
      </div>
      <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
        <div className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 text-xs sm:text-sm">
          <div className="intro-x mr-1 sm:mr-3">
            Comments: <span className="font-medium">42</span>
          </div>
          <div className="intro-x mr-1 sm:mr-3">
            Views: <span className="font-medium">88k</span>
          </div>
          <div className="intro-x sm:mr-3 ml-auto">
            Likes: <span className="font-medium">204k</span>
          </div>
        </div>
        <a
          href=""
          className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto sm:ml-0 tooltip"
          title="Share"
        >
          <i data-feather="share-2" className="w-3 h-3"></i>
        </a>
      </div>
      <div className="intro-y text-justify leading-relaxed">
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Deskripsi : <span className="font-normal">{wisata.deskripsi}</span>
        </div>
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Kategori Wisata :{" "}
          <span className="font-normal">{wisata.kategoriId}</span>
        </div>
        <p className="mb-1"></p>
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Daerah Wisata : <span className="font-normal">{wisata.daerahId}</span>
        </div>
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Harga Tiket :{" "}
          <span className="font-normal">{wisata.harga_tiket}</span>
        </div>
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Alamat Wisata : <span className="font-normal">{wisata.alamat}</span>
        </div>
        <div className="intro-x mr-1 sm:mr-3 font-medium">
          Maps Alamat Wisata :
        </div>
        <div className="intro-y text-justify leading-relaxed">
          <iframe
            loading="lazy"
            style={{ border: 0 }}
            src={wisata.urlmaps}
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
      <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-12 h-12 flex-none image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="rounded-full"
              src={admin}
            />
          </div>
          <div className="ml-3 mr-auto">
            <a href="" className="font-medium">
              Admin
            </a>
            , Author
            <div className="text-gray-600">Administrator</div>
          </div>
        </div>
        <div className="flex items-center text-gray-700 sm:ml-auto mt-5 sm:mt-0">
          Share this post:
          <a
            href=""
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Facebook"
          >
            <i className="w-3 h-3 fill-current" data-feather="facebook"></i>
          </a>
          <a
            href=""
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Twitter"
          >
            <i className="w-3 h-3 fill-current" data-feather="twitter"></i>
          </a>
          <a
            href=""
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Linked In"
          >
            <i className="w-3 h-3 fill-current" data-feather="linkedin"></i>
          </a>
        </div>
      </div>
      <div className="intro-y mt-5 pt-5 border-t border-gray-200">
        <div className="text-base sm:text-lg font-medium">2 Responses</div>
        <div className="news__input relative mt-5">
          <i
            data-feather="message-circle"
            className="w-5 h-5 absolute my-auto inset-y-0 ml-6 left-0 text-gray-600"
          ></i>
          <textarea
            className="input w-full bg-gray-200 pl-16 py-6 placeholder-theme-13 resize-none"
            rows="1"
            placeholder="Post a comment..."
          ></textarea>
        </div>
      </div>
      <div className="intro-y mt-5 pb-10">
        <div className="pt-5">
          <div className="flex">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src={user1}
              />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center">
                <a href="" className="font-medium">
                  Leonardo DiCaprio
                </a>
                <a href="" className="ml-auto text-xs text-gray-600">
                  Reply
                </a>
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                47 minutes ago
              </div>
              <div className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-gray-200">
          <div className="flex">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src={user2}
              />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center">
                <a href="" className="font-medium">
                  Bruce Willis
                </a>
                <a href="" className="ml-auto text-xs text-gray-600">
                  Reply
                </a>
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                31 seconds ago
              </div>
              <div className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
