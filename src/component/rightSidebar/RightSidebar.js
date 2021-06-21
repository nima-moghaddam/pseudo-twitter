import { ButtonBase, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import useStyles from './style';

const hashTags = [
    'پرچم_دار_جدید',
    'کرونا_ویروس',
    'سامسونگ',
    'هلو_سامر',
    'پرچم_دار_جدید',
    'کرونا_ویروس',
    'سامسونگ',
    'هلو_سامر'
]

function RightSidebar() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container direction={'row'} alignItems={'center'}>
                <Grid item>
                    <img src={'images/logo.png'}></img>
                </Grid>
                <Grid item>
                    <Typography className={classes.logoType} component='h1'>
                        توییتر فارسی
                    </Typography>
                </Grid>    
            </Grid>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={'column'} alignItems={'center'}>
                {hashTags.map(item => 
                    <ButtonBase className={classes.hashtagParent}>
                        <Grid item container>
                            <img src={'images/hashtag.png'}></img>
                            <Typography className={classes.hashtag}>{item}</Typography>
                        </Grid>
                    </ButtonBase>
                )}
            </Grid>
        </div>
    )
}

export default RightSidebar
