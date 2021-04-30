import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Riders.css'
const Rides = (props) => {
    const { name, img } = props.ride;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const selectedRide = () => {
        history.push('/destination')
        const rideInfo = {...loggedInUser}
        rideInfo.rideName=name;
        rideInfo.rideImg=img;
        setLoggedInUser(rideInfo)
    }
    return (

        <Col md={3}>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Button variant="primary" onClick={selectedRide}>{name}</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Rides;