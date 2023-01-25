import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home"
import Posts from "./components/posts"
import Dashboard from "./components/dashboard"
import Login from "./components/login";

function App() {
  return (
    <div >
      <NavBar />
      <h1>App</h1>
      <Switch>
      <Route path='/posts' component={Posts}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/login' component={Login}/>
      <Route path='/'  component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
