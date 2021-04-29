import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar>
                <Navbar.Brand><Link to='/home' className='link-style' style={{ textDecoration: 'none' }}><strong>SOHOJ RIDERS</strong></Link></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link><Link className='link-style' style={{ textDecoration: 'none' }} to='/home'>Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link className='link-style' style={{ textDecoration: 'none' }} to='/destination'>Destination</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link className='link-style' style={{ textDecoration: 'none' }}>Blog</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link className='link-style' style={{ textDecoration: 'none' }}>Contact</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Button variant="danger">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        
    );
};

export default Header;