import React from "react";
import { Typography, Space, Select, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const SearchSection = () => {
  return (
    <div style={{ padding: "40px 80px", background: "#fff" }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Text strong style={{ fontSize: 16 }}>
          Hello, Guest!
        </Text>
        <Title level={4}>Find the Best Doctor Near You</Title>

        <Space style={{ width: "100%" }}>
          <Select defaultValue="Lahore" style={{ width: 180,height:50 }}>
            <Option value="Lahore">Lahore</Option>
            <Option value="Karachi">Karachi</Option>
            <Option value="Islamabad">Islamabad</Option>
          </Select>

          <Input
            placeholder="Search by Doctors"
            prefix={<SearchOutlined />}
            style={{ width: 1000, borderRadius: 6 ,height:50 }}
          />
        </Space>
      </Space>
    </div>
  );
};

export default SearchSection;
