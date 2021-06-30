import React from 'react'
import useStyles from '../style'
import { IconButton, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';


const tweetRender = (text) => {
    return {__html : text.replace( /#\S+/g , "<a href='tags/$&' style='color:#54a0ff ; text-decoration:none'>$&</a>")}
}


const Tweet = ({probs}) => {
    const classes = useStyles()

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={probs.sender.img} style={{ height: 'max-content' }} />
                <Grid container item direction={'column'} style={{ flex:1 , marginRight: '0.5rem'}}>
                    <Grid container item>
                        <Typography className={classes.tweetItemName}>{probs.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{probs.sender.id}</Typography>
                    </Grid>    
                    <Typography dangerouslySetInnerHTML={tweetRender(probs.text)} className={classes.tweetText} component='p'></Typography>
                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} alignItems={'center'}>
                <IconButton className={classes.newTweetImg}>
                    <img src={'images/retweet.png'} />
                </IconButton>
                <IconButton className={classes.newTweetImg}>
                    <FavoriteIcon style={{color: 'red'}} />
                </IconButton>
                <Typography className={classes.likeCount}>{probs.like}</Typography>
            </Grid>
        </div>
    )
}

export default Tweet
