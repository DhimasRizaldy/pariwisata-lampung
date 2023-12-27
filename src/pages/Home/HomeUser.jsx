// HomeUser.js
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileNav from "../../components/MobileNav";
import TopBar from "../../components/TopBar";
import TopNav from "../../components/TopNav";
import FooterNav from "../../components/FooterNav";
import ContentUser from "../../pages/Users/DashboardUser/ContentUser";
import ContentRekomendasi from "../Users/Rekomendasi/ContentRekomendasi";
import dotenv from "dotenv";

class HomeUser extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MobileNav />
          <TopBar />
          <TopNav />
          <div className="content">
            <Routes>
              <Route path="/" element={<ContentUser />} />
              <Route
                path="/kategori-wisata"
                element={<h1>Kategori Wisata</h1>}
              />
              <Route path="/rekomendasi" element={<ContentRekomendasi />} />
            </Routes>
          </div>
          <FooterNav />
        </div>
      </Router>
    );
  }
}

export default HomeUser;
