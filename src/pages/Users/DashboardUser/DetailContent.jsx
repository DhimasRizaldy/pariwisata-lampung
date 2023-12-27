import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import config from "../../../services/api/config";

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
  });

  const { wisataId } = useParams();

  useEffect(() => {
    Axios.length(`${config.apiUrl}/wisata/${wisataId}`)
      .then((res) => {
        console.log("result: ", res);
        let wisataData = res.data;
        setWisata({
          nama_wsiata: wisataData.data,
          kategoriId: wisataData.data,
          daerahId: wisataData.data,
          alamat: wisataData.data,
          deskripsi: wisataData.data,
          jam_operasi: wisataData.data,
          harga_tiket: wisataData.data,
          tanggal: wisataData.data,
          foto_wisata: wisataData.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching wisata:", error);
      });
  }, [wisataId]);

  return (
    <div class="intro-y news p-5 box mt-8">
      <h2 class="intro-y font-medium text-xl sm:text-2xl">
        Desktop publishing software like Aldus PageMaker
      </h2>
      <div class="intro-y text-gray-700 mt-3 text-xs sm:text-sm">
        13 June 2022 <span class="mx-1">•</span>
        <a class="text-theme-1" href="">
          Photography
        </a>
        <span class="mx-1">•</span> 7 Min read
      </div>
      <div class="intro-y mt-6">
        <div class="news__preview image-fit image-zoom relative">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-md"
            src="dist/images/preview-11.jpg"
            data-zoom="dist/images/preview-11.jpg"
          />
        </div>
      </div>
      <div class="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
        <a
          href=""
          class="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full border border-gray-500 text-gray-600 mr-3 tooltip"
          title="Bookmark"
        >
          <i data-feather="bookmark" class="w-3 h-3"></i>
        </a>
        <div class="intro-x flex mr-3">
          <div class="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full border border-white zoom-in tooltip"
              src="dist/images/profile-3.jpg"
              title="Leonardo DiCaprio"
            />
          </div>
          <div class="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full border border-white zoom-in tooltip"
              src="dist/images/profile-10.jpg"
              title="Bruce Willis"
            />
          </div>
          <div class="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full border border-white zoom-in tooltip"
              src="dist/images/profile-4.jpg"
              title="Catherine Zeta-Jones"
            />
          </div>
        </div>
        <div class="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 text-xs sm:text-sm">
          <div class="intro-x mr-1 sm:mr-3">
            Comments: <span class="font-medium">42</span>
          </div>
          <div class="intro-x mr-1 sm:mr-3">
            Views: <span class="font-medium">88k</span>
          </div>
          <div class="intro-x sm:mr-3 ml-auto">
            Likes: <span class="font-medium">204k</span>
          </div>
        </div>
        <a
          href=""
          class="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-14 text-theme-10 ml-auto sm:ml-0 tooltip"
          title="Share"
        >
          <i data-feather="share-2" class="w-3 h-3"></i>
        </a>
        <a
          href=""
          class="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-1 text-white ml-3 tooltip"
          title="Download PDF"
        >
          <i data-feather="share" class="w-3 h-3"></i>
        </a>
      </div>
      <div class="intro-y text-justify leading-relaxed">
        <p class="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &#039;Content here, content here&#039;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &#039;lorem ipsum&#039; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
        <p class="mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &#039;Content here, content here&#039;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &#039;lorem ipsum&#039; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#039;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#039;t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </div>
      <div class="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200">
        <div class="flex items-center">
          <div class="w-12 h-12 flex-none image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              src="dist/images/profile-3.jpg"
            />
          </div>
          <div class="ml-3 mr-auto">
            <a href="" class="font-medium">
              Leonardo DiCaprio
            </a>
            , Author
            <div class="text-gray-600">Senior Frontend Engineer</div>
          </div>
        </div>
        <div class="flex items-center text-gray-700 sm:ml-auto mt-5 sm:mt-0">
          Share this post:
          <a
            href=""
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Facebook"
          >
            <i class="w-3 h-3 fill-current" data-feather="facebook"></i>
          </a>
          <a
            href=""
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Twitter"
          >
            <i class="w-3 h-3 fill-current" data-feather="twitter"></i>
          </a>
          <a
            href=""
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ml-2 text-gray-500 zoom-in tooltip"
            title="Linked In"
          >
            <i class="w-3 h-3 fill-current" data-feather="linkedin"></i>
          </a>
        </div>
      </div>
      <div class="intro-y mt-5 pt-5 border-t border-gray-200">
        <div class="text-base sm:text-lg font-medium">2 Responses</div>
        <div class="news__input relative mt-5">
          <i
            data-feather="message-circle"
            class="w-5 h-5 absolute my-auto inset-y-0 ml-6 left-0 text-gray-600"
          ></i>
          <textarea
            class="input w-full bg-gray-200 pl-16 py-6 placeholder-theme-13 resize-none"
            rows="1"
            placeholder="Post a comment..."
          ></textarea>
        </div>
      </div>
      <div class="intro-y mt-5 pb-10">
        <div class="pt-5">
          <div class="flex">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                src="dist/images/profile-3.jpg"
              />
            </div>
            <div class="ml-3 flex-1">
              <div class="flex items-center">
                <a href="" class="font-medium">
                  Leonardo DiCaprio
                </a>
                <a href="" class="ml-auto text-xs text-gray-600">
                  Reply
                </a>
              </div>
              <div class="text-gray-600 text-xs sm:text-sm">47 minutes ago</div>
              <div class="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 pt-5 border-t border-gray-200">
          <div class="flex">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                src="dist/images/profile-10.jpg"
              />
            </div>
            <div class="ml-3 flex-1">
              <div class="flex items-center">
                <a href="" class="font-medium">
                  Bruce Willis
                </a>
                <a href="" class="ml-auto text-xs text-gray-600">
                  Reply
                </a>
              </div>
              <div class="text-gray-600 text-xs sm:text-sm">31 seconds ago</div>
              <div class="mt-2">
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
