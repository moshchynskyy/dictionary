import { Link } from "react-router-dom"
import { MenuList, MenuItem, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    root: {
      display: "flex"
    },
    paper: {
      marginRight: "12px"
    }
  }
})

const MainMenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList
          id="simple-menu"
          open={true}
        >
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/all">All</Link></MenuItem>
          <MenuItem><Link to="/nouns">Nouns</Link></MenuItem>
          <MenuItem><Link to="/verbs">Verbs</Link></MenuItem>
          <MenuItem><Link to="/adverbs">Adverbs</Link></MenuItem>
          <MenuItem><Link to="/others">Others</Link></MenuItem>
          <MenuItem><Link to="/users">Users</Link></MenuItem>
          <MenuItem><Link to="/about">About</Link></MenuItem>
        </MenuList>
      </Paper>
    </div>
  )
}

export default MainMenu
