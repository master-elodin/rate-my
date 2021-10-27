import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Submit from "./Submit";
import View from "./View";

function App() {
  return (
    <div className="app">
      <Router>
        <header className="app__header">
          Rate My Show?
        </header>
        <div className={'app__sidebar'}>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/submit'}>Submit new</Link></li>
            <li><Link to={'/view'}>View existing</Link></li>
          </ul>
        </div>
        <div className={'app__body'}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/submit">
            <Submit />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
