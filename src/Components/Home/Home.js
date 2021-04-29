import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./Home.css"
import fakeData from '../../fakeData'
import Rides from '../Rides/Rides';
import { Container, Row } from 'react-bootstrap';
const Home = () => {
    const [rides,setRides]=useState([])
    // console.log(fakeData);
    useEffect(()=>{
        setRides(fakeData)
        
    },[])
    return (
        <div className="Home-design">
        <Container>
            <Header></Header>
            <Row className="riders-container">
            {rides.map(ride=><Rides ride={ride}></Rides>)}
            </Row>
           
        </Container>
        </div>
    );
};

export default Home;