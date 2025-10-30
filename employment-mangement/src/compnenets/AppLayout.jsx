import React from "react";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import SearchSection from "./SearchSection";
import ServiceCards from "./ServiceCards";
import AdviceSection from "./AdviceSection";
import Neardoctor from "./Neardoctor";
import SymptomsSection from "./SymptomsSection";
import UserReviewsSection from "./UserReviewsSection";
const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content >
        <SearchSection />
        <ServiceCards />
        <AdviceSection />
        <Neardoctor />
        <SymptomsSection />
        <UserReviewsSection />
      </Content>
    </Layout>
  );
};

export default AppLayout;
