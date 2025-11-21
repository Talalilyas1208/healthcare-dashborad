import React from "react";
import { Typography, Space, Select, Input, Row, Col, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const SearchSection = () => {
  return (
    <Card
      bordered={false}
      style={{
        padding: "40px 20px",
        width: "100%",
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Text strong style={{ fontSize: 16 }}>
          Hello, Guest!
        </Text>

        <Title level={4}>Find the Best Doctor Near You</Title>

        {/* GRID FOR RESPONSIVENESS */}
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          {/* CITY DROPDOWN */}
          <Col xs={24} sm={8} md={6} lg={4}>
            <Select
              defaultValue="Lahore"
              size="large"
              style={{ width: "100%" }}
            >
              <Option value="Lahore">Lahore</Option>
              <Option value="Karachi">Karachi</Option>
              <Option value="Islamabad">Islamabad</Option>
            </Select>
          </Col>

          {/* SEARCH BAR */}
          <Col xs={24} sm={16} md={18} lg={20}>
            <Input
              size="large"
              placeholder="Search by Doctors"
              prefix={<SearchOutlined />}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Space>
    </Card>
  );
};

export default SearchSection;
