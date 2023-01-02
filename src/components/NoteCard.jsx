import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

function NoteCard() {
    return (
        <Card sx={{ width: '100%', height: '20rem' }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h6' component='header' gutterBottom>Random Title</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ad eaque voluptatem tempora adipisci aliquam eius amet dolor rerum laborum consequatur accusantium? Sequi, saepe! Recusandae, totam? Ab blanditiis sapiente laudantium maiores</Typography>
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