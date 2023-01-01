import { Fragment } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Notes App</Typography>
          <Button color='inherit'>Logout</Button>
        </Toolbar>
      </AppBar>

    </Fragment>
  )
}

export default App
