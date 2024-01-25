import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from './Particle'; // Import your Particle component
import Type from './Type'; // Import your Type component
import Home2 from './Home2'; // Import your Home2 component

function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission with formData
    console.log('Submitted Information:', formData);
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content text-center">
          <Row className="justify-content-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to Theometrics Fashion Week!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Please Sign in Below to Get your NFT
              </h1>

              <div style={{ padding: 50, textAlign: 'center' }}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-control mx-auto"
                />

                <br />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control mx-auto"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
                </button>

              <Type />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
