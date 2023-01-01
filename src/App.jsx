import { Fragment } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material'

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
          <Typography variant='h6' component='div'>Notes App</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default App
