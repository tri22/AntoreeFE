import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaChalkboardTeacher, FaUserGraduate, FaGlobeAmericas, FaHeadset } from 'react-icons/fa';
import '../assets/styles/About.scss';

const About = () => {

    // Các điểm mạnh của Antoree
    const features = [
        {
            icon: <FaChalkboardTeacher size={40} color="#FF6B6B" />,
            title: "Giáo viên chất lượng",
            description: "Kết nối với hàng ngàn giáo viên tiếng Anh giàu kinh nghiệm trên toàn thế giới.",
        },
        {
            icon: <FaUserGraduate size={40} color="#4dabf7" />,
            title: "Cá nhân hoá lộ trình",
            description: "Thiết kế khóa học 1 kèm 1 phù hợp với mục tiêu và trình độ của từng học viên.",
        },
        {
            icon: <FaGlobeAmericas size={40} color="#f59f00" />,
            title: "Học mọi lúc, mọi nơi",
            description: "Chỉ cần internet, bạn có thể học tiếng Anh với giáo viên quốc tế bất kỳ lúc nào.",
        },
        {
            icon: <FaHeadset size={40} color="#5c7cfa" />,
            title: "Hỗ trợ tận tâm",
            description: "Đội ngũ Antoree luôn sẵn sàng hỗ trợ học viên trong suốt quá trình học.",
        },
    ];

    return (
        <div className="bg-light text-dark about-container">
            <Header />
            <Container className="py-5 mt-5">
                <h2 className="text-center fw-bold mb-3">Về Antoree</h2>
                <p className="text-center text-muted mb-5">
                    Antoree là nền tảng học tiếng Anh online 1 kèm 1, giúp bạn kết nối với giáo viên trên toàn thế giới 
                    và xây dựng lộ trình học tập hiệu quả, cá nhân hoá.
                </p>
                <div className="bg-light">
                    <Row className="text-center">
                        {features.map((item, index) => (
                            <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                                <Card className="border-0 py-4 px-2 h-100">
                                    <Row className="d-flex align-items-center mb-2">
                                        <Col md={5}>
                                            <div className="mb-3">{item.icon}</div>
                                        </Col>
                                        <Col md={7}>
                                            <h5 className="fw-bold">{item.title}</h5>
                                        </Col>
                                    </Row>
                                    <p className="text-muted px-3">{item.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Newsletter Signup */}
                <div className="text-center py-5 bg-white shadow-sm">
                    <h5 className="fw-bold">Đăng ký nhận tin</h5>
                    <p className="text-muted">
                        Nhận những chia sẻ hữu ích về học tiếng Anh và thông tin các khoá học mới từ Antoree.
                    </p>
                    <input
                        type="email"
                        className="form-control w-50 mx-auto mb-3"
                        placeholder="Nhập email của bạn"
                    />
                    <Button variant="dark">Đăng ký</Button>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default About;
