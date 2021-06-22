import React from 'react'
import useStyles from "./style";
import RightSidebar from "../rightSidebar/RightSidebar";
import { Divider } from '@material-ui/core';
import LeftSidebar from "../leftSidebar/LeftSidebar";

const Layout = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <RightSidebar></RightSidebar>
            <Divider orientation={'vertical'} className={classes.divider}></Divider>
            <div className={classes.mainPart}>
                منو اصلی
            </div>
            <Divider orientation={'vertical'} className={classes.divider}></Divider>
            <LeftSidebar></LeftSidebar>
        </div>
    )
}

export default Layout
