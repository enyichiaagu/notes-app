import { useState, useEffect } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

function SignUpForm() {

    const [ formData, setFormData ] = useState({ username: '', password: '', duplicatePassword: '' })
    const [ formValid, setFormValid ] = useState(false)

    useEffect(() => {
        setFormValid(validate(formData))
    }, [formData])

    function validate({ username, password, duplicatePassword }) {
        return ((username.length >= 5) && (password.length >= 5) && (password === duplicatePassword))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // API Call
        console.log(formData)
    }

    return (
        <Box sx={{ py: 5 }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label='Username' 
                    margin='normal' 
                    variant='filled' 
                    type='text'
                    onChange={handleChange}
                    name='username'
                    fullWidth 
                /> 
                <TextField 
                    label='Password' 
                    margin='normal' 
                    variant='filled' 
                    type='password'
                    onChange={handleChange}
                    name='password'
                    fullWidth 
                /> 
                <TextField 
                    label='Repeat Password' 
                    margin='normal' 
                    variant='filled' 
                    type='password'
                    onChange={handleChange}
                    name='duplicatePassword'
                    fullWidth 
                /> 
                <Box sx={{ my: 2 }}>
                    <Button variant='contained' type='submit' disabled={!formValid}>Sign up</Button>
                </Box>
                <Typography>Have an account? Login instead</Typography>
            </form>
        </Box>
    )

}

export default SignUpForm