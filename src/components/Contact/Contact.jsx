import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> <br />
            <p className="contact-info">Email: aaa297@cornell.edu</p>
          </div>
        </Fade>
        <div className="form">
          <form action="https://getform.io/f/fded394d-db26-4aa0-bba9-28e1107f6dbb" method="POST">

            <p>Contact Me</p>

            <input type="text" id="name" name="name" placeholder="Your Name" />
            <br />
            <input type="text" id="email" name="email" placeholder="Your Email" />
            <br />
            <textarea id="message" name="message" placeholder="Type Your Message"></textarea>
            <br />
            <input type="submit" value="Submit" />

          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;