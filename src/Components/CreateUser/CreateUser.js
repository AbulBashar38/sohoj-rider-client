import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { configFunction, createUserByEmail, googleLogin } from './CreateUserManager';
configFunction();
const CreateUser = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passNotMatch: false
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const emailAndPassChecker = (e) => {
        let isValid;
        if (e.target.name === 'email') {
            const validEmailExpressions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const emailValid = validEmailExpressions.test(e.target.value)
            isValid = emailValid;
        }
        if (e.target.name === 'password') {
            const validPassExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

            const passValid = validPassExpression.test(e.target.value)
            if (passValid) {
                user.password = e.target.value;
            }
            isValid = passValid;
        }
        if (e.target.name === 'confirmPass') {
            if (e.target.value === user.password) {
                isValid = true
            }
            else {
                const userInfo = { ...user };
                userInfo.passNotMatch = true
                setUser(userInfo)
            }
        }
        if (e.target.name === 'name') {
            user.name = e.target.value
        }
        if (isValid) {
            const userInfo = { ...user };
            userInfo[e.target.name] = e.target.value;
            setUser(userInfo)
        }

    }
    const CreateAccount = (e) => {
        if (user.email && user.confirmPass) {
            createUserByEmail(user.name, user.email, user.password)
                .then(res => {
                    setLoggedInUser(res)
                    setUser(res);
                    if (res.isSignIn) {
                        history.replace(from)
                    }
                })
        }
        e.preventDefault()
    }
    const loginWithGoogle = () => {
        googleLogin()
            .then(res => {
                setUser(res)
                if (res.isSignIn) {
                    history.replace(from)
                }
            })
    }
    console.log(loggedInUser);
    return (
        <Container>
            <Header></Header>
            <div className='formBody'>
                <Form className='form'>
                    <Form.Group><h3>Create account</h3></Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' onBlur={emailAndPassChecker} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' onBlur={emailAndPassChecker} placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onBlur={emailAndPassChecker} placeholder="Password" required />
                        <Form.Text className="text-muted">
                            At least one number and one spacial character(!,@,#,$,%,^,*) need in your password
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" name='confirmPass' onChange={emailAndPassChecker} placeholder="Confirm password" required />
                        <p style={{ color: 'red' }}>
                            {user.passNotMatch ? 'Password dose not match' : ''}
                        </p>
                        <p style={{ color: 'red' }}>
                            {
                                user.error
                            }
                        </p>

                    </Form.Group>
                    <Button onClick={CreateAccount} variant="primary" type="submit" block>
                        Create account
                    </Button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <br />
                    <Button variant="success" onClick={loginWithGoogle}>Login with Google</Button>
                </Form>
            </div>
        </Container>
    );
};

export default CreateUser;