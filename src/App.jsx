import { Fragment } from 'react'
import { Outlet, useLoaderData, redirect } from 'react-router-dom'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { getUser } from './utils/api'

export async function loader() {
  return null
}

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
        <Outlet />
      </Container>
    </Fragment>
  )
  
}

export default App
