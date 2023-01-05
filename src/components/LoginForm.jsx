import { useEffect, useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

function LoginForm() {

    const [ formData, setFormData ] = useState({ username: '', password: '' })
    const [ formValid, setFormValid ] = useState(false)

    useEffect(() => {
        setFormValid(validate(formData))
    }, [formData])

    function validate({ username, password }) {
        return ((username.length >= 5) && (password.length >= 5))
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
                    name='username'
                    onChange={handleChange}
                    fullWidth 
                /> 
                <TextField 
                    label='Password' 
                    margin='normal' 
                    variant='filled' 
                    type='password' 
                    name='password'
                    onChange={handleChange}
                    fullWidth 
                /> 
                <Box sx={{ my: 2 }}>
                    <Button variant='contained' type='submit' disabled={!formValid}>Login</Button>
                </Box>
                <Typography>Don't have an account? Sign up Instead</Typography>
            </form>
        </Box>
    )

}

export default LoginForm