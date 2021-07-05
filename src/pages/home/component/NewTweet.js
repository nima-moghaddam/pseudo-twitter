import { IconButton } from '@material-ui/core'
import { Button, Grid } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import useStyles from '../style'


const NewTweet = () => {
    const classes = useStyles()

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={'/images/user img.png'} style={{width: 'max-content'}}/>
                <div contentEditable className={classNames(classes.input , 'editable') }  data-placeholder="توییت کن"/>
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Button variant={'contained'} color={'primary'} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImg}>
                    <img src={'/images/tweetpic.png'} />
                </IconButton> 
            </Grid>
        </div>
    )
}

export default NewTweet
