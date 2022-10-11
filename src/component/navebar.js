import './navebarStyle.css'
import React,{useContext} from 'react';
import {UserContext} from './ContextUser'
import {routname} from './Login'
import { useNavigate } from "react-router-dom";
function NaveBar(){
    const navigate = useNavigate();
  const stateLogin =useContext(UserContext);
 
  const logOut=()=>{
    
    stateLogin.setLogin(false);
      navigate('/home')
  }
  const login=()=>{
 
    navigate('/login')
  }
    return(
        <header>
            <p className="img">Login</p>
            <nav>
                
                <ul className="navL">
                    <li ><a href="#">Home</a></li>
                    {stateLogin.isLogin? <li ><a href="#" onClick={
                        (event)=>{event.preventDefault()
                            navigate('/posts')}
                    }>Post</a></li>:null}
                    {!stateLogin.isLogin? <li> <button onClick={login} className="cta" href='#'> login</button></li>: <li> <button onClick={logOut} className="cta" href='#'> log out</button></li>}
        
                           
                </ul>
            </nav>
           
        </header>
    );

}
export default NaveBar;