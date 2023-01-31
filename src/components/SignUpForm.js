import React, { useState } from 'react';
import {
  MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBInput
}
  from 'mdb-react-ui-kit';
import axios from "axios";


const SignUpForm = () => {

  // LOGIN CTE
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [login, setLogin] = useState(false);

  // REGISTER CTE
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [register, setRegister] = useState(false);

  // CHOOSE TAB 
  const [justifyActive, setJustifyActive] = useState('tab1');
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  async function handleSubmitLog(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/signin', {
        email: emailLog, password: passwordLog
      }).then(res => {
        if (res.data === "exist") {
          console.log("exist")

        } else if (res.data === "notexist") {
          alert("Email or password is incorrect");
          console.log("notexist")
          setLogin(true);
        }
      }).catch(error => {
        console.log(error);
      });

    } catch (error) {
      console.log(error);
    }
  }


  async function handleSubmitReg(e) {
    console.log("emailReg: ", emailReg);
    console.log("passwordReg: ", passwordReg);
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/signup', {
        email: emailReg, password: passwordReg
      }).then(res => {
        if (res.data === "exist") {
          alert("User already exist");
          console.log("exist")

        } else if (res.data === "notexist") {
          // history('/', { state: { id: emailReg } });
          console.log("notexist")
          setRegister(true);
        }
      }).catch(error => {
        console.log(error);
      });


    } catch (error) {
      console.log(error);
    }
  }


  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          {/* SIGN IN */}
          <MDBInput wrapperClass='mb-4' label='Email' id='form1'
            type='email' onChange={(e) => setEmailLog(e.target.value)} />

          <MDBInput wrapperClass='mb-4' label='Password' id='form2'
            type='password' onChange={(e) => setPasswordLog(e.target.value)} />

          <MDBBtn className="mb-4 w-100" onClick={handleSubmitLog}>Sign in</MDBBtn>
          {login ? (
            <p className="text-success">You Are Logged in Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Logged in</p>
          )}
        </MDBTabsPane>




        {/* SIGN UP */}
        <MDBTabsPane show={justifyActive === 'tab2'}>

          {/* <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' /> */}
          <MDBInput wrapperClass='mb-4' label='Email' id='form1'
            type='email' onChange={(e) => { setEmailReg(e.target.value) }} />

          <MDBInput wrapperClass='mb-4' label='Password' id='form1'
            type='password' onChange={(e) => { setPasswordReg(e.target.value) }} />

          <MDBBtn className="mb-4 w-100" onClick={handleSubmitReg}>Sign up</MDBBtn>
          {register ? (
            <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
        </MDBTabsPane>




      </MDBTabsContent>

    </MDBContainer>
  );
}

export default SignUpForm;