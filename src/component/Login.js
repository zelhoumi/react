import  './LoginStyle.css'
import {useContext, useState}from'react';
import {UserContext} from './ContextUser'
import {set, useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
export const routname ='/login'
function Login(){
  const stateLogin =useContext(UserContext);
  const [email,setEmail]=useState();
  const navigate = useNavigate();
  const [connected,setConnected]=useState();
  const { register, handleSubmit} = useForm({ shouldUseNativeValidation: true });
  const  [validLogin,setValidLogin]=useState(true);
  const onSubmit = async data => { 
     if(data.email=="testreact@gmail.com"&&data.password=="123test456"){
      setConnected(true)
      setTimeout(() => {
        setEmail(data.email);
     
      stateLogin.setLogin(true);
      navigate('/home')
      }, 1000);
       
     }else{
      setValidLogin(false)

     }
     

  };
  const clearValidat=()=>{
    setValidLogin(true)
   
  }
    return (<div className='login'>
     
    <form onSubmit={handleSubmit(onSubmit)}>
         <p>Login</p>
         <label htmlFor="email">email</label>
         <input onKeyDown={clearValidat} type="email" placeholder='email@example.com' id="email"  {...register("email",{required:"email is Required"})}  />
         
         <label htmlFor="password">password</label>
         <input onKeyDown={clearValidat} type="password" placeholder='password' id="password" {...register("password",{required:"password is Required"})} ></input>
         {!validLogin?<span style={{color: "red"}}>mots de passe où l'e-mail est erroné. </span>:null}
         {connected?<span style={{color: "green"}}>connecté avec succès </span>:null}
         <button type="submit" > Login</button>
        
    </form>
    
  </div>);
}
export default Login;