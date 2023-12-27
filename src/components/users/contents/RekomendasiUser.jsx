import React, { Fragment, useEffect } from "react";
import "../SliderBanner";
import feather from "feather-icons";

const RekomendasiUser = (props) => {
  useEffect(() => {
    feather.replace();
  }, []);

  const { foto_wisata, data } = props;

  return (
    <Fragment>
      <div className="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
        <div className="flex items-center border-b border-gray-200 px-5 py-4">
          <div className="w-10 h-10 flex-none image-fit">
            {foto_wisata && (
              <img alt="wisata" className="rounded-full" src={foto_wisata} />
            )}
          </div>
          <div className="ml-3 mr-auto">
            <a href="" className="font-medium">
              Wisata Lampung
            </a>
            <div className="flex text-gray-600 truncate text-xs mt-1">
              <a className="text-theme-1 inline-block truncate" href="">
                Admin
              </a>
              <span className="mx-1">•</span> 14 seconds ago
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="h-40 xxl:h-56 image-fit">
            <img
              alt="Wisata Lampung"
              className="rounded-md"
              src={data.foto_wisata || "default_image_url"}
            />
          </div>
          <div
            className="block font-medium text-base mt-5"
            onClick={() => props.goDetail(data.id)}
          >
            {data.nama_wisata}
          </div>
          <div className="text-gray-700 mt-2">{data.deskripsi}</div>
        </div>
        <div className="flex items-center px-5 py-3 border-t border-gray-200">
          <a
            href=""
            className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-600 mr-2 tooltip"
            title="Bookmark"
          >
            <i data-feather="bookmark" className="w-3 h-3"></i>
          </a>
          <a
            href=""
            className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto tooltip"
            title="Share"
          >
            <i data-feather="share-2" className="w-3 h-3"></i>
          </a>
        </div>
        <div className="px-5 pt-3 pb-5 border-t border-gray-200">
          <div className="w-full flex text-gray-600 text-xs sm:text-sm">
            <div className="mr-2">
              Comments: <span className="font-medium">30</span>
            </div>
            <div className="mr-2">
              Views: <span className="font-medium">85k</span>
            </div>
            <div className="ml-auto">
              RekomendasiUser: <span className="font-medium">87k</span>
            </div>
          </div>
          <button className="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
            Vote
          </button>
          <button
            className="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white"
            onClick={() => props.goDetail(data.id)}
          >
            <a href="" onClick={() => props.goDetail(data.id)}>
              Lihat
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default RekomendasiUser;
