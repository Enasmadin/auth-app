import React , { useState } from 'react';

import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';
import {useNavigate} from  'react-router-dom';


const DashBored = () => {
  const [error,setError] =useState("");
  const {currentUser, LogOut} = useAuth();
  const Navigate = useNavigate()

  const handelLogOut = async ()=>{
    try{
     await LogOut();
     Navigate("/signIn");
    }
    catch{
      setError(" falied to logout ")
    }
   
  }
  return (
    <> 
    <Card >
      <Card.Body>
      <h2  className='text-center mb-4'> SignUp </h2>
      {error && <Alert  variant='danger'> {error} </Alert>}
       <strong>Email : </strong> {currentUser && currentUser.email}
       <Link to="/Update-Profile"  className='btn btn-primary w-100 mt-3'>  Update Profile </Link>
      
      </Card.Body>
    </Card>
    <div  className='w-100  mt-2 text-center '>
         <button   className='btn btn-primary' onClick={handelLogOut}> Log Out  </button>
    </div>
    </>
  )
}

export default DashBored
