import React,{useState} from 'react';
import Axios from 'axios';

function Post()
{
    const url="http://jsonplaceholder.typicode.com/posts";
    const[data,setData]=useState({
        userId:" ",
        title:" ",
        body : " "
     } )
     function handle(e)
     {
         const newdata={...data}
         newdata[e.target.id]=e.target.value;
         setData(newdata);
         console.log(newdata);

     }
     function submit(e)
     {
         e.preventDefault();
         Axios.post(url, {
             userId:data.userId,
             title:data.title,
             body:data.body,
             
         }).then(res=>{
             console.log(res.data);
         })
     }
    return(
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id ="userId" value={data.userId} placeholder="userId" type="number"></input>  
                <input onChange={(e)=>handle(e)} id ="title" value={data.gender} placeholder="title" type="text"></input>  
                <input onChange={(e)=>handle(e)} id ="body" value={data.status} placeholder="body" type="text"></input>  
                  
            <button>submit</button>
            </form>

        </div>
    )
}
export default Post;