import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";

const Login=()=>{

    let history = useHistory();

    const paperStyle={ padding: 20, height: '50vh', width: 280, margin: '40px auto', align: 'center'}
    const btnstyle={margin:'20px auto', backgroundColor: '#00796b'}
    return(
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar>S</Avatar>
                <h2>Log In</h2>
                </Grid>

                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Router>
                    <Button type='submit' color='primary' variant= 'contained'fullWidth style={btnstyle}>
                        <Link onClick={()=>history.push("/QnA")} style={{textDecoration:'none', color:'inherit'}}>Login</Link>
                    </Button>
                </Router>
                
                <Typography>
                    <Router>
                    <Link href="#">
                        Forgot Password
                    </Link>
                    </Router>
                </Typography>
                <Typography>Do you have an account?
                   <Router>
                        <Link onClick={()=>history.push('/signup')} >Sign up</Link>
                    </Router> 
                </Typography>
            </Paper>
        </Grid>
        </div>
    );
}

export default Login