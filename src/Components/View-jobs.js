import React from "react";
import { Card, Button, Image, Row, Col } from "react-bootstrap";

export default function Viewjobs() {
  return (
    <div>
      <Card
        className="w-100 cursor-pointer transition-all duration-1000 m-2 border rounded"
        style={{ maxWidth: "400px" }}
      >
        <Card.Body>
          <Row className="mb-2 align-items-center">
            <Col xs="auto">
              <Image
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                roundedCircle
                width="50"
                height="50"
                alt="no image"
              />
            </Col>
            <Col>
              <Card.Title className="h6">Abdullah Moiz</Card.Title>
              <Card.Text className="small text-muted">LMN Corp</Card.Text>
            </Col>
          </Row>
          <div className="mb-2">
            <Row className="px-1 py-1 align-items-center">
              <Col xs="auto">
                <i className="bi bi-currency-dollar text-primary"></i>
              </Col>
              <Col>
                <h6 className="mb-0">Salary :</h6>
                <p className="mb-0 small">45000$ / month</p>
              </Col>
            </Row>
            <Row className="px-1 py-1 align-items-center">
              <Col xs="auto">
                <i className="bi bi-calendar-check text-primary"></i>
              </Col>
              <Col>
                <h6 className="mb-0">Deadline :</h6>
                <p className="mb-0 small">30/04/2023</p>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="py-1">
              <div className="px-3 py-1 bg-success text-white ">
                <p className="mb-0 small">Graphic Designer</p>
              </div>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-primary"
                className="py-1 px-2 border transition-all duration-700"
                style={{ fontSize: "0.8rem" }}
              >
                View Detail <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
