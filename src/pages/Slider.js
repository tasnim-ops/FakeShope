import React from 'react';
import './Slider.css';
import { Container, Row, Col } from 'react-bootstrap';

const Slider = () => {
  return (
    <>
      <h1 className="page_title">CSS Image Grid with Hover</h1>

      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col sm={12} md={6} lg={3} className="mb-5">
            <div className="test_box box-01">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Female Care</h1>
                    <h2>We protect Feminine Hygiene</h2>
                    <span className="test_link">View product</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5">
            <div className="test_box box-02">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Fast Delivery</h1>
                    <h2>Medicine Delivered in 90 Minutes</h2>
                    <span className="test_link">Order</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5">
            <div className="test_box box-03">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Order</h1>
                    <h2>We can order customly</h2>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-5">
            <div className="test_box box-04">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Coupon Saving'</h1>
                    <h2>Up to 40% off everyday essentials</h2>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Slider;
