import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => <Route key={Math.random()} {...route} />)}
      </Switch>
    </BrowserRouter>



  );
}

export default App;
