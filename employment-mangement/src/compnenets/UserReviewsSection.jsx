import React from "react";
import { Card, Rate, Avatar, Typography, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const reviews = [
  {
    user: "Ali Raza",
    doctor: "Dr. Ayesha Khan",
    rating: 5,
    comment:
      "Dr. Ayesha was incredibly kind and professional. She took time to listen to my concerns and gave the best advice. Highly recommend!",
    avatar: "",
  },
  {
    user: "Fatima Noor",
    doctor: "Dr. Hamza Iqbal",
    rating: 4,
    comment:
      "Very satisfied with the consultation. The doctor explained everything in detail and helped me recover quickly.",
    avatar: "",
  },
  {
    user: "Usman Tariq",
    doctor: "Dr. Sarah Malik",
    rating: 5,
    comment:
      "One of the best experiences I’ve had with an online doctor. The booking process was easy and the doctor was excellent.",
    avatar: "",
  },
  {
    user: "Hina Zahra",
    doctor: "Dr. Bilal Ahmed",
    rating: 5,
    comment:
      "Very polite and knowledgeable doctor. Highly recommended for anyone looking for a trustworthy online consultation.",
    avatar: "",
  },
];

const UserReviewsSection = () => {
  return (
    <div
      style={{
        padding: "60px 80px",
        backgroundColor: "#f9fafc",
        textAlign: "center",
      }}
    >
      <Title level={3} style={{ marginBottom: 50 }}>
        What Our Users Say
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {reviews.map((review, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                width: 280,
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              bodyStyle={{ padding: "24px 20px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  size={64}
                  src={review.avatar || null}
                  icon={!review.avatar && <UserOutlined />}
                  style={{
                    backgroundColor: "#1677ff",
                    marginBottom: 12,
                  }}
                />
                <Text strong>{review.user}</Text>
                <Text type="secondary">{review.doctor}</Text>
                <Rate disabled defaultValue={review.rating} />
                <Text
                  style={{
                    color: "#555",
                    fontStyle: "italic",
                    marginTop: 10,
                    display: "block",
                  }}
                >
                  "{review.comment}"
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserReviewsSection;
