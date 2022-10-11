import React,{ createContext, useState } from "react";



 export const UserContext = createContext()

export const AuthUserContext=(props)=>{
    const [isLogin,setLogin]= useState(false);
  return(
   
   <UserContext.Provider value={{isLogin,setLogin}}>
       {props.children}
   </UserContext.Provider>
  );
}