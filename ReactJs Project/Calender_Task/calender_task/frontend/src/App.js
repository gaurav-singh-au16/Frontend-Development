import MyApp from "./components/Calander";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Navbar} />
          <Route path="/calendar" exact component={MyApp} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
   
  );
}

export default App;
