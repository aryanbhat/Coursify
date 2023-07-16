import React, { useEffect,useState} from "react";
import axios from "axios";
import "./style/style.css"
import Appbar from "./Appbar";
import { Route, useNavigate } from "react-router-dom";
import { Card,Button,TextField,Link,Typography} from "@mui/material";
/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPass] = useState("");
    const [error,setError] = useState(false);
    const [errmessage,setErrmessage] = useState("");
    function Handleclick(e){
        if(email === '' || password === ''){
            setErrmessage("Invalid username or password");
            setError(true);
        }
        else{
            setError(false);
        axios.post("http://localhost:3000/admin/signup",{
            username: email,
            password:password
        }).then((res)=>{
            navigate('/login');
        }).catch((err)=>{
            setErrmessage("User already exists");
            setError(true);
        })
    }
    }
    return(
        <>
        <Appbar isLoggedIn={false} username={""}></Appbar>
        <Card raised="true" style={{width:"40vw",margin:"auto",marginTop:"5%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3%"}} >
        <h1>Welcome to Coursify</h1>
        <TextField 
        required
        variant="outlined" 
        label="Username" 
        type="email" 
        onChange={(e)=>{setEmail(e.target.value); setError(false)}}
            margin="normal"
         />
        <TextField 
        required
        variant="outlined" 
        label="Password" 
        type="text" 
        onChange={(e)=>{setPass(e.target.value); setError(false)}}
         margin="normal" />
         {error && <Typography sx={{color:"red",fontStyle:"Poppins,sans-serif",fontWeight:"700"}}>{errmessage}</Typography>}
        <Button size="large" variant="contained" style={{margin:"3%"}} onClick={Handleclick}>Signup</Button>
        <div style={{margin:"3%"}}>Already a user? <Link underline="hover" href="" onClick={()=> {navigate('/login')}}>Login</Link></div>
        
        </Card>
        </>
    )
}

export default Register;