import React, { Component, Fragment } from "react";
import feather from "feather-icons";
import SliderBanner from "../SliderBanner/SliderBanner";

class Wisata extends Component {
  componentDidMount() {
    feather.replace();
  }
  render() {
    return (
      <Fragment>
        <div class="content">
          <SliderBanner />
          <div class="intro-y flex items-center justify-center mt-10 mb-10">
            <h2 class="text-lg font-bold">Data Wisata Alam Lampung</h2>
          </div>
          <div class="flex items-center justify-between bg-gray-100 p-4">
            <div class="relative">
              <input
                type="text"
                class="border rounded-md py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
                placeholder="Cari..."
              />
              <button class="absolute right-0 top-0 mt-3 mr-4">
                <i data-feather="search" class="text-gray-500"></i>
              </button>
            </div>
          </div>

          <div class="intro-y grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
              <div class="flex items-center border-b border-gray-200 px-5 py-4">
                <div class="w-10 h-10 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src=""
                  />
                </div>
                <div class="ml-3 mr-auto">
                  <a href="" class="font-medium">
                    Leonardo DiCaprio
                  </a>
                  <div class="flex text-gray-600 truncate text-xs mt-1">
                    {" "}
                    <a class="text-theme-1 inline-block truncate" href="">
                      Photography
                    </a>{" "}
                    <span class="mx-1">•</span> 14 seconds ago{" "}
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="h-40 xxl:h-56 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-md"
                    src=""
                  />
                </div>
                <a href="" class="block font-medium text-base mt-5">
                  200 Latin words, combined with a handful of model sentences
                </a>
                <div class="text-gray-700 mt-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomi
                </div>
              </div>
              <div class="flex items-center px-5 py-3 border-t border-gray-200">
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-600 mr-2 tooltip"
                  title="Bookmark"
                >
                  {" "}
                  <i data-feather="bookmark" class="w-3 h-3"></i>{" "}
                </a>
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto tooltip"
                  title="Share"
                >
                  {" "}
                  <i data-feather="share-2" class="w-3 h-3"></i>{" "}
                </a>
              </div>
              <div class="px-5 pt-3 pb-5 border-t border-gray-200">
                <div class="w-full flex text-gray-600 text-xs sm:text-sm">
                  <div class="mr-2">
                    {" "}
                    Comments: <span class="font-medium">30</span>{" "}
                  </div>
                  <div class="mr-2">
                    {" "}
                    Views: <span class="font-medium">85k</span>{" "}
                  </div>
                  <div class="ml-auto">
                    {" "}
                    Likes: <span class="font-medium">87k</span>{" "}
                  </div>
                </div>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  Vote
                </button>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  <a href="">Lihat</a>
                </button>
              </div>
            </div>
            <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
              <div class="flex items-center border-b border-gray-200 px-5 py-4">
                <div class="w-10 h-10 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src=""
                  />
                </div>
                <div class="ml-3 mr-auto">
                  <a href="" class="font-medium">
                    Leonardo DiCaprio
                  </a>
                  <div class="flex text-gray-600 truncate text-xs mt-1">
                    {" "}
                    <a class="text-theme-1 inline-block truncate" href="">
                      Photography
                    </a>{" "}
                    <span class="mx-1">•</span> 14 seconds ago{" "}
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="h-40 xxl:h-56 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-md"
                    src=""
                  />
                </div>
                <a href="" class="block font-medium text-base mt-5">
                  200 Latin words, combined with a handful of model sentences
                </a>
                <div class="text-gray-700 mt-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomi
                </div>
              </div>
              <div class="flex items-center px-5 py-3 border-t border-gray-200">
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-600 mr-2 tooltip"
                  title="Bookmark"
                >
                  {" "}
                  <i data-feather="bookmark" class="w-3 h-3"></i>{" "}
                </a>
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto tooltip"
                  title="Share"
                >
                  {" "}
                  <i data-feather="share-2" class="w-3 h-3"></i>{" "}
                </a>
              </div>
              <div class="px-5 pt-3 pb-5 border-t border-gray-200">
                <div class="w-full flex text-gray-600 text-xs sm:text-sm">
                  <div class="mr-2">
                    {" "}
                    Comments: <span class="font-medium">30</span>{" "}
                  </div>
                  <div class="mr-2">
                    {" "}
                    Views: <span class="font-medium">85k</span>{" "}
                  </div>
                  <div class="ml-auto">
                    {" "}
                    Likes: <span class="font-medium">87k</span>{" "}
                  </div>
                </div>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  Vote
                </button>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  <a href="">Lihat</a>
                </button>
              </div>
            </div>
            <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box">
              <div class="flex items-center border-b border-gray-200 px-5 py-4">
                <div class="w-10 h-10 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src=""
                  />
                </div>
                <div class="ml-3 mr-auto">
                  <a href="" class="font-medium">
                    Leonardo DiCaprio
                  </a>
                  <div class="flex text-gray-600 truncate text-xs mt-1">
                    {" "}
                    <a class="text-theme-1 inline-block truncate" href="">
                      Photography
                    </a>{" "}
                    <span class="mx-1">•</span> 14 seconds ago{" "}
                  </div>
                </div>
              </div>
              <div class="p-5">
                <div class="h-40 xxl:h-56 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-md"
                    src=""
                  />
                </div>
                <a href="" class="block font-medium text-base mt-5">
                  200 Latin words, combined with a handful of model sentences
                </a>
                <div class="text-gray-700 mt-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomi
                </div>
              </div>
              <div class="flex items-center px-5 py-3 border-t border-gray-200">
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-600 mr-2 tooltip"
                  title="Bookmark"
                >
                  {" "}
                  <i data-feather="bookmark" class="w-3 h-3"></i>{" "}
                </a>
                <a
                  href=""
                  class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto tooltip"
                  title="Share"
                >
                  {" "}
                  <i data-feather="share-2" class="w-3 h-3"></i>{" "}
                </a>
              </div>
              <div class="px-5 pt-3 pb-5 border-t border-gray-200">
                <div class="w-full flex text-gray-600 text-xs sm:text-sm">
                  <div class="mr-2">
                    {" "}
                    Comments: <span class="font-medium">30</span>{" "}
                  </div>
                  <div class="mr-2">
                    {" "}
                    Views: <span class="font-medium">85k</span>{" "}
                  </div>
                  <div class="ml-auto">
                    {" "}
                    Likes: <span class="font-medium">87k</span>{" "}
                  </div>
                </div>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  Vote
                </button>
                <button class="button w-24 rounded-full shadow-md mr- mb-2 mt-2 bg-theme-1 text-white">
                  <a href="">Lihat</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Wisata;
