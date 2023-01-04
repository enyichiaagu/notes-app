import { Fragment } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container } from '@mui/material'

import Home from './pages/Home'
import Auth from './pages/Auth'

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
      <Container maxWidth='lg' component='main'  sx={{ py: 5 }}>
        <Home />
        {/* <Auth /> */}
      </Container>
    </Fragment>
  )
  
}

export default App
