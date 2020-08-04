import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Layout from "./Layout";
import Createpost from './CreatePost';
import RecipeReviewCard from './Post';
import AddIcon from '@material-ui/icons/Add';

  const Dashboard = () => {
  const [createpost, setCreatpost]=useState(false);
  const [users, setUsers] = useState([]);
  const updatelike = (id) =>{
    console.log("Calling Upi");
       axios.post("/users/update-like",{ "id": id}).then(res =>{
       console.log(res);
       
     }).catch(err => {
       console.log("Error Occured"+err);
     })
     makeApiCall();
  }
  const makeApiCall = useCallback(() => {
    axios
      .get("users/all-products")
      .then((res) => {
        console.log("FETCH USERS SUCCESS!!", res);
        setUsers(res.data.result);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          toast.error(err.response.data.error);
        }
      });
  }, []);
  const create_newpost = (event) =>{
    setCreatpost(!createpost);
    event.preventDefault();
  }
  useEffect(() => {
    makeApiCall();
  }, [makeApiCall]);
  const dj= createpost ? <Createpost/> : null 
  return (
    <Layout>
      <AddIcon  onClick={create_newpost} style={{ fontSize: 100 } }/>
      {dj}
      <div className="col-md-6 offset-md-3">
        <ToastContainer /> 
        <ul>
          {!users.length ? (
            <li>No users have signedup.</li>
          ) : (
            users.map((user) => <li key={user._id}><RecipeReviewCard updatelike={updatelike} user={user}/></li>)
          )}
        </ul>
        <button className="btn btn-primary" onClick={makeApiCall}>
          Refresh
        </button>
      </div>
    </Layout>
  );
  }
export default Dashboard;
