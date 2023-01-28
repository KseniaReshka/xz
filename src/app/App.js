import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import Login from "./components/login";
import Posts from "./components/posts";
import NotFound from "./components/not-found";


function App() {
  return (
    <div >
      <NavBar />
      <h1>App</h1>
      <Switch>
      <Route path='/posts:postId?' render={(props)=>(<Posts {...props}/>)}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/login' component={Login}/>
      <Route path='/'  component={Home}/>
      <Route path='/404'  component={NotFound}/>
      <Redirect to='/404'/>
      </Switch>
    </div>
  );
}

export default App;
