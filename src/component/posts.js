import './posts.css'
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios'
import {UserContext} from './ContextUser'
export const routname ='/posts'

const Posts= ()=>{
  const stateLogin =useContext(UserContext);
    const[post,setpost] = useState([]);
     const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const fetchdata =async ()=> {
           const result= await axios("https://jsonplaceholder.typicode.com/posts",);
        setpost(result.data)
      }
     if(stateLogin.isLogin)fetchdata();
      

    }, []);
   
 
    const posts=  post?.map((data,index) =>{return(
      <div className='card' key={index}>
      <div className='card-post'>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
      </div>
 
</div>
     
    )}
     );
   return (<>
     <h1 >Posts</h1>
    <div className='container'>
    
        <div className='row'>
          {posts}
           
       
                    </div>
  
  
    </div>
   </>
   );


   }

export default Posts;