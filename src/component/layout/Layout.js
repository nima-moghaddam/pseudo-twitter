import React from 'react'
import useStyles from "./style";
import RightSidebar from "../rightSidebar/RightSidebar";
import { Divider } from '@material-ui/core';
import LeftSidebar from "../leftSidebar/LeftSidebar";
import Home from './../../pages/home/Home';
import TweetsByHashTag from './../../pages/tweetsByHashTag/TweetsByHashTag';

const Layout = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={'vertical'} className={classes.divider}></Divider>
            <div className={classes.content}>
                <Home/>
            </div>
            <Divider orientation={'vertical'} className={classes.divider}></Divider>
            <LeftSidebar/>
        </div>
    )
}

export default Layout
