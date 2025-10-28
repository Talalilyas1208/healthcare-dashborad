import React from "react";
import { Carousel, Card, Avatar, Button, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const doctors = [
  {
    name: "Dr. Ayesha Khan",
    specialty: "Dermatologist",
    city: "Lahore",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Talal Ilyas",
    specialty: "Cardiologist",
    city: "Karachi",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Hamza Ali",
    specialty: "Child Specialist",
    city: "Islamabad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Sara Ahmed",
    specialty: "Gynecologist",
    city: "Faisalabad",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dr. Ahmed Raza",
    specialty: "ENT Specialist",
    city: "Multan",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

export default function NearDoctor() {
  // Split doctors into chunks of 3 per slide
  const slides = [];
  for (let i = 0; i < doctors.length; i += 3) {
    slides.push(doctors.slice(i, i + 3));
  }

  return (
    <>
      <h2 style={{ fontWeight: 600, marginBottom: 20 }}>Doctors Near You</h2>

      <Carousel arrows infinite={false}>
        {slides.map((group, index) => (
          <div key={index}>
            <Row gutter={16} justify="center">
              {group.map((doctor, i) => (
                <Col key={i} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    cover={
                      <Avatar
                        src={doctor.image}
                        size={100}
                        icon={<UserOutlined />}
                        style={{
                          margin: "20px auto 10px",
                          display: "block",
                        }}
                      />
                    }
                  >
                    <Meta
                      title={doctor.name}
                      description={
                        <>
                          <p style={{ margin: 0, color: "#1890ff" }}>
                            {doctor.specialty}
                          </p>
                          <p style={{ margin: 0, color: "#888" }}>
                            {doctor.city}
                          </p>
                        </>
                      }
                    />
                    <Button
                      type="primary"
                      block
                      style={{
                        marginTop: 10,
                        borderRadius: 8,
                      }}
                    >
                      Book Appointment
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </>
  );
}
