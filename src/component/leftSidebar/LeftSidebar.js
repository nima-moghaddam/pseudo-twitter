import React from 'react'
import useStyles from './style';
import  Grid  from '@material-ui/core/Grid';
import { Typography, Divider, ButtonBase} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Tweeter = ({name , id , img}) => {
    const classes = useStyles()

    return (
        <ButtonBase style={{width:'100%'}} >
        <Grid container direction={'row'} className={classes.tweeterGrid}>
                <img src={img} style={{width:'50px'}}></img>
                <Grid item container direction={'column'}  className={classes.tweeterProfText}>
                    <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
                </Grid>
            </Grid>
        </ButtonBase>
    )
}

const tweeter = [
    {
        name: 'xiaomi',
        id: '@Xiaomi',
        img: '/images/xiaomi.png'
    },
    {
        name: 'sumsung',
        id: '@sumsung',
        img: '/images/samsung.png'
    },
    {
        name: 'بیل گیتس',
        id: '@Bill_Gates',
        img: '/images/bil.png'
    },
    {
        name: 'مایک بای',
        id: '@Mike_Bye',
        img: '/images/mike.png'
    },
    {
        name: 'شیلی وایت',
        id: '@Shily_white',
        img: '/images/shily.png'
    },
]


function LeftSidebar() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container direction={'row-reverse'}>
                <img src={'/images/user img.png'} ></img>
                <Grid item container direction={'column'}  className={classes.profText}>
                    <Typography className={classes.profName}>نیما مقدم</Typography>
                    <Typography className={classes.profId}>Nima.moghaddam</Typography>
                </Grid>
            </Grid>
            <Grid container item direction={'column'} className={classes.tweeterRoot}> 
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginRight:'-24px' , marginLeft: '-24px'}}/>
                {
                    tweeter.map((item , index) => {
                        return  (<Link to={`/users/${item.name}`}>
                            <Tweeter name={item.name} id={item.id} img={item.img} />
                            {index !== tweeter.length - 1
                                && <Divider style={{ marginRight: '-24px', marginLeft: '-24px' }}/>}
                                </Link>
                            ) })
                }
            </Grid>
        </div>
    )
}

export default LeftSidebar
