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
            </p>
            <p>Email: aaa297@cornell.edu</p>
            <p>Cell: 571-329-3250</p>
          </div>
        </Fade>
        <div class="form">
          <form method="post" action="contactform.php">
            <p>Contact Me</p>

            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <br/>
            <label for="email"></label>
            <input type="text" id="email" name="email" placeholder="Your Email" />
            <br/>
            <label for="message"></label>
            <textarea id="message" name="message" placeholder="Type Your Message"></textarea>
            <br/>
            <input type="submit" value="Submit" />

          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;