import React from "react";
import { Layout, Menu, Input, Button, Select, Space, Avatar } from "antd";
import { SearchOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Option } = Select;

const AppHeader = () => {
  const menuItems = [
    { key: "1", label: "Find Doctors" },
    { key: "2", label: "Hospitals" },
    { key: "3", label: "Surgeries" },
    { key: "4", label: "Medicines" },
    { key: "5", label: "Labs" },
    { key: "6", label: "Health Hub" },
    { key: "7", label: "Forum" },
    { key: "8", label: "Join as Doctor" },
  ];

  return (
    <Header
      style={{
        background: "#fff",
        height: 80,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        this is my new app
      </div>

      <Menu
        mode="horizontal"
        items={menuItems}
        style={{
          flex: 1,
          justifyContent: "center",
          borderBottom: "none",
          background: "transparent",
          fontWeight: 500,
        }}
      />

      <Button icon={<PhoneOutlined />} shape="circle" />
      <Button type="primary">Login</Button>
      <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
    </Header>
  );
};

export default AppHeader;
