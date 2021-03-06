import React from 'react'
import { Divider } from '@material-ui/core';
import TweetList from './../home/component/TweetList';
import useStyles from '../home/style';
import Header from './../../component/header/Header';

function TweetsByHashTag(probs) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header title={probs.match.params.hashtag} icon={<img src={'/images/hashtag.png'}/>}/>
            <Divider className={classes.divider} />
            <TweetList />
        </div>    
    )
}

export default TweetsByHashTag
