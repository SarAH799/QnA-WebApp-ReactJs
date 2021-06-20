import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Qna from './components/QnA'
import Navbar from './components/navbar'
import background from './components/bg.jpg'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/QnA' component={Qna}/>
          <Route exact path='/navbar' component={Navbar}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
