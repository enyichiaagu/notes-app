import { Fragment } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

function EditNoteModal({ open, close }) {
    return (
        <Fragment>
            <Dialog open={open} onClose={close} fullWidth>
                <DialogTitle>Create new note</DialogTitle>
                <DialogContent>
                    <TextField variant='filled' label='Title' margin='normal' fullWidth />
                    <TextField multiline variant='filled' label='Note' margin='normal' rows={4} fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button variant='contained'>Save</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default EditNoteModal