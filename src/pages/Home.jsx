import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // tick xanh
import { BsCircleFill } from "react-icons/bs";  // chấm tròn online
import StartRender from "../components/StartRender";
import { useNavigate } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import { getAllTeacher } from "../api/userApi";

export default function HomePage() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeacher()
      .then(res => setTeachers(res))
      .catch(err => console.error(err));
  }, []);



  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Container className="my-5 p-5">
        <FilterBar></FilterBar>
        {teachers.length > 0 ? (
          <Row className="my-5 pb-5">
            {/* Cột danh sách giáo viên */}
            <Col md={8}>  
              {teachers.map((teacher) => (
                <Card key={teacher.id} className="h-100 shadow-sm mb-4" style={{ maxHeight: "300px" }}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} className="position-relative">
                        <img
                          src="https://antoree-v2-prod-files.s3.ap-southeast-1.amazonaws.com/user_213010/profile_pictures/img_1619434594_60869c6267f586.96749061.jpg"
                          alt={teacher.name}
                          className="rounded"
                          style={{ width: "100%", height: "160px", objectFit: "contain" }}
                        />
                      </Col>
                      <Col xs={9}>
                        <div className="d-flex align-items-center justify-content-between">
                          <Card.Title className="d-flex align-items-center">
                            {teacher.name}
                            <FaCheckCircle color="#1877F2" size={18} className="ms-2" />
                            <BsCircleFill color="limegreen" size={18} className="mx-3" />
                          </Card.Title>
                          <Button
                            style={{ backgroundColor: "limegreen", borderColor: "limegreen" }}
                            onClick={() => navigate(`/Profile/${teacher.id}`)}
                          >
                            Xem chi tiết
                          </Button>
                        </div>
                        <div className="d-flex align-items-center">
                          <StartRender rating={teacher.rating} />
                          <span className="ms-2">{teacher.rating}</span>
                        </div>
                        <div className="text-start my-2">
                          <p>Quốc gia: {teacher.country}</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* Cột tham gia */}
            <Col md={4}>
              <h4>Tham gia với chúng tôi</h4>
              <p>Hãy tham gia cộng đồng giáo viên trên toàn cầu và tạo ra cách học trực tuyến mới.</p>
              <Button
                style={{ backgroundColor: "limegreen", borderColor: "limegreen" }}
                onClick={() => navigate(`/`)}
              >
                Trở thành giáo viên
              </Button>
            </Col>
          </Row>

        ) : (
          <p className="text-muted">Chưa có giáo viên nào.</p>
        )}
      </Container>

      <Footer />
    </div>
  );
}
