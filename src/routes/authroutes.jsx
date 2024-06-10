import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Signin from 'component/auth/signin'
import Signup from 'component/auth/signup'
const Authroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='sign-up' element={<Signup/>} />
    </Routes>
    </>
  )
}

export default Authroutes
