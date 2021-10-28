
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home,Contact,PhoneDetails} from './components/app';

ReactDOM.render(

  <Router>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/phoneDetails/:id" component={PhoneDetails}/>
    </Switch>
  </Router>,
  document.getElementById('root')
  
);
