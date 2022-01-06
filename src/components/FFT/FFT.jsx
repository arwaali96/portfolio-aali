import React from 'react'
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import meme from '../../images/meme1.png';
import '../../style/sections/_fft.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const FFT = () => {
    return (
        <section id="fft">
            <Container>
                <Title title="Food for Thought" />
                <h1 className="subtitle"> January 2022 Edition 🥳</h1>
                <Fade
                    duration={1000}
                    delay={500}
                    distance="30px"
                >
                    <Row>
                        <Col clasName="center" md={6} sm={12}>
                            <Carousel
                                // autoPlay
                                infiniteLoop
                                showStatus={false}
                                showIndicators={true}
                                showThumbs={false}
                                // interval={7000}
                                stopOnHover={true}
                            >
                                <div className="quote">
                                    <p>“What you still need to know is this: before a dream is realized, the Soul of the World tests everything that was learned along the way. It does this not because it is evil, but so that we can, in addition to realizing our dreams, master the lessons we’ve learned as we’ve moved toward that dream.”</p>
                                    <br />
                                    <p><strong>- Paulo Coelho, The Alchemist</strong></p>
                                </div>
                                <div className="video">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PWC0bJXkZcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front center">
                                            <h1>Riddle</h1>
                                            <br />
                                            <p className="riddle">Why does the person who runs Times Square on New Year’s feel like a failure?</p>
                                            <br />
                                            <p>(Hover over/ click me for the answer)</p>
                                        </div>
                                        <div class="flip-card-back center">
                                            <p className="riddle">[They] always drop the ball.</p>
                                            <br />
                                            <a href="https://funkidsjokes.com/new-year-jokes/ " target="_blank">(Source)</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="meme">
                                    <img src={meme} />
                                    <a href="https://twitter.com/thebkh/status/1477663523895492608?s=20" target="_blank">(Source)</a>
                                </div>
                                <div className="article">
                                    <h1>Article:</h1>
                                    <br />
                                    <a href="https://www.vox.com/2021/12/16/22837830/covid-pandemic-climate-change-great-resignation-2021" target="_blank"><i>The world as we know it is ending. Why are we still at work?</i></a>
                                </div>
                            </Carousel>
                        </Col>
                        <Col className="center" md={6} sm={12}>
                            <form action="https://getform.io/f/e46768fd-a59f-41eb-8001-5485254b9d8d" method="POST" className="suggest">

                                <p>
                                    <strong>Give me your suggestions/ thoughts!</strong>
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                </p>
                                <textarea id="message" name="message" placeholder="Type quotes or link suggestions to share here. If you'd like a reply, feel free to leave your name and email!"></textarea>
                                <br />
                                <input type="submit" value="Send Me :)" />

                            </form>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section >

    )
}

export default FFT
