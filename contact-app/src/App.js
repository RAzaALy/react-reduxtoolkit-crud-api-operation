import React from "react";
import { Switch,Route  } from "react-router-dom";
import Main from "./components/Main";
import AddContact from "./components/AddContact";

import "./App.css";
import EditContact from "./components/EditContact";

function App() {
  return (
    <>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Main}  />
            <Route exact path="/add" component={AddContact} /> 
            <Route exact path="/edit" component={EditContact} /> 
            </Switch>
      </div>
    </>
  );
}

export default App;
