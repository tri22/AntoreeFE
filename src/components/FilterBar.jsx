import React from "react";
import { Button, Dropdown, ButtonGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function FilterBar() {
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifySelf: "center",
            }}
        >
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    className="btn-menu-dropdown d-flex align-items-center"
                >
                    Giới tính
                </Dropdown.Toggle>
                <Dropdown.Menu  flip={false}>
                    <Dropdown.Item>Nam</Dropdown.Item>
                    <Dropdown.Item>Nữ</Dropdown.Item>
                    <Dropdown.Item>Khác</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
                 <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    className="btn-menu-dropdown d-flex align-items-center"
                >
                   Văn bằng
                </Dropdown.Toggle>
                <Dropdown.Menu  flip={false}>
                    <Dropdown.Item>TOEIC</Dropdown.Item>
                    <Dropdown.Item>CAMBRIDGE</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* Nhập giá */}
            <Form style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Form.Control
                    type="number"
                    placeholder="Giá từ"
                    style={{ width: "120px" }}
                />
                <span>-</span>
                <Form.Control
                    type="number"
                    placeholder="Đến"
                    style={{ width: "120px" }}
                />
            </Form>

            <Dropdown as={ButtonGroup}>
                 <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    className="btn-menu-dropdown d-flex align-items-center"
                >
                    Địa chỉ
                </Dropdown.Toggle>
                <Dropdown.Menu  flip={false}>
                    <Dropdown.Item>Hà Nội</Dropdown.Item>
                    <Dropdown.Item>TP.HCM</Dropdown.Item>
                    <Dropdown.Item>Đà Nẵng</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="danger">
                <FaSearch className="me-2" /> Tìm kiếm
            </Button>
        </div>
    );
}
