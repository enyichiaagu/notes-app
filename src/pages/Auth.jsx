import { Fragment } from 'react'

import { Grid, Typography } from '@mui/material';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Auth() {

    return (
        <Fragment>
            <Grid container columnSpacing={5}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h4' component='h2'>Login</Typography>
                    <LoginForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h4' component='h2'>Sign up</Typography>
                    <SignUpForm />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Auth