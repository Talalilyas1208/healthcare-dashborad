import React, { useState } from "react";
import { Layout, Menu, Button, Grid, Input, Avatar } from "antd";
import { MenuOutlined, SearchOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader = () => {
  const screens = useBreakpoint();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Header style={{ padding: '0 20px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Logo */}
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1890ff' }}>Marham Clone</div>

        {/* Desktop Menu */}
        {screens.md ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Input placeholder="Search" prefix={<SearchOutlined />} style={{ width: 200 }} />
            <Button type="primary" icon={<PhoneOutlined />}>Contact</Button>
            <Avatar icon={<UserOutlined />} />
          </div>
        ) : (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '20px' }} />}
            onClick={() => setMenuVisible(!menuVisible)}
          />
        )}
      </Header>

      {/* Mobile Dropdown Menu */}
      {!screens.md && menuVisible && (
        <div style={{ background: '#fff', padding: '10px 20px', borderBottom: '1px solid #f0f0f0' }}>
          <Menu mode="vertical">
            <Menu.Item key="1" icon={<SearchOutlined />}>Search</Menu.Item>
            <Menu.Item key="2" icon={<PhoneOutlined />}>Contact</Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>Profile</Menu.Item>
          </Menu>
        </div>
      )}
    </>
  );
};

export default AppHeader;
