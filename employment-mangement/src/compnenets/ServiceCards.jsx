import { Card, Row, Col } from "antd";

const HelpSection = () => {
  const cards = [
    {
      title: "Video Consultation",
      subtitle: "PMC Verified Doctors",
      color: "#E8F3FF",
      image: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    },
    {
      title: "In-clinic Visit",
      subtitle: "Book Appointment",
      color: "#FFEDE2",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      title: "Weight Loss Clinic",
      subtitle: "Healthy Lifestyle",
      color: "#FFF7DA",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png",
    },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ fontSize: 22, fontWeight: 600 }}>
        How can we help you today?
      </h2>

      <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={24}   
            sm={12}   
            md={8}    
          >
            <Card
              hoverable
              style={{
                background: card.color,
                borderRadius: 18,
                height: 150,
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
              }}
              bodyStyle={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: 20,
              }}
            >
              <img
                src={card.image}
                alt="icon"
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                }}
              />

              <div>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p style={{ marginTop: 6, color: "#666", fontSize: 14 }}>
                  {card.subtitle}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HelpSection;
