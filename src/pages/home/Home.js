import React from 'react'
import useStyles from './style'
import Header from './component/Header';
import { Divider } from '@material-ui/core';
import NewTweet from './component/NewTweet';
import TweetList from './component/TweetList';

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Divider className={classes.divider} />
            <NewTweet />
            <TweetList />
        </div>    
    )
}

export default Home
