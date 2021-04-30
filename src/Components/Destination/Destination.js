import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Destination.css'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const Destination = () => {
    return (
        <Container>
            <Header></Header>
            <br />
            <Row>
                <Col md={4}>
                    <h1>hi</h1>
                </Col>
                <Col md={8}>
                <iframe title='this is map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7306.729673488774!2d90.38065920000001!3d23.6986621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1619818391712!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2LyOPbgcJZF2mmVuvbifev81PAg3JEIo'
})(Destination);