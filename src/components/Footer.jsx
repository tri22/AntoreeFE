import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <h3 className="footer-brand">Antoree</h3>

        <Row className="gy-4">
          {/* About Us */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h4 className="footer-title">Về Antoree</h4>
            <p className="footer-text">
              Antoree là nền tảng học tiếng Anh trực tuyến 1-1 với gia sư đến từ khắp nơi trên thế giới. 
              Chúng tôi giúp học viên học tập hiệu quả, tiện lợi và linh hoạt.
            </p>
          </Col>

          {/* Services */}
          <Col xs={6} md={6} lg={3} className="footer-col">
            <h4 className="footer-title">Khóa học</h4>
            <ul className="footer-list">
              <li>Tiếng Anh giao tiếp</li>
              <li>Luyện thi IELTS</li>
              <li>Luyện thi TOEIC</li>
              <li>Tiếng Anh cho trẻ em</li>
              <li>Tiếng Anh doanh nghiệp</li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={6} md={6} lg={3} className="footer-col">
            <h4 className="footer-title">Hỗ trợ</h4>
            <ul className="footer-list">
              <li>Câu hỏi thường gặp</li>
              <li>Hướng dẫn sử dụng</li>
              <li>Chính sách học tập</li>
              <li>Điều khoản dịch vụ</li>
              <li>Liên hệ hỗ trợ</li>
            </ul>
          </Col>

          {/* Social */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h4 className="footer-title">Kết nối với Antoree</h4>
            <div className="footer-socials ms-5 ps-5">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><TwitterIcon /></a>
              <a href="#"><LinkedInIcon /></a>
            </div>
            <p className="footer-text mt-3">
              Email: support@antoree.com <br />
              Hotline: 1900 1234
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
