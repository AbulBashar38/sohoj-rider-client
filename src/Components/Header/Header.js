import React from 'react';
import './Header.css'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand><Link to='/home' className='link-style' style={{ textDecoration: 'none' }}><strong className='brandName'>SOHOJ RIDERS</strong></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Link className='link-style' to='/home'>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='link-style' to='/destination'>Destination</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/blog' className='link-style'>Blog</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/contact' className='link-style'>Contact</Link>
                        </Nav.Item>
                    </Nav>
                    {props.children?props.children:<Button variant="danger"><Link to='/login' style={{color:'white',textDecoration: 'none'}}>Login</Link></Button>}
                </Navbar.Collapse>
            </Navbar>
        
    );
};

export default Header;