import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import { createContext } from "react";
import { useState } from "react";
import Home from "./component/Home/Home";
import Delete from "./component/Delete/Delete";
import Read from "./component/Read/Read";
import Create from "./component/Create/Creact";
import Edit from "./component/Edit/Edit";

export const UserContext = createContext();

function App() {
  const usersProfile = [
    {
      id: 1,
      name: "John",
      position: "web developer",
      salary: "20000",
    },
    {
      id: 2,
      name: "mamun",
      position: "full stack developer",
      salary: "50000",
    },
    {
      id: 3,
      name: "joy",
      position: "web designer",
      salary: "30000",
    },
  ];
  const [users, setUsers] = useState(usersProfile);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/read/:id'>
            <Read />
          </Route>
          <Route path='/edit/:id'>
            <Edit />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/delete/:id'>
            <Delete />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
