import React,{useState,useEffect} from 'react';
import './TestingByMe.css';
import axios from "axios";
function Adduser(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signup=()=>{
        axios.post("/signup",{name,email,password}).then((res)=>{
                 console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
    }
    return (
        <div className="body">
            <form className="signupform">
                <h1>SignUp</h1>
                <label>Please Enter the UserName
                    {console.log(email)}
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input></label>
                <label>Please Enter the Email
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
                <label>Please Enter the Password
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
                <button onClick={signup}>Submit</button>
            </form>
        </div>
    )
}
export default Adduser;