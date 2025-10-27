import React from "react";
import { Card, Typography, Button, Space } from "antd";

const { Title, Text } = Typography;

const AdviceSection = () => {
  return (
    <div style={{ padding: "40px 80px", background: "#E9F6F6" }}>
      <Card bordered={false} style={{ background: "transparent" }}>
        <Title level={4}>Get free medical advice by asking a doctor</Title>
        <ul style={{ lineHeight: 1.8 }}>
          <li>
            <Text>Ask a question anonymously</Text>
          </li>
          <li>
            <Text>Get a reply from PMC verified doctors</Text>
          </li>
        </ul>
        <Space style={{ marginTop: 16 }}>
          <Button>View All Questions</Button>
          <Button type="primary">Ask a Question</Button>
        </Space>
      </Card>
    </div>
  );
};

export default AdviceSection;
