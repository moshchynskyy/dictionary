// imports
import { BrowserRouter as Router } from "react-router-dom"
// import { Container } from "@material-ui/core";

import MainMenu from "./Menu"
import MainRouter from "./Router"
// eof imports

const App = () => {
  return (
    <Router>
      <MainMenu />
      <MainRouter />
    </Router>
  )
}

export default App
