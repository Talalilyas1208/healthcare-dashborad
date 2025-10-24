import React from "react";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  const userMenu = {
    items: [
      {
        key: "1",
        label: "Profile",
        icon: <UserOutlined />,
      },
      {
        key: "2",
        label: "Settings",
        icon: <SettingOutlined />,
      },
      {
        type: "divider",
      },
      {
        key: "3",
        label: "Logout",
        icon: <LogoutOutlined />,
        danger: true,
      },
    ],
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(90deg, #001529, #003a8c)",
        padding: "0 32px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left Logo / Brand Name */}
      <div
        style={{
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
      >
        My Dashboard
      </div>

      {/* Center Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={[
          { key: "1", label: "Home" },
          { key: "2", label: "Analytics" },
          { key: "3", label: "Reports" },
          { key: "4", label: "Settings" },
        ]}
        style={{
          flex: 1,
          justifyContent: "center",
          background: "transparent",
          borderBottom: "none",
        }}
      />

      <Space size="large">
        <BellOutlined
          style={{ color: "white", fontSize: "18px", cursor: "pointer" }}
        />
        <Dropdown menu={userMenu} placement="bottomRight" arrow>
          <Avatar
            size="large"
            style={{ cursor: "pointer", backgroundColor: "#1890ff" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Space>
    </Header>
  );
};

export default AppHeader;
