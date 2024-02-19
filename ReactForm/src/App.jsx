// import { useState } from 'react'
import React, { useState } from 'react';
import './App.css'
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <SignUpForm setUserData={setUserData} />
      <Authenticate userData={userData} />
    </>
  );
}
  
export default App