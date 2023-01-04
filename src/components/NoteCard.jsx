import { Fragment, useEffect, useState } from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, SvgIcon, TextField, Typography } from '@mui/material'

function NoteCard({ add, title='', text='' }) {

    const [ open, setOpen ] = useState(false)
    const [ content, setContent ] = useState({ title, text })

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    const handleContentChange = (e) => {
        const { name, value } = e.target
        setContent({ ...content, [name]: value })
    }

    function saveNote() {
        // console.log(content)
    }

    return (
        <Fragment>
            <Card sx={{ width: '100%', height: '18rem', position: 'relative' }}>
            {
                add ? 

                    <CardActionArea sx={{ height: '100%', textAlign: 'center' }} onClick={openModal}>
                        <SvgIcon color='primary' sx={{ fontSize: '6rem' }}>
                            <path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </SvgIcon>
                        <br />
                        <Typography variant='button' color='primary'>Create new note</Typography>
                    </CardActionArea> :

                    <Fragment>
                        <CardActionArea onClick={openModal}>
                            <CardContent>
                                <Typography variant='h6' component='header' gutterBottom>{content.title}</Typography>
                                <Typography height='10rem' overflow='hidden'>{content.text}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ position: 'absolute', bottom: 0 }}>
                            <Button onClick={openModal}>Edit</Button>
                            <Button>Delete</Button>
                        </CardActions>
                    </Fragment>
            }
            </Card>

            <Dialog open={open} onClose={closeModal} fullWidth>
                <DialogTitle>Create new note</DialogTitle>
                <DialogContent>
                    <TextField 
                        name='title'
                        variant='filled' 
                        label='Title' 
                        margin='normal' 
                        value={content.title}
                        onChange={handleContentChange}
                        fullWidth 
                    />
                    <TextField 
                        name='text'
                        multiline 
                        variant='filled' 
                        label='Note' 
                        margin='normal' 
                        rows={10}
                        value={content.text}
                        onChange={handleContentChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button variant='contained' onClick={saveNote}>Save</Button>
                </DialogActions>
            </Dialog>

        </Fragment>
    )

}

export default NoteCard