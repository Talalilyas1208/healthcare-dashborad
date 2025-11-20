import React from "react";
import { Layout, Menu, Button, Avatar } from "antd";
import {
  PhoneOutlined,
  UserOutlined
} from "@ant-design/icons";

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
        height: 70,
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        borderBottom: "1px solid #eee",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LEFT LOGO */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#0B4DA1",
          marginRight: 40,
        }}
      >
        My App
      </div>

      {/* CENTER MENU */}
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{
          flex: 1,
          borderBottom: "none",
          fontSize: "15px",
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* CALL BUTTON */}
        <Button
          shape="circle"
          icon={<PhoneOutlined />}
          size="large"
          style={{
            borderColor: "#0B4DA1",
            color: "#0B4DA1",
          }}
        />

        {/* LOGIN BUTTON */}
        <Button
          type="primary"
          style={{
            background: "#0B4DA1",
            padding: "0 20px",
            height: 40,
            borderRadius: 8,
          }}
        >
          Login
        </Button>

        <Avatar
          size="large"
          style={{ background: "#0B4DA1", cursor: "pointer" }}
          icon={<UserOutlined />}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
