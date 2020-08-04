import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import axios  from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { green } from '@material-ui/core/colors';
const CreatePost=() =>{
    
    const [date, setDate]=useState() 
    const [email, setEmail]=useState() 
    const [title, setTitle]=useState() 
    const [detail, setDetail]=useState() 
    const CreateNewPost = (event) => {
      if(date && email && title && detail){
//        console.log(name+ email+ pin+ address+ product);
        axios.post("users/add-post", {email : email, date : date, title : title, detail : detail}).then(res=>{
          toast.success("Succesfully Created");
        }).catch((err)=>{
          toast.error("Error Occured");
        })
      }
      event.preventDefault()
    }
    return (
        <Form style={{color: green}}>
        <legend>New Post</legend>
        <Input placeholder="Date" onChange ={(e) =>setDate(e.target.value)} />
        <Input placeholder="Email" onChange ={(e) => setEmail(e.target.value)}/>
        <Input placeholder="title"  onChange ={(e) => setTitle(e.target.value)}/>
        <Textarea placeholder="detail" onChange ={(e) => setDetail(e.target.value)} />
    <Button onClick={CreateNewPost} variant="raised">Add Post</Button>
      </Form>
    )
}
export default CreatePost;