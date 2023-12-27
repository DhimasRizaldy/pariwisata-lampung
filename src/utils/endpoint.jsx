export const API_ENDPOINT = {
  // User
  USER_WHOAMI: "/auth/whoami",
  USER_LOGIN: "/auth/login",
  USER_REGISTER: "/auth/register",
  USER_PROFIL: "/profile",

  // Kategori Wisata
  POST_KATEGORI_WISATA: "/kategoriWisata",
  GET_KATEGORI_WISATA: "/kategoriWisata",
  PUT_KATEGORI_WISATA: (id) => {
    return `/kategoriWisata/${id}`;
  },
  DELETE_KATEGORI_WISATA: (id) => {
    return `/kategoriWisata/${id}`;
  },

  // Daerah
  POST_DAERAH: "/daerah",
  GET_DAERAH: "/daerah",
  PUT_DAERAH: (id) => {
    return `/daerah/${id}`;
  },
  DELETE_DAERAH: (id) => {
    return `/daerah/${id}`;
  },

  // Wisata
  POST_WISATA: "/wisata",
  GET_WISATA: "/wisata",
  GET_DETAIL_WISATA: (id) => {
    return `/wisata/${id}`;
  },
  PUT_WISATA: (id) => {
    return `/wisata/${id}`;
  },
  DELETE_WISATA: (id) => {
    return `/wisata/${id}`;
  },
  GET_SEARCH_WISATA: (keyword) => {
    return `/search_wisata/${keyword}`;
  },
  GET_IN_KATEGORI_WISATA: (id) => {
    return `/kategori_wisata/${id}`;
  },

  // Ulasan
  POST_ULASAN: "/ulasan",
  GET_ULASAN: "/ulasan",
  GET_DETAIL_ULASAN: (id) => {
    return `/ulasan/${id}`;
  },
  PUT_ULASAN: (id) => {
    return `/ulasan/${id}`;
  },
  DELETE_ULASAN: (id) => {
    return `/ulasan/${id}`;
  },

  // Rekomendasi By User
  POST_REKOMENDASI: "/rekomedasi",
  GET_REKOMENDASI: "/rekomendasi",
  PUT_REKOMENDASI: (id) => {
    return `/rekomendasi/${id}`;
  },
  DELETE_REKOMENDASI: (id) => {
    return `/rekomendasi/${id}`;
  },
};
