import { Route, Switch } from "react-router-dom"
import All from "../pages/All"
import Verbs from "../pages/Verbs"
import Nouns from "../pages/Nouns"
import Adverbs from "../pages/Adverbs"
import Others from "../pages/Others"
import About from "../pages/About"
import Users from "../pages/Users"
import Home from "../pages/Home"

const Router = () => {
  return (
    <Switch>
      <Route path="/all">
        <All />
      </Route>
      <Route path="/verbs">
          
        <Verbs />
      </Route>
      <Route path="/nouns">
        <Nouns />
      </Route>
      <Route path="/adverbs">
        <Adverbs />
      </Route>
      <Route path="/others">
        <Others />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Router
