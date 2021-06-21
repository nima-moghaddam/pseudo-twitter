import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(Theme =>( {
    root: {
        backgroundColor: 'white',
        width: '18%',
        padding: '1.5rem 1rem',
    },
    logoType: {
        fontSize: '1.25rem',
        fontWeight: 600,
        marginRight: '1rem',
        color: Theme.palette.primary.main
    },
    hashtagTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        marginTop: '3rem',
        marginBottom: '1.5rem'
    },
    hashtag: {
        fontSize: '1.2rem',
        marginRight: '0.8rem',
    },
    hashtagParent: {
        marginBottom: '0.5rem !important',
        padding: '0.15rem !important',
        width: '100%'
    },
}));
  
export default useStyles