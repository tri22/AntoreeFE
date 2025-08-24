import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Contact.scss';

export default function Contact() {

    // Thông tin công ty Antoree
    const contactData = {
        title: "Liên hệ với Antoree",
        description: "Antoree là nền tảng học tiếng Anh online 1 kèm 1, giúp bạn kết nối với hàng ngàn giáo viên trên toàn thế giới.",
        office_hours: "Thời gian làm việc: Thứ 2 - Thứ 6, 9:00 - 18:00",
        email: "support@antoree.com",
        phone: "+84 246 329 5286",
        location: "63 đường 100 Bình Thới, Phường 14, Quận 11, Hồ Chí Minh"
    };

    const formPlaceholders = {
        name: "Họ và tên",
        email: "Email",
        phone: "Số điện thoại",
        subject: "Chủ đề",
        message: "Nội dung tin nhắn",
        submit: "Gửi liên hệ"
    };

    const ContactInfo = () => (
        <div className="contact-info text-center bg-white py-5 px-4 mt-5">
            <h2 className="my-3">{contactData.title}</h2>
            <p className="mb-4">{contactData.description}</p>
            <p><strong>{contactData.office_hours}</strong></p>
            <p><strong>Email: {contactData.email}</strong></p>
            <p><strong>Hotline: {contactData.phone}</strong></p>
            <p><strong>Địa chỉ: {contactData.location}</strong></p>
        </div>
    );

    const ContactForm = () => (
        <Form className="contact-form bg-white p-5 mx-5 mb-5">
            <Row>
                <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder={formPlaceholders.name} className="custom-input" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control type="email" placeholder={formPlaceholders.email} className="custom-input" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder={formPlaceholders.phone} className="custom-input" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control type="text" placeholder={formPlaceholders.subject} className="custom-input" />
                </Col>
                <Col md={12} className="mb-3">
                    <Form.Control as="textarea" rows={5} placeholder={formPlaceholders.message} className="custom-input" />
                </Col>
                <Col md={12}>
                    <Button variant='outline-dark' type="submit" className="w-100 send-btn" >
                        {formPlaceholders.submit}
                    </Button>
                </Col>
            </Row>
        </Form>
    );

    return (
        <div className="">
            <Header />
            <div className="content">
                <ContactInfo />
                <div className="px-5 mx-5">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}
