import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;

const services = [
  {
    title: "Video Consultation",
    subtitle: "PMC Verified Doctors",
 
    bg: "#E8F4FB",
  },
  {
    title: "In-clinic Visit",
    subtitle: "Book Appointment",
    
    bg: "#FCEFE6",
  },
  {
    title: "Weight Loss Clinic",
    subtitle: "Healthy Lifestyle",
 
    bg: "#FEF7E6",
  },
];

const ServiceCards = () => {
  return (
    <div style={{ padding: "40px 80px", background: "#fff" }}>
      <Title level={4}>How can we help you today?</Title>
      <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                background: service.bg,
                borderRadius: 12,
                height: 180,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Title level={5}>{service.title}</Title>
                <Text>{service.subtitle}</Text>
              </div>
              <img src={service.image} alt={service.title} style={{ height: 120 }} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceCards;
