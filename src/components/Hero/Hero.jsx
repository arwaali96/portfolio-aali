import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const { about } = useContext(PortfolioContext);
  const { resume } = about;

  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

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

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                {cta || 'Projects'}
              </Link>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'About Me'}
              </Link>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                {cta || 'Contact'}
              </Link>
            </span>
          </p>

          <p className="hero-cta info-row">
            <span className="d-flex">
              {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href={resume}
                  >
                    Résumé
                  </a>
                </span>
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="social-links-about">
                {networks &&
                  networks.map((network) => {
                    const { id, name, url } = network;
                    return (
                      <span>
                        <a
                          key={id}
                          href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={name}
                        >
                          <i className={`fa fa-${name || 'refresh'} fa-2x icons-row`} />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    );
                  })}
              </div>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
