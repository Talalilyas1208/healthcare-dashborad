import React from "react";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import SearchSection from "./SearchSection";
import ServiceCards from "./ServiceCards";
import AdviceSection from "./AdviceSection";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ background: "#fff" }}>
        <SearchSection />
        <ServiceCards />
        <AdviceSection />
      </Content>
    </Layout>
  );
};

export default AppLayout;
