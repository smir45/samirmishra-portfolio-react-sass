import { BrowserRouter as Router, Switch, Route } from react-router-dom;
import Home from './jsx/home';
import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/" exact component={Home} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
