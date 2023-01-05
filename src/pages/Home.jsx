import { Fragment, useEffect, useState } from 'react'

import { Typography, Grid } from '@mui/material'

import NoteCard from '../components/NoteCard'

function Home() {

    const [ data, setData ] = useState([])

    const mockData = [
        { id: 1, title: "New Beginnings", text: "It's the start of a new year and I'm feeling refreshed and ready to take on whatever comes my way. I spent the holiday season with my family and it was so nice to relax and spend quality time with them. Now that the holidays are over, I'm feeling motivated and ready to tackle my goals for the year. I'm excited to see what the future holds and I'm determined to make the most of it." },
        { id: 2, title: "Reflections on the Past Year", text: "As I look back on the past year, I can't help but feel grateful for all of the experiences and lessons that I've had. There were certainly some challenges, but I feel like I've grown so much as a person because of them. I've made some new friends and strengthened my relationships with others. I've also learned a lot about myself and what I want out of life. I'm looking forward to applying these lessons in the new year." },
        { id: 3, title: "Setting Goals", text: "One of my resolutions for the new year is to focus on setting and achieving specific goals. I find that when I have clear goals in mind, I'm more motivated and productive. This year, I want to set both short-term and long-term goals for myself. Some of my short-term goals include exercising regularly and saving money. My long-term goals include furthering my education and eventually starting my own business. I'm excited to see what I can accomplish with a clear plan in place." },
        { id: 4, title: "Gratitude", text: "As I reflect on the past year and look ahead to the new one, I can't help but feel grateful for all that I have. I have a roof over my head, food to eat, and people in my life who love and support me. I know that not everyone is as fortunate, and it's important to remember to be grateful for the things we often take for granted. I'm going to try to focus on the positive things in my life and make an effort to spread joy and gratitude to those around me." }
    ]

    useEffect(() => {
        getNotes()
    }, [])


    function getNotes() {
        // Calling API
        setData(mockData)
    }
    
    return (
        <Fragment>
            <Typography variant='h4' component='h2'>Notes</Typography>
            <Grid container spacing={5} sx={{ py: 5 }}>
                <Grid item xs={12} sm={6} md={4}><NoteCard add /></Grid>
                {
                    data.map(({ id, title, text }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}><NoteCard title={title} text={text} /></Grid>
                    ))
                }
            </Grid>
        </Fragment>
    )

}

export default Home