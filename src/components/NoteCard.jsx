import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

function NoteCard() {
    return (
        <Card sx={{ width: '100%'}}>
            <CardActionArea>
                <CardContent>
                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quo nam laboriosam ullam laborum hic libero reprehenderit sequi incidunt, voluptates id explicabo ducimus? Harum quo, necessitatibus vel sit dicta ab tenetur quos maxime doloribus magni dolore a. Beatae nesciunt aperiam et, esse eaque atque, nihil eligendi, quasi sequi libero quod consequatur quidem culpa earum velit minus veritatis</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default NoteCard