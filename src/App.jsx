import { Fragment } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from '@mui/material'

import NoteCard from './components/NoteCard'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Notes App</Typography>
          <Button color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='lg' sx={{ pt: 5 }}>
        <Grid container spacing={5}>
          <Grid item lg={4}><NoteCard/></Grid>
          <Grid item lg={4}><Paper sx={{ width: '100%', p: 2 }}>Example</Paper></Grid>
          <Grid item lg={4}><Paper sx={{ width: '100%', p: 2 }}>Example</Paper></Grid>
          <Grid item lg={4}><Paper sx={{ width: '100%', p: 2 }}>Example</Paper></Grid>
          <Grid item lg={4}><Paper sx={{ width: '100%', p: 2 }}>Example</Paper></Grid>
          <Grid item lg={4}><Paper sx={{ width: '100%', p: 2 }}>Example</Paper></Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default App
