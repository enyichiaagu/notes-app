import { Fragment } from 'react'

import { Typography, Grid } from '@mui/material'

import NoteCard from '../components/NoteCard'

function Home() {

    const title = 'Random Title'
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas, debitis commodi culpa voluptas neque eos impedit deserunt voluptatem soluta perspiciatis labore odit nam iusto! Nam itaque, iure, quisquam quis eos hic quaerat expedita exercitationem nulla tenetur, laudantium reiciendis officia obcaecati? Eos debitis minima eaque earum, praesentium dolorem necessitatibus fuga rem dignissimos beatae assumenda autem id reiciendis iure accusamus soluta est, non iste. Tempore, enim iste. Dolores voluptatibus enim animi nisi facilis ducimus, labore, beatae corrupti ullam explicabo ipsum quaerat provident soluta assumenda voluptates vitae molestiae! Ullam, ducimus reprehenderit dolor autem libero minus optio nihil illum veritatis quibusdam non placeat earum obcaecati amet reiciendis iusto!'


    return (
        <Fragment>
            <Typography variant='h4' component='h2'>Notes</Typography>
            <Grid container spacing={5} sx={{ py: 5 }}>
                <Grid item lg={4}><NoteCard add /></Grid>
                <Grid item lg={4}><NoteCard title={title} text={text} /></Grid>
            </Grid>
        </Fragment>
    )

}

export default Home