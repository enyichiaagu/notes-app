import { Fragment } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from '@mui/material'

import NoteCard from './components/NoteCard'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  
  const title = 'Random Title'
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas, debitis commodi culpa voluptas neque eos impedit deserunt voluptatem soluta perspiciatis labore odit nam iusto! Nam itaque, iure, quisquam quis eos hic quaerat expedita exercitationem nulla tenetur, laudantium reiciendis officia obcaecati? Eos debitis minima eaque earum, praesentium dolorem necessitatibus fuga rem dignissimos beatae assumenda autem id reiciendis iure accusamus soluta est, non iste. Tempore, enim iste. Dolores voluptatibus enim animi nisi facilis ducimus, labore, beatae corrupti ullam explicabo ipsum quaerat provident soluta assumenda voluptates vitae molestiae! Ullam, ducimus reprehenderit dolor autem libero minus optio nihil illum veritatis quibusdam non placeat earum obcaecati amet reiciendis iusto!'

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Notes App</Typography>
          <Button color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='lg' component='main'  sx={{ py: 5 }}>
        <Typography variant='h4' component='h2'>Notes</Typography>
        <Grid container spacing={5} sx={{ py: 5 }}>
          <Grid item lg={4}><NoteCard add /></Grid>
          <Grid item lg={4}><NoteCard title={title} text={text} /></Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default App
