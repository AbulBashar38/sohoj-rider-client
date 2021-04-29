import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import'./Riders.css'
const Rides = (props) => {
    const { name, img } = props.ride
    return (

        <Col md={3}>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Button variant="primary">{name}</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Rides;