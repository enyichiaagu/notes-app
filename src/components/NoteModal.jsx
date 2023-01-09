import { useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

function NoteModal({ open, closeModal, ...restOfProps }) {
    
    const [ content, setContent ] = useState(restOfProps)

    const handleContentChange = (e) => {
        const { name, value } = e.target
        setContent({ ...content, [name]: value })
    }

    function saveNote() {
        // console.log(content)
    }

    return (
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

    )

}

export default NoteModal