import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';
import {useNavigate} from  'react-router-dom';

const SignUp = () => {
  const [error,setError] =useState("");
  const [loading,setLoading]= useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmPassword = useRef();
  const {SignUp} = useAuth();
  const navigate = useNavigate();

  const handelSubmit = async(e)=>{
    e.preventDefault();
    if( passwordRef.current.value !== passwordConfirmPassword.current.value ){
      return setError(" password do not match ") ;
    }
   
    try{
      setError("");
      setLoading(true);
      await SignUp(emailRef.current.value , passwordRef.current.value);
      navigate("/");
     } catch{
      setError("Falied to create an account");
     }
    
     setLoading(false);
  };
  return (
   <>
   <Card >
      <Card.Body>
      <h2  className='text-center mb-4'> SignUp </h2>
      {error && <Alert  variant='danger'> {error} </Alert>}
      <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="email"> Email </Form.Label>
        <Form.Control type="email"  id="email"  ref={emailRef}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="passwored"> Passwored </Form.Label>
        <Form.Control    type="password"  id="passwored" ref={passwordRef}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="confirmpasswored">  confirm Password </Form.Label>
        <Form.Control   type="password"  id="confirmpasswored" ref={passwordConfirmPassword}/>
      </Form.Group>
      <Button variant="primary"  type="submit"  className='w-100' disabled={loading}> Sign UP </Button>
    </Form>
      
       
      </Card.Body>
    </Card>
    <div  className='w-100 text-center  mt-2 '>
       Already have an account ? <Link to="/signIn"> Login </Link>
     </div>
   </>
      
    
  )
}

export default SignUp
