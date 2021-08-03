import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Grade1 from './component/Grade1'
import Grade2 from './component/Grade2';
import Grade3 from './component/Grade3';
import './css.css';

function App() {
  return (
    <div className="container">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Grade1" exact component={Grade1} />
        <Route path="/Grade2" exact component={Grade2} />
        <Route path="/Grade2" exact component={Grade3} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
