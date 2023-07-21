
import * as React from "react";
import Appbar from "./Appbar";
import videoBg from '../assets/vid.mp4'
import { Button,ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Landing() {
    const navigate = useNavigate();
    return(
        <>
        <Appbar></Appbar> 
        <video src={videoBg} autoPlay muted loop  style={{width:"100%",height:"87.1vh",objectFit:"cover",background:"(0,0,0,6)"}}></video>
    <div style={{position:"absolute",top:"50%",left:"28%",color:"white",textAlign:"cetner"}}>
        <h1>Welcome to the best place to learn</h1>
        <ButtonGroup align="center" variant="contained">
            <Button variant="contained" onClick={(e)=>{navigate('/register')}}>Signup</Button>
            <Button variant="contained" onClick={(e)=>{navigate('/login')}}>Login</Button>
        </ButtonGroup>
    </div>
    </>
    )
}

export default Landing;