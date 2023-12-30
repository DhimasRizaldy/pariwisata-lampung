import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import RekomendasiUser from "../../../components/RekomendasiUser";
import axios from "axios";
import config from "../../../services/api/config";
import { useNavigate } from "react-router-dom";

const Rekomendasi = () => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/wisata/${id}`);
  };

  const [wisata, setWisata] = React.useState([]);

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

  React.useEffect(() => {
    getWisataAPI();
  }, []);

  return (
    <Fragment>
      {wisata.map((data) => {
        return (
          <RekomendasiUser key={data.id} data={data} goDetail={handleDetail} />
        );
      })}
    </Fragment>
  );
};

export default Rekomendasi;
