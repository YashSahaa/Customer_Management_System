import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import AdminService from '../services/AdminService';

const SignupSignin = () => {
  const [admin, setAdmin] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupWithEmail = () => {
    setLoading(true);
    if (admin.name !== "" && admin.email !== "" && admin.password !== "" && confirmPassword !== "") {
      if (admin.password === confirmPassword) {
        AdminService.signUp({
          
          emailId: admin.email,
          name : admin.name,
          password: admin.password
        })
          .then(() => {
            setLoading(false);
            setAdmin({
              email: "",
              name: "",
              password: "",
            });
            setConfirmPassword("");
            navigate("/customerList");
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        console.log("Password and confirm password don't match");
        setLoading(false);
      }
    } else {
      console.log("All Fields are mandatory");
      setLoading(false);
    }
  };

  const loginUsingEmail = () => {
    setLoading(true);
    
    if (admin.email !== "" && admin.password !== "") {
      AdminService.login({
        emailId: admin.email,
        password: admin.password
      })
      .then((res) => {
        setLoading(false);
        if (res.data) { // res.data will be true if login is successful
          setAdmin({
            email: "",
            password: "",
          });
          navigate("/customerList");
        } else {
          console.log("Email or password is incorrect");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Login failed:", error);
      });
    } else {
      console.log("All Fields are mandatory");
      setLoading(false);
    }
  };
  
  

  return (
    <div className='wrapper'>
      {loginForm ? (
        <div className='signup-wrapper'>
          <h2 className='title'>LogIn Page</h2>
          <form>
            <Input type={"email"} label={"Email"} name={"email"} state={admin} setState={setAdmin} placeholder={"JhonDoe@gmail.com"} />
            <Input type={"password"} label={"Password"} name={"password"} state={admin} setState={setAdmin} placeholder={"Example@123"} />
            <Button disabled={loading} text={loading ? "Loading..." : "Login using Email and Password"} onClick={loginUsingEmail} />
            <p className='p-login' style={{ cursor: "pointer" }}>Or Don't Have An Account ?<span onClick={() => setLoginForm(!loginForm)} style={{ color: "blue", fontWeight: "normal" }}>Click Here</span> </p>
          </form>
        </div>
      ) : (
        <div className='signup-wrapper'>
          <h2 className='title'>SignUp Page</h2>
          <form>
            <Input type={"text"} label={"Full Name"} name={"name"} state={admin} setState={setAdmin} placeholder={"Jhon Doe"} />
            <Input type={"email"} label={"Email"} name={"email"} state={admin} setState={setAdmin} placeholder={"JhonDoe@gmail.com"} />
            <Input type={"password"} label={"Password"} name={"password"} state={admin} setState={setAdmin} placeholder={"Example@123"} />
            <Input type={"password"} label={"ConfirmPassword"} name={"confirmPassword"} state={confirmPassword} setState={setConfirmPassword} placeholder={"Example@123"} />
            <Button disabled={loading} text={loading ? "Loading..." : "SignUp using Email and Password"} onClick={signupWithEmail} />
            <p className='p-login' style={{ cursor: "pointer" }}>Or Have An Account Already? <span onClick={() => setLoginForm(!loginForm)} style={{ color: "blue", fontWeight: "normal" }}>Click Here</span></p>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupSignin;
