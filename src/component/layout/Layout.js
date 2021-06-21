import React from 'react'
import useStyles from "./style";
import RightSidebar from "../rightSidebar/RightSidebar";
import { Divider } from '@material-ui/core';

const Layout = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <RightSidebar></RightSidebar>
            <Divider orientation={'vertical'} className={classes.divider}></Divider>
            <div className={classes.mainPart}>
                منو اصلی
            </div>
            <div className={classes.leftSidebar}>
                left side bar
            </div>
        </div>
    )
}

export default Layout
