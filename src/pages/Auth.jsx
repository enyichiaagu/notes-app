import { Fragment } from 'react'

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

function Auth() {

    return (
        <Fragment>
            <Grid container columnSpacing={5}>
                <Grid item lg={6}>
                    <Typography variant='h4' component='h2'>Login</Typography>
                    <Box sx={{ py: 5 }}>
                        <form>
                            <TextField label='Username' margin='normal' variant='filled' type='text' fullWidth /> <br />
                            <TextField label='Password' margin='normal' variant='filled' type='password' fullWidth /> <br />
                            <Box sx={{ my: 2 }}>
                                <Button variant='contained'>Login</Button>
                            </Box>
                            <Typography>Don't have an account? Sign up Instead</Typography>
                        </form>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Typography variant='h4' component='h2'>Sign up</Typography>
                    <Box sx={{ py: 5 }}>
                        <form>
                            <TextField label='Username' margin='normal' variant='filled' type='text' fullWidth /> <br />
                            <TextField label='Password' margin='normal' variant='filled' type='password' fullWidth /> <br />
                            <TextField label='Repeat Password' margin='normal' variant='filled' type='password' fullWidth /> <br />
                            <Box sx={{ my: 2 }}>
                                <Button variant='contained'>Sign up</Button>
                            </Box>
                            <Typography>Have an account? Login instead</Typography>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Auth