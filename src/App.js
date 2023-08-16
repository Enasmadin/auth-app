
import React from "react";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
 import { Container} from "react-bootstrap";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import DashBored from "./components/DashBored";
import AuthProvider from "./context/AuthContext";
import RequriedAuth from "./context/RequriedAuth";

function App() {
  return  <Container className="d-flex justify-content-center  align-items-center" style ={{ minHeight:"100vh" }}>
    <div className="w-100" style ={{ maxWidth:"500PX" }}>
      <Router>
      <AuthProvider>
         <Routes>
          <Route  path="/signUp"  element={<SignUp/>}/>
          <Route  path="/signIn"  element={<Login/>}/>
          <Route  path="/forget-password"  element={<ForgetPassword/>}/>
          <Route  path="/Update-Profile"  element={<UpdateProfile/>}/>
          
            <Route   path="/" element={ <RequriedAuth> <DashBored/> </RequriedAuth>}/>
         
          
         </Routes>
         </AuthProvider>
      </Router>
    </div>

  </Container>
}

export default App;
