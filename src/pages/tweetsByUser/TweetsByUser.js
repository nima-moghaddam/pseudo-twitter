import React from 'react'
import { Divider } from '@material-ui/core';
import TweetList from '../home/component/TweetList';
import useStyles from '../home/style';
import Header from '../../component/header/Header';
import PersonIcon from '@material-ui/icons/Person';

function TweetsByUser(probs) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header title={probs.match.params.user} icon={<PersonIcon/>}/>
            <Divider className={classes.divider} />
            <TweetList />
        </div>    
    )
}

export default TweetsByUser
