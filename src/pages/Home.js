// imports
import { useState } from "react"
import { Container, TextField, RadioGroup, FormControlLabel, Radio, Button, Grid } from "@material-ui/core"
// eof imports

const Home = () => {
  // hooks
  const [partOfSpeech, setPartOfSpeech] = useState("nouns")
  const [priority, setPriority] = useState("medium")
  // eof hooks

  // private
  const handleOnChangePartOfSpeech = (event) => {
    setPartOfSpeech(event.target.value)
  }

  const handleOnChangePriority = (event) => {
    setPriority(event.target.value)
  }

  const handleOnSubmit = (opt, opt1) => {
    console.log(opt)
    console.log(opt1)
  }
  // eof private

  return (
    <Container>
      <h2>Add a new word!</h2>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField fullWidth id="word" label="word" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="translation" label="translation" variant="outlined" />
          </Grid>

          <Grid item xs={6}>
            <RadioGroup aria-label="partOfSpeech" name="partOfSpeech" value={partOfSpeech} onChange={handleOnChangePartOfSpeech}>
              <FormControlLabel value="nouns" control={<Radio />} label="Nouns" />
              <FormControlLabel value="verbs" control={<Radio />} label="Verbs" />
              <FormControlLabel value="adverbs" control={<Radio />} label="Adverbs" />
              <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <RadioGroup aria-label="priority" name="priority" value={priority} onChange={handleOnChangePriority}>
              <FormControlLabel value="low" control={<Radio />} label="Low" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="high" control={<Radio />} label="High" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">To learn</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Home
