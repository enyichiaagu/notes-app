import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

function NoteCard() {
    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h6' component='header' gutterBottom>Random Title</Typography>
                    <Typography height='10rem' overflow='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas, debitis commodi culpa voluptas neque eos impedit deserunt voluptatem soluta perspiciatis labore odit nam iusto! Nam itaque, iure, quisquam quis eos hic quaerat expedita exercitationem nulla tenetur, laudantium reiciendis officia obcaecati? Eos debitis minima eaque earum, praesentium dolorem necessitatibus fuga rem dignissimos beatae assumenda autem id reiciendis iure accusamus soluta est, non iste. Tempore, enim iste. Dolores voluptatibus enim animi nisi facilis ducimus, labore, beatae corrupti ullam explicabo ipsum quaerat provident soluta assumenda voluptates vitae molestiae! Ullam, ducimus reprehenderit dolor autem libero minus optio nihil illum veritatis quibusdam non placeat earum obcaecati amet reiciendis iusto!</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default NoteCard