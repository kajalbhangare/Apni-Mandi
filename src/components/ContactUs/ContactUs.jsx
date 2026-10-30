// ContactPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-success">Contact Us</h1>
      
      <Row>
        {/* Office Addresses */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-success">
                <i className="fas fa-building me-2"></i>Head Office
              </Card.Title>
              <Card.Text>
                14 Hind Colony,Kate Patil Chowk<br />
                Pimple Soudagar, Dist. Pune,<br />
                State. Maharashtra<br />
                Pincode-411027
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-success">
                <i className="fas fa-store me-2"></i>Mandal Market Yard
              </Card.Title>
              <Card.Text>
                Market Yard, Pimple Soudagar, Pune,<br />
                Maharashtra 411027<br />
                <span className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i> 4.1 ★★★★
                </span><br />
                9 reviews
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-success">
                <i className="fas fa-warehouse me-2"></i>Packing and Distribution Warehouse
              </Card.Title>
              <Card.Text>
                14 Hind Colony,Kate Patil Chowk<br />
                Pimple Soudagar, Dist. Pune,<br />
                State. Maharashtra<br />
                Pincode-411027
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-success">
                <i className="fas fa-map-marker-alt me-2"></i>Collection Center
              </Card.Title>
              <Card.Text>
                Hinjewadi,Wakad<br />
                Tal.Mulashi, Dist.Pune,<br />
                State. Maharashtra<br />
                Pincode-412038
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-success mb-4">
                <i className="fas fa-headset me-2"></i>Submit Customer Service Request
              </Card.Title>
              <Card.Text className="mb-4">
                If you have a question about our service or have an issue to report, 
                please send a request and we will get back to you as soon as possible.
              </Card.Text>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject*</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Submit Request
                </Button>
              </Form>

              <div className="mt-4 pt-3 border-top">
                <h6 className="text-success">Contact Information</h6>
                <p className="mb-1">
                  <i className="fas fa-envelope me-2"></i>
                  contactus@apnimandi.in
                </p>
                <p>
                  <i className="fas fa-phone me-2"></i>
                  +91-72 18 39 30 80
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;