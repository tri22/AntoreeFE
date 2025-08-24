import { useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { IoDiamond } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
export default function ProfileCom({ profile, setOpenChat }) {
    const [activeTab, setActiveTab] = useState("info");
    const handleDemo = () => {
        toast.success(
            <>
                Đặt lịch học thử thành công!<br />
                Vui lòng liên hệ giáo viên
            </>
            , { autoClose: 3000 });
    };
    return (
        <Container className="my-5 p-5" style={{ backgroundColor: "#FFF", borderRadius: '20px' }}>
            {/* Tabs */}
            <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav.Item>
                    <Nav.Link eventKey="info">Thông tin cá nhân</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="posts">Bài đăng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="story">Story</Nav.Link>
                </Nav.Item>
            </Nav>

            <Row className="mt-4">
                {/* Left: Game & thông tin */}
                <Col md={8}>
                    {/* List Game */}
                    <div className="d-flex flex-wrap gap-3 mb-4">
                        {profile?.levels.map((item) => (
                            <img
                                key={item.id}
                                className="mx-3"
                                style={{ width: "60px", height: "60px", objectFit: "contain" }}
                                src={item.logo}
                                alt={item.name}
                            />
                        ))}
                    </div>

                    {/* Box nội dung game */}
                    <div className="p-3 border rounded text-start">
                        <h5>Thông tin dạy học</h5>
                        <hr />
                        <p>Thời gian dạy: {profile?.teachTime || "Chưa cập nhật"}</p>
                        <p>Phù hợp với mọi trình độ và nhu cầu</p>
                        <p>Chu kỳ nhận: {profile?.teachDay || "Chưa cập nhật"}</p>
                    </div>
                </Col>

                {/* Right: Giá & nút hành động */}
                <Col md={4}>
                    <div className="p-3 border rounded text-center">
                        <h4 style={{ color: "#f0564a" }}>{profile?.price || "Chưa cập nhật"} <IoDiamond /></h4><h4>/ Giờ</h4>
                        <p>Số đơn đã nhận: 3</p>
                        <Button className="w-100 mb-2" style={{ backgroundColor: "limegreen", borderColor: "limegreen" }}>
                            Đặt lịch
                        </Button>
                        <Button className="w-100 mb-2" variant="outline-secondary"
                            onClick={() => setOpenChat(true)}
                        >
                            Trò chuyện
                        </Button>
                        <Button className="w-100" variant="outline-secondary"
                            onClick={handleDemo}
                        >
                            Học Thử
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
