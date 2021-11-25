import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          {/* <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col> */}
          {/* <Col md={6} sm={12}> */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="about-wrapper__info-text">
                {paragraphTwo ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="about-wrapper__info-text">
                {<strong>{paragraphThree}</strong> || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
              </p>
              <span className="d-flex">
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Résumé
                    </a>
                  </span>
                )}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="social-links-about">
                  {networks &&
                    networks.map((network) => {
                      const { id, name, url } = network;
                      return (
                        <a
                          key={id}
                          href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={name}
                        >
                          <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                        </a>
                      );
                    })}
                </div>
              </span>

              <div id="skills">
                <span className="skill">
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                  >
                    <i className="devicon-javascript-plain" />
                  </a>
                  <strong>JavaScript</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    target="_blank"
                  >
                    <i className="devicon-html5-plain" />
                  </a>
                  <strong>HTML 5</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <i className="devicon-css3-plain" />
                  </a>
                  <strong>CSS 3</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                  >
                    <i className="devicon-sass-original" />
                  </a>
                  <strong>Sass</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                  >
                    <i className="devicon-react-original" />
                  </a>
                  <strong>React</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://redux.js.org/"
                    target="_blank"
                  >
                    <i className="devicon-redux-original" />
                  </a>
                  <strong>Redux</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://mui.com/"
                    target="_blank"
                  >
                    <i className="devicon-materialui-plain" />
                  </a>
                  <strong>Material-UI</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                  >
                    <i className="devicon-nodejs-plain" />
                  </a>
                  <strong>Node.js</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                  >
                    {/* <i className="devicon-nextjs-original" /> */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
                  </a>
                  <strong>Next.js</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                  >
                    <i className="devicon-mongodb-plain" />
                  </a>
                  <strong>MongoDB</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                  >
                    <i className="devicon-git-plain" />
                  </a>
                  <strong>Git</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                  >
                    <i className="devicon-firebase-plain" />
                  </a>
                  <strong>Firebase</strong>
                </span>

                <span className="skill">
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                  >
                    <i className="devicon-gatsby-plain" />
                  </a>
                  <strong>Gatsby</strong>
                </span>
              </div>

            </div>
          </Fade>
          {/* </Col> */}
        </Row>
      </Container>
    </section >
  );
};

export default About;
