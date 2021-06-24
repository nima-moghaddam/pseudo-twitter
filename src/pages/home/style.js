import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#dfe4ea',
        flex: 1,
        overflowY: 'auto'
    },
    header: {
        padding: 18,
        backgroundColor: 'white',
        display: 'flex',
    },
    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
        marginRight: '0.5rem'
    },
    divider: {
        opacity: '0.15',
        backgroundColor: '#7f8c8d'
    },
    newTweet: {
        padding: 18,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    tweetItem: {
        padding: 18,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem',
    },
    input: {
        border: 'none',
        marginRight: '1rem',
        outline: 'none',
        flex: 1,
        resize: 'none'
    },
    newTweetBtn: {
        color: 'white',
        borderRadius: '1rem',
        fontFamily: 'shabnam'
    },
    newTweetImg: {
        border: '1px solid #3337',
        borderRadius: '50%',
        padding: '0.2rem',
        marginLeft: '1rem'
    },
    tweetItemName: {
        marginRight: '1rem',
        fontWeight: 600 ,
    },
    tweetItemId: {
        color: '#57606f',
        marginRight: '0.5rem',
        fontSize: '0.9rem',
    },
    tweetText: {
        fontSize: '0.9rem',
        marginTop: '0.5rem',
    },
    likeCount: {
        fontSize: '0.9rem',
        color: '#57606f',
        marginLeft: '0.5rem',
    },
});
  
export default useStyles