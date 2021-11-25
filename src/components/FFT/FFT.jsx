import React from 'react'
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import meme from '../../images/meme.png';
import '../../style/sections/_fft.scss';

const FFT = () => {
    return (
        <section id="fft">
            <Container>
                <Title title="Food for Thought" />
                <Row>
                    <Col md={6} sm={12}>
                        <Row>
                            <Col>
                                <div className="meme">
                                    <h1>Hi</h1>
                                    {/* <img src={meme} /> */}
                                </div>
                            </Col>
                            <Col>
                                <div className="article">
                                    <h1>Hi</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="quote">
                                <h1>Hi</h1>
                            </div>
                        </Row>
                    </Col>
                    <Col md={6} sm={12}>
                        <h1>Bye</h1>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default FFT
