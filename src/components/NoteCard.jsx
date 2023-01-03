import { Fragment, useState } from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import EditNoteModal from './EditNoteModal'

function NoteCard() {

    const [ open, setOpen ] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <Fragment>
            <Card sx={{ width: '100%' }}>
                <CardActionArea onClick={openModal}>
                    <CardContent>
                        <Typography variant='h6' component='header' gutterBottom>Random Title</Typography>
                        <Typography height='10rem' overflow='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas, debitis commodi culpa voluptas neque eos impedit deserunt voluptatem soluta perspiciatis labore odit nam iusto! Nam itaque, iure, quisquam quis eos hic quaerat expedita exercitationem nulla tenetur, laudantium reiciendis officia obcaecati? Eos debitis minima eaque earum, praesentium dolorem necessitatibus fuga rem dignissimos beatae assumenda autem id reiciendis iure accusamus soluta est, non iste. Tempore, enim iste. Dolores voluptatibus enim animi nisi facilis ducimus, labore, beatae corrupti ullam explicabo ipsum quaerat provident soluta assumenda voluptates vitae molestiae! Ullam, ducimus reprehenderit dolor autem libero minus optio nihil illum veritatis quibusdam non placeat earum obcaecati amet reiciendis iusto!</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={openModal}>Edit</Button>
                    <Button>Delete</Button>
                </CardActions>
            </Card>
            <EditNoteModal open={open} close={closeModal} />
        </Fragment>
    )

}

export default NoteCard