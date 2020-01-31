import React from 'react';
import './App.css';
import Form from './Form'
import Validate from './Validate'
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Form}/>
        <Route path='/validate' component={Validate}/>
      </Switch>
    </div>
  );
}

export default App;
