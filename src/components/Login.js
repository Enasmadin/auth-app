import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from  'react-router-dom';
import { Alert } from 'react-bootstrap';

const Login = () => {
  const [error,setError] =useState("");
  const [loading,setLoading]= useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const {SignIn} = useAuth();
  const navigate = useNavigate();
  const Location = useLocation();
  const redirectPath = Location.state?.path || "/"

  const handelLogin= async(e)=>{
    e.preventDefault();
    setError("")
    try{
      setError("");
      await SignIn(emailRef.current.value , passwordRef.current.value);
     
      // navigate("/Update-Profile");
      navigate(redirectPath ,{replace:true});
      setLoading(true);

      console.log("trues")
    }
    catch{
      setError ("login falied ");
     
    
    }
    setLoading(false);
  }

  return (
    <>
    <Card >
    <Card.Body>
    <h2  className='text-center mb-4'> LogIn  </h2>
    {error && <Alert  variant='danger'> {error} </Alert>}
    <Form onSubmit={handelLogin}>
    <Form.Group className="mb-3" >
      <Form.Label htmlFor="email" ref={emailRef}> Email </Form.Label>
      <Form.Control type="email"  id="email" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label htmlFor="passwored" ref={passwordRef}> Passwored </Form.Label>
      <Form.Control    type="password"  id="passwored"/>
    </Form.Group>
    <Button variant="primary"  type="submit" className='w-100' disabled={loading} >  Log In  </Button>
   </Form>
    
     
    </Card.Body>
    <div  className='mb-3 w-100 text-center '>
       <Link   to="/forget-password">   Forgett Passworod </Link>
    </div>
  </Card>
   <div  className='w-100 text-center  mt-2 '>
   Need to an Account   ? <Link to="/SignUp">  Register  </Link>
 </div>
 </>
  )
}

export default Login
