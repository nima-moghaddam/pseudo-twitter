import React from 'react'
import useStyles from './style'
import { Divider } from '@material-ui/core';
import NewTweet from './component/NewTweet';
import TweetList from './component/TweetList';
import Header from './../../component/header/Header';
import  HomeIcon  from '@material-ui/icons/Home';


function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header title={'خانه'} icon={<HomeIcon/>} />
            <Divider className={classes.divider} />
            <NewTweet />
            <TweetList />
        </div>    
    )
}

export default Home
