import React, { Component, Fragment } from "react";
import "../../../assets/css/app.css";
import DashbordUser from "../../../components/DashboardUser";
import axios from "axios";
import config from "../../../services/api/config";

class Dashboard extends Component {
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
          return <DashbordUser key={data.id} data={data} />;
        })}
      </Fragment>
    );
  }
}

export default Dashboard;
