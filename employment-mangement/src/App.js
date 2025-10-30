import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AppLayout from "./compnenets/AppLayout";
const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
     
        <Content style={{ minHeight: "100vh", background: "#fff" }}>
          <Routes>
            <Route path="/" element={<AppLayout />} />
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
