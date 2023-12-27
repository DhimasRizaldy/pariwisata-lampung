import React, { Component, Fragment } from "react";
import RekomendasiUser from "../../../components/RekomendasiUser";
import axios from "axios";
import config from "../../../services/api/config";

class Rekomendasi extends Component {
  state = {
    wisata: [],
  };

  getWisataAPI = () => {
    axios
      .get(`${config.apiUrl}/wisata`)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          wisata: result.data.data.wisata,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  componentDidMount() {
    this.getWisataAPI();
  }

  render() {
    return (
      <Fragment>
        {this.state.wisata.map((data) => {
          return <RekomendasiUser key={data.id} data={data} />;
        })}
      </Fragment>
    );
  }
}

export default Rekomendasi;
