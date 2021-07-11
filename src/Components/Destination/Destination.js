import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Destination.css'
import fakeData from '../../fakeData.json'
import RideDetails from '../RideDetails/RideDetails';
import DbInfo from '../DbInfo/DbInfo';
const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [hiringDetails, setHiringDetails] = useState({})
    const [rides, setRides] = useState([]);
    
    const handleInputDetails = (e) => {
        let isValid
        if (e.target.name === 'pickFrom') {
            isValid = e.target.value.length > 0
        }
        if (e.target.name === 'pickTo') {
            isValid = e.target.value.length > 0
        }
        if (e.target.name === 'date') {
            if (e.target.value.length > 0) {
                isValid = true
                hiringDetails.date = e.target.value
            }

        }
        if (isValid) {
            const detailsInfo = { ...hiringDetails }
            detailsInfo[e.target.name] = e.target.value;
            setHiringDetails(detailsInfo)
        }

    }

    const handleSearchLocation = (e) => {
        const addDetailsInDB = () => {
            const hiringData = { ...hiringDetails }
            loggedInUser.displayName ? hiringData.name = loggedInUser.displayName : hiringData.name = loggedInUser.name;
            hiringData.email = loggedInUser.email;
            fetch('http://localhost:5055/hiringInfo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(hiringData)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
        addDetailsInDB();
        


        // if (hiringDetails.pickFrom && hiringDetails.pickTo && hiringDetails.date) {
        //     document.getElementById('hiringForm').style.display = 'none'
        //     document.getElementById('details-summary').style.display = 'block'
        // }
        
        e.preventDefault()
    }
    useEffect(() => {
        setRides(fakeData);
    }, []);
    
    return (
        <Container>
            <Header><strong>{loggedInUser.displayName ? loggedInUser.displayName : loggedInUser.name}</strong></Header>
            <br />
            <Row>
                <Col md={4}>
                    <div id='hiringForm'>
                        <Form className='destination-form'>
                            <Form.Group>
                                <Form.Label>Pick from</Form.Label>
                                <Form.Control type="text" name='pickFrom' onBlur={handleInputDetails} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Pick to</Form.Label>
                                <Form.Control type="text" name='pickTo' onBlur={handleInputDetails} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name='date' onBlur={handleInputDetails} />
                            </Form.Group>

                            <Button variant="success" type="search" onClick={handleSearchLocation} block>
                                Search
                        </Button>
                        </Form>
                    </div>
                    <div style={{ display: 'none' }} id='details-summary' className='destination-form'>
                        <div className='detailsSummary'>
                            <h3>{hiringDetails.pickFrom} to {hiringDetails.pickTo}</h3>
                            <h5>Date: {hiringDetails.date}</h5>
                        </div>
                        <div style={{ padding: '0 15px' }}>
                            {rides.map(ride => <RideDetails ride={ride} key={ride.name}></RideDetails>)}
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <iframe title='this is map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7306.729673488774!2d90.38065920000001!3d23.6986621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1619818391712!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                </Col>
            </Row>
            <DbInfo></DbInfo>
        </Container>
    );
};

export default Destination;