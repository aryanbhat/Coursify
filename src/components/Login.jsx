import React, { useState } from "react";
import axios from "axios";
import "./style/style.css"
import { Route, useNavigate} from "react-router-dom";
import { Card,TextField,Button,Link, Typography } from "@mui/material";
import Appbar from "./Appbar";
/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password,setPass] = useState("");
    const [error,setError] = useState(false);
    const [errmessage,setErrmessage] = useState("");
    function handleBtn(){
        if(email === "" || password === ""){
            setError(true);
            setErrmessage("You have entered an invalid username or password");
        }
        else{
            setError(false);
            setErrmessage("");
        }
        axios.post("http://localhost:3000/admin/login",{},{
            headers:{
                username: email,
                password: password
            }
        }).then((res)=>{
            console.log(res);
            localStorage.setItem(`access_token`,JSON.stringify(res.data.token));
            localStorage.setItem(`username`,JSON.stringify(email));
            navigate("/courses");
        }).catch((err)=>{
            setError(true);
            setErrmessage("You have entered an invalid username or password");
        })
    }
    return <>
    <Appbar></Appbar>
    <Card raised="true" style={{width:"40vw",margin:"auto",marginTop:"5%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3%"}} >
    <h1>Login</h1>
    <TextField 
    required
    variant="outlined" 
    label="Username" 
    type="email" 
    onChange={(e)=>{setEmail(e.target.value); setError(false)}}
        margin="normal"
        placeholder="demo@123"
     />
    <TextField 
    required
    variant="outlined" 
    label="Password" 
    type="password" 
    placeholder="123"
    onChange={(e)=>{setPass(e.target.value); setError(false)}}
     margin="normal" />
     {error && <Typography sx={{color:"red",fontStyle:"Poppins,sans-serif",fontWeight:"700"}}>{errmessage}</Typography>}
    <Button size="large"  variant="contained" style={{margin:"3%"}} onClick={handleBtn}>Login</Button>
    <div style={{margin:"3%"}}>Not a user? <Link underline="hover" href="" onClick={()=> {navigate('/register')}}>signup</Link></div>
    
    </Card>
    </>
}

export default Login;