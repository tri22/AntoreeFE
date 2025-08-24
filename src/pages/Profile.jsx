import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { FaCheckCircle, FaHeart } from "react-icons/fa"; // tick xanh
import { BsCircleFill } from "react-icons/bs";  // chấm tròn online
import ProfileCom from "../components/ProfileCom";
import { useParams } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getProfileById, getUserById } from "../api/userApi";
export default function Profile() {
    const { id } = useParams();
    const [openChat, setOpenChat] = useState(false);
    const [teacher, setTeacher] = useState();
    const [profile, setProfile] = useState();
    useEffect(() => {
        getProfileById(id)
            .then(res => setProfile(res))
            .catch(err => console.error(err));
    }, [id]);

    useEffect(() => {
        if (profile?.id) {
            getUserById(profile.id)
                .then(res => setTeacher(res))
                .catch(err => console.error(err));
        }
    }, [profile]);

    return (
        <div style={{ backgroundColor: "#f5f5f5", position: "relative" }}>
            <Header />
            <Container className="my-5 p-5">
                <Row>
                    <Col md={4} className="py-5" style={{ backgroundColor: "#FFF", borderRadius: '20px', maxHeight: '500px' }}>
                        <div>
                            <img
                                src="https://antoree-v2-prod-files.s3.ap-southeast-1.amazonaws.com/user_213010/profile_pictures/img_1619434594_60869c6267f586.96749061.jpg"
                                alt={teacher?.name || ""}
                                className="rounded"
                                style={{ width: "100%", height: "300px", objectFit: "contain" }}
                            />
                        </div>
                        <div style={{ color: "limegreen" }} className="mt-4"><h5>Sẵn sàng</h5></div>
                        <div className="d-flex align-items-center justify-content-center my-4">
                            <a className="mx-2" href="#"><FacebookIcon /></a>
                            <a className="mx-2" href="#"><InstagramIcon /></a>
                            <a className="mx-2" href="#"><TwitterIcon /></a>
                            <a className="mx-2" href="#"><LinkedInIcon /></a>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div style={{ backgroundColor: "#FFF", borderRadius: '20px' }} className="p-5">
                            <div className="d-flex align-items-center justify-content-between mb-5">
                                <div className="d-flex align-items-center">
                                    <h3>{teacher?.name || "Đang tải..."}</h3>
                                    <FaCheckCircle color="#1877F2" size={18} className="ms-2" />
                                    <BsCircleFill color="limegreen" size={18} className="mx-3" />
                                </div>
                                <Button style={{ backgroundColor: "#f0564a", borderColor: "#f0564a" }}>
                                    Theo dõi <FaHeart className="ms-3" />
                                </Button>
                            </div>
                            <div className="text-start mb-2">{profile?.title}</div>
                            <div className="text-start">{profile?.description}</div>
                        </div>
                        {profile && <ProfileCom profile={profile} setOpenChat={setOpenChat} />}
                    </Col>
                </Row>
            </Container>
            <Footer />
            {/* Chatbox UI */}
            {openChat && (
                <div style={{
                    position: "fixed",
                    bottom: 0,
                    right: "20px",
                    width: "300px",
                    height: "400px",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                }}>
                    <div style={{ background: "limegreen", color: "#fff", padding: "10px", display: "flex", justifyContent: "space-between" }}>
                        <span>Chat với giáo viên</span>
                        <button onClick={() => setOpenChat(false)} style={{ background: "transparent", border: "none", color: "#fff", fontSize: "16px", cursor: "pointer" }}>✖</button>
                    </div>
                    <div style={{ flex: 1, padding: "10px", overflowY: "auto", background: "#f9f9f9" }}>
                        <div style={{ margin: "6px 0", padding: "8px 12px", borderRadius: "10px", background: "#e0e0e0", maxWidth: "80%" }}>
                            Xin chào! Tôi có thể giúp gì cho bạn?
                        </div>
                        <div style={{ margin: "6px 0", padding: "8px 12px", borderRadius: "10px", background: "limegreen", color: "#fff", maxWidth: "80%", marginLeft: "auto" }}>
                            Mình muốn hỏi về khóa học.
                        </div>
                    </div>
                    <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
                        <input type="text" placeholder="Nhập tin nhắn..." style={{ flex: 1, border: "none", padding: "8px", outline: "none" }} />
                        <button style={{ background: "limegreen", color: "#fff", border: "none", padding: "8px 12px", cursor: "pointer" }}>Gửi</button>
                    </div>
                </div>
            )}
        </div>
    );
}
