import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Signin from 'component/auth/signin'
import Signup from 'component/auth/signup'
import NewSignUp from '../container/HorumarkaalApp/Auth/components/newPassword/NewSignUp';
const Authroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='new-password' element={<NewSignUp />} />
    </Routes>
    </>
  )
}

export default Authroutes
