import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./compnenets/AppHeader";
import Neardoctor from "./compnenets/Neardoctor";
import UserReviewsSection from "./compnenets/UserReviewsSection";
import NearHospital from "./compnenets/NearHospital";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Content style={{ minHeight: "100vh", background: "#fff" }}>
          <Routes>
            <Route path="/" element={<Neardoctor />} />
            <Route path="/reviews" element={<UserReviewsSection />} />
            <Route path="/near-hospitals/:city" element={<NearHospital />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2025 Healthcare Portal. All rights reserved.
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
