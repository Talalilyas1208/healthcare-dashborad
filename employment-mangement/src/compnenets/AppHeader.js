import React from "react";
import { Layout, Menu, Button, Avatar, Space } from "antd";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // stronger visible shadow
      }}
    >
      {/* Left: Logo or Text */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: "bold", fontSize: 18 }}>
        this is my new app
      </div>

      {/* Center: Menu */}
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

      {/* Right: Action Buttons */}
      <Space size="middle" align="center">
        <Button
          icon={<PhoneOutlined />}
          shape="circle"
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#1890ff",
            color: "#1890ff",
          }}
        />
        <Button type="primary" size="large">
          Login
        </Button>
        <Avatar
          icon={<UserOutlined />}
          size="large"
          style={{ backgroundColor: "#1890ff" }}
        />
      </Space>
    </Header>
  );
};

export default AppHeader;
