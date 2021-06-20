import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core'
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";

const Signup=()=>{
    let history = useHistory();

    const paperStyle={ padding: 20, height: '70vh', width: 280, margin: '40px auto'}
    const btnstyle={margin:'20px auto', backgroundColor: '#00796b' }
    return(
        <div >
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar>S</Avatar>
                <h2>Sign Up</h2>
                </Grid>

                <TextField label='Set Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Set Password' placeholder='Enter Password' type='password' fullWidth required/>
                <TextField label='Confirm Password' placeholder='Confirm Password' type='password' fullWidth required/>
                <TextField label='Email' placeholder='Enter Email' type='email' fullWidth required/>                
                <TextField label='Phone Number' placeholder='Enter Phone Number' type='tel' fullWidth required/>


                <Button type='submit' color='primary' variant= 'contained'fullWidth style={btnstyle}>Login</Button>
                
                <Typography>Have an account?
                    <Router>
                    <Link onClick={()=>history.push("/")}>Login</Link>
                    </Router>
                </Typography>
            </Paper>
        </Grid>
        </div>
    );
}

export default Signup