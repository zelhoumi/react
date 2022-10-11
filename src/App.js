import Navebar from './component/navebar';
import React from 'react';
import Login from './component/Login';
import Posts from './component/posts';
import Home from './component/home';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import {AuthUserContext} from './component/ContextUser';
import {UserContext} from './component/ContextUser'
import {useContext}from 'react'

function App()  {

  const stateLogin =useContext(UserContext);
    
  return (<>
  <AuthUserContext>
   
      <BrowserRouter>
      <Navebar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        {stateLogin?<Route path='/' element={<Login/>}/>:<Route path='/' element={<Home/>}/>} 
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/home' element={<Home/>}/>


      </Routes>
          
      </BrowserRouter>
  </AuthUserContext>

    </>
  

  
  );
}

export default App;
