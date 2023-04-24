import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import order from "../assets/data/data2"
import './Order.css'

const Order = () => {
  return (
    <div className='order'>
<Container fluid>
  <Row className="justify-content-center align-items-center">
    {order.map((item) => (
      <Col sm={12} md={6} lg={3} key={item.id} className="mb-5">
        <div className="d-flex justify-content-start align-items-center mt-3">
          <div className={`circle circle-${item.id}`}>
            <h2 style={{ margin: "0" }}>{item.id}</h2>
          </div>
          <div className="grid-desc">
            <h4 className="mb-0">{item.title}</h4>
            <p className="mt-2">{item.desc}</p>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>
    </div>
  )
}

export default Order
