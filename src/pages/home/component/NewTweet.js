import { IconButton } from '@material-ui/core'
import { Button, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from '../style'

const NewTweet = () => {
    const classes = useStyles()

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={'images/user img.png'} style={{width: 'max-content'}}/>
                <textarea placeholder={'توییت کن'} className={classes.input} />
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Button variant={'contained'} color={'primary'} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImg}>
                    <img src={'images/tweetpic.png'} />
                </IconButton> 
            </Grid>
        </div>
    )
}

export default NewTweet
