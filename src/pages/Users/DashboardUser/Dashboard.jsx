import React, { Fragment, useEffect, useState } from "react";
import "../../../assets/css/app.css";
import DashbordUser from "../../../components/DashboardUser";
import axios from "axios";
import config from "../../../services/api/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [wisata, setWisata] = useState([]);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleDetail = (id) => {
    navigate(`/wisata/${id}`);
  };

  const getWisataAPI = () => {
    axios
      .get(`${config.apiUrl}/wisata`)
      .then((result) => {
        setWisata(result.data.data.wisata);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getWisataAPI();

    // Check apakah login sukses
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess) {
      setIsLoginSuccess(true);
      // Hapus status loginSuccess dari localStorage setelah ditangkap
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  useEffect(() => {
    // Menampilkan toast jika login sukses
    if (isLoginSuccess) {
      toast.success("Login berhasil!", { autoClose: 3000 });
    }
  }, [isLoginSuccess]);

  return (
    <Fragment>
      {wisata.map((data) => (
        <DashbordUser key={data.id} data={data} goDetail={handleDetail} />
      ))}
    </Fragment>
  );
};

export default Dashboard;
