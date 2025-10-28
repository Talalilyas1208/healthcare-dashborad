import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const symptomsData = [
  { title: "Headache", image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" },
  { title: "Flu", image: "https://cdn-icons-png.flaticon.com/512/2927/2927347.png" },
  { title: "Joint Pain", image: "https://cdn-icons-png.flaticon.com/512/1087/1087921.png" },
  { title: "Fever", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { title: "Back Pain", image: "https://cdn-icons-png.flaticon.com/512/4320/4320365.png" },
  { title: "Allergies", image: "https://cdn-icons-png.flaticon.com/512/4320/4320348.png" },
  { title: "Acne", image: "https://cdn-icons-png.flaticon.com/512/4320/4320390.png" },
  { title: "Depression", image: "https://cdn-icons-png.flaticon.com/512/4333/4333600.png" },
];

const SymptomsSection = () => {
  return (
    <div style={{ padding: "40px 60px", background: "#f9fafc" }}>
      <Title level={3} style={{ marginBottom: 24 }}>
        Common Symptoms
      </Title>

      <Row gutter={[16, 16]}>
        {symptomsData.map((symptom, index) => (
          <Col
            key={index}
            xs={12}
            sm={8}
            md={6}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                width: 130,
                height: 130,
                borderRadius: 12,
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <img
                src={symptom.image}
                alt={symptom.title}
                style={{ width: 50, height: 50, objectFit: "contain", marginBottom: 10 }}
              />
              <Text strong>{symptom.title}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SymptomsSection;
