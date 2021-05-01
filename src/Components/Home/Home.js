import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./Home.css"
import fakeData from '../../fakeData'
import Rides from '../Rides/Rides';
import { Container, Row } from 'react-bootstrap';
const Home = () => {
    const [rides,setRides]=useState([])
    useEffect(()=>{
        setRides(fakeData)
        
    },[])
    return (
        <div className="Home-design">
        <Container>
            <Header></Header>
            <Row className="riders-container">
            {rides.map(ride=><Rides key={ride.name} ride={ride}></Rides>)}
            </Row>
        </Container>
        </div>
    );
};

export default Home;