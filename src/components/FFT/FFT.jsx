import React from 'react'
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import meme from '../../images/meme.jpg';
import '../../style/sections/_fft.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const FFT = () => {
    return (
        <section id="fft">
            <Container>
                <Title title="Food for Thought" />
                <h1 className="subtitle"> December 2021 Edition</h1>
                <Fade
                    duration={1000}
                    delay={500}
                    distance="30px"
                >
                    <Row>
                        <Col clasName="center" md={6} sm={12}>
                            <Carousel
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                                showIndicators={true}
                                showThumbs={false}
                                interval={7000}
                                stopOnHover={true}
                            >
                                <div className="meme">
                                    <img src={meme} />
                                </div>
                                <div className="quote">
                                    <p>“You remember lesson about balance? Lesson not just karate only. Lesson for whole life. Whole life have a balance. Everything be better. Understand?” - Mr. Miyagi, The Karate Kid</p>
                                </div>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front center">
                                            <h1>Riddle</h1>
                                            <br />
                                            <p className="riddle">What is it that when you take away the whole, you still have some leftover?</p>
                                            <br />
                                            <p>(Hover over me for the answer)</p>
                                        </div>
                                        <div class="flip-card-back center">
                                            <p className="riddle">Wholesome</p> 
                                            <br />
                                            <a href="https://thoughtcatalog.com/january-nelson/2020/08/funny-riddles/">(Source)</a>
                                        </div>
                                    </div>
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
