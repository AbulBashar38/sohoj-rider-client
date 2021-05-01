import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RideDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
const RideDetails = (props) => {
    const { img, price, passenger } = props.ride
    return (
        <Row className='rideSection'>
            <Col md={4} className='rideImgStyle'>
                <img src={img} alt="" />
            </Col>
            <Col md={4}>
            <FontAwesomeIcon icon={faUserFriends} /> {passenger}
            </Col>
            <Col md={4}>
                {price}
            </Col>
        </Row>
    );
};

export default RideDetails;