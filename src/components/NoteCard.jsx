import { Fragment, useState } from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, SvgIcon, Typography } from '@mui/material'

import NoteModal from './NoteModal'

function NoteCard({ add, title='', text='' }) {

    const [ open, setOpen ] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    function deleteNote() {
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
                                <Typography variant='h6' component='header' gutterBottom>{title}</Typography>
                                <Typography height='10rem' overflow='hidden'>{text}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ position: 'absolute', bottom: 0 }}>
                            <Button onClick={openModal}>Edit</Button>
                            <Button onClick={deleteNote} color='error'>Delete</Button>
                        </CardActions>
                    </Fragment>
            }
            </Card>
            <NoteModal open={open} closeModal={closeModal} title={title} text={text} />
        </Fragment>
    )

}

export default NoteCard