
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleLogin } from '../CreateUser/CreateUserManager';
import Header from '../Header/Header';
import './Login.css'
import { emailSignIn } from './LoginManager';

const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handelInputValue=(e)=>{
        if (e.target.name === 'email') {
            user.email = e.target.value
        }
        if (e.target.name === 'password') {
            user.password = e.target.value
        }
    }
    const loginByEmail = (e) => {
        emailSignIn(user.email, user.password)
            .then(res => {
                setLoggedInUser(res)
                setUser(res)
                
                if (res.isSignIn) {
                    history.replace(from)
                }
            })
        e.preventDefault()
    }
    const loginByGoogle =()=>{
        googleLogin()
        .then(res=>{
            setLoggedInUser(res)
            setUser(res)
            if (res.isSignIn) {
                history.replace(from)
            }
        })
    }
    
    return (
        <Container>
            <Header></Header>
            <div className='formBody'>
                <Form className='form'>
                    <Form.Group><h3>Login</h3></Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onBlur={handelInputValue} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"onBlur={handelInputValue} name='password' />
                    </Form.Group>
                    <p style={{ color: 'red' }}>
                        {user.error}
                    </p>
                    <Button variant="primary" type="submit" onClick={loginByEmail} block>
                        Login
                    </Button>
                    <p>Don't have an account? <Link to='/createUser'>Create an account</Link></p>
                    <br />
                    <Button variant="success" onClick={loginByGoogle}>Login with Google</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;