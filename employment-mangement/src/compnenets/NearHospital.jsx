import React from "react";
import { useParams } from "react-router-dom";
import { Card, List, Typography, Rate, Tag } from "antd";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const hospitals = [
  {
    id: 1,
    name: "Shaukat Khanum Memorial Hospital",
    city: "lahore",
    address: "Johar Town, Lahore",
    rating: 5,
    contact: "042 35905000",
    tags: ["Cancer Care", "Emergency", "24/7"],
  },
  {
    id: 2,
    name: "Services Hospital",
    city: "lahore",
    address: "Main Jail Road, Lahore",
    rating: 4,
    contact: "042 99203402",
    tags: ["General", "Emergency", "Govt Hospital"],
  },
  {
    id: 3,
    name: "Aga Khan University Hospital",
    city: "karachi",
    address: "Stadium Road, Karachi",
    rating: 5,
    contact: "021 111911911",
    tags: ["Multispecialty", "Private", "Emergency"],
  },
];

const NearHospital = () => {
  const { city } = useParams();
  const filteredHospitals = hospitals.filter(
    (hospital) => hospital.city.toLowerCase() === city.toLowerCase()
  );

  return (
    <div style={{ padding: "50px 100px", background: "#f9fafc" }}>
      <Title level={3} style={{ marginBottom: 24 }}>
        Hospitals Near You in {city.charAt(0).toUpperCase() + city.slice(1)}
      </Title>

      {filteredHospitals.length > 0 ? (
        <List
          grid={{ gutter: 24, column: 2 }}
          dataSource={filteredHospitals}
          renderItem={(hospital) => (
            <List.Item>
              <Card
                hoverable
                title={hospital.name}
                bordered={false}
                style={{
                  borderRadius: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <Rate disabled defaultValue={hospital.rating} />
                <div style={{ margin: "12px 0" }}>
                  <Text>
                    <EnvironmentOutlined /> {hospital.address}
                  </Text>
                  <br />
                  <Text>
                    <PhoneOutlined /> {hospital.contact}
                  </Text>
                </div>
                <div>
                  {hospital.tags.map((tag, i) => (
                    <Tag color="blue" key={i}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <Text type="secondary">
          No hospitals found in {city}. Try another city.
        </Text>
      )}
    </div>
  );
};

export default NearHospital;