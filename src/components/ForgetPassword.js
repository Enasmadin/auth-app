import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const ForgetPassword = () => {
  const [error,setError] =useState("");
  const [loading,setLoading]= useState(false);
  const emailRef = useRef();
  const {restPasssword} = useAuth();
  const [message,setMessage]=useState("");
  
  

  const handelForgetPassword= async(e)=>{
    e.preventDefault();
    setError("")
    try{
      setError("");
      await restPasssword(emailRef.current.value);
     
      // navigate("/Update-Profile");
    
      setLoading(true);
      setMessage(" check your inbox to get  new passsword ");

      console.log("trues")
    }
    catch{
      setError (" falied  to rest password ");
     
    }
    setLoading(false);
  }
  return (
    <>
    <Card >
    <Card.Body>
    <h2  className='text-center mb-4'> Rest  Password  </h2>
    {error && <Alert  variant='danger'> {error} </Alert>}
    {message && <Alert  variant='success'> {message} </Alert>}
    <Form onSubmit={handelForgetPassword}>
    <Form.Group className="mb-3"  >
      <Form.Label htmlFor="email"> Email </Form.Label>
      <Form.Control type="email"  id="email"  ref={emailRef} />
    </Form.Group>
    <Button variant="primary"  type="submit" className='w-100' disabled={loading} >    Rest  Password </Button>
   </Form>
    
    
    </Card.Body>
    <div  className='mb-3 w-100 text-center '>
       <Link   to="/signIn"> Log In  </Link>
    </div>
  </Card>
   <div  className='w-100 text-center  mt-2 '>
   Need to an Account   ? <Link to="/SignUp">  Register  </Link>
 </div>
 </>
  )
}

export default ForgetPassword
