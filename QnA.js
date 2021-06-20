import React from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Qna = () => {


  const paperStyle1 = {
    padding: 20,
    height: "72vh",
    width: 1000,
    margin: "40px auto",
    backgroundColor: "#424242" 

    
  };
  const paperStyle2 = {
    padding: 20,
    height: "38vh",
    width: 1000,
    margin: "40px auto",
    backgroundColor: "#424242" 
    
  };
  const paperStyle3 = {
    padding: 20,
    height: "41vh",
    width: 1000,
    margin: "40px auto",
    backgroundColor: "#424242" 

    
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const btnstyle = { margin: "50px auto", textDecoration: 'none', left:1100, backgroundColor: '#00796b'};
  const boxStyle = { border: "1px solid gray", padding: 20, color: "whitesmoke" };
const dialogStyle = {height: '50vh', width: 1000, left: 250, top: 200}
  return (
    <div>
    <Grid align="left">
      
                  
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={btnstyle}>
        Ask a question
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={dialogStyle}>
        <DialogTitle id="form-dialog-title">What is your question?</DialogTitle>
        <DialogContent style={{color:'#00796b'}}>
          <DialogContentText>
            Type in your question:
          </DialogContentText >
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#00796b">
            Cancel
          </Button>
          <Button onClick={handleClose} style={{color:"#00796b"}}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Paper elevation={10} style={paperStyle1}>
        <Grid align="left">
          <div style={boxStyle}>
          <IconButton
            color="inherit"
            aria-label="account"
          >
            <AccountCircle /> <h6>Sarah Sudhir</h6>
          </IconButton>
            <h5>1. What are the features of React?</h5>

            <h5>
              JSX: JSX is a syntax extension to JavaScript. It is used with
              React to describe what the user interface should look like. By
              using JSX, we can write HTML structures in the same file that
              contains JavaScript code.
            </h5>

            <h5>
              Components Components: Components are the building blocks of any
              React application, and a single app usually consists of multiple
              components. It splits the user interface into independent,
              reusable parts that can be processed separately.
            </h5>

            <h5>
              Virtual DOM Virtual DOM: React keeps a lightweight representation
              of the real DOM in the memory, and that is known as the virtual
              DOM. When the state of an object changes, virtual DOM changes only
              that object in the real DOM, rather than updating all the objects.
            </h5>

            <h5>
              Data binding One-way data-binding: React’s one-way data binding
              keeps everything modular and fast. A unidirectional data flow
              means that when designing a React app, you often nest child
              components within parent components.
            </h5>

            <h5>
              High performance: React updates only those components that have
              changed, rather than updating all the components at once. This
              results in much faster web applications.
            </h5>
          </div>
        </Grid>
      </Paper>
      <Paper elevation={10} style={paperStyle2}>
        <Grid align="left">
          <div style={boxStyle}>
          <IconButton
            color="inherit"
            aria-label="account"
          >
            <AccountCircle /> <h6>John V</h6>
          </IconButton>
            <h5>2. What is JSX?</h5>

            <h5 style={{color:"whitesmoke"}}>
            JSX is a syntax extension of JavaScript. It is used with React to describe what the user 
            interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
            </h5>

            
          </div>
        </Grid>
      </Paper>

      <Paper elevation={10} style={paperStyle3}>
        <Grid align="left">
          <div style={boxStyle}>
          <IconButton
            color="inherit"
            aria-label="account"
          >
            <AccountCircle /> <h6>Komal Singh</h6>
          </IconButton>
            <h5>3. What is the virtual DOM?</h5>

            <h5>
            DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.
            React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
            </h5>

            
          </div>
        </Grid>
      </Paper>
    </Grid>

    </div>
  );
};

export default Qna;
