import { Fragment, useState } from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, SvgIcon, TextField, Typography } from '@mui/material'

function NoteCard({ add, title='', text='' }) {

    const [ open, setOpen ] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <Fragment>
            
            {
                (add) ?

                    <Card sx={{ width: '100%', height: '100%', textAlign: 'center' }}>
                        <CardActionArea sx={{ height: '100%' }} onClick={openModal}>
                            <SvgIcon color='primary' sx={{ fontSize: '6rem' }}>
                                <path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            </SvgIcon>
                            <br />
                            <Typography variant='button' color='primary'>Create new note</Typography>
                        </CardActionArea>
                    </Card> :

                    <Card sx={{ width: '100%' }}>
                    <CardActionArea onClick={openModal}>
                        <CardContent>
                            <Typography variant='h6' component='header' gutterBottom>{title}</Typography>
                            <Typography height='10rem' overflow='hidden'>{text}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={openModal}>Edit</Button>
                        <Button>Delete</Button>
                    </CardActions>
                </Card> 
            }

            <Dialog open={open} onClose={closeModal} fullWidth>
                <DialogTitle>Create new note</DialogTitle>
                <DialogContent>
                    <TextField 
                        variant='filled' 
                        label='Title' 
                        margin='normal' 
                        defaultValue={title}
                        fullWidth 
                    />
                    <TextField 
                        multiline 
                        variant='filled' 
                        label='Note' 
                        margin='normal' 
                        rows={10}
                        defaultValue={text}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button variant='contained'>Save</Button>
                </DialogActions>
            </Dialog>

        </Fragment>
    )

}

export default NoteCard