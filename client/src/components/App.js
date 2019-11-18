import React from "react"
import { useUsers } from "../hooks"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {Catagories} from "/main"
import {Form} from "/form.js"
import {Cities} from "/cities"


function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    <Router>
    <div> 
      <div>
        <Route exact path="/" component={Catagories}/>
        <Route path="/form" component={Form}/>
        <Route path="/cities" component={Cities}/>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/cities">Cities</Link>
      </div>
    </div>
    </Router>
  )
}

export default App
