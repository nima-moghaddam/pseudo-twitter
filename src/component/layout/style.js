import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        height: '100vh',
        width: '100%',
        display: 'flex'
    },
    divider: {
        height: '100% !important',
        width: '1px !important',
        backgroundColor: '#74b9ff !important',
        opacity: '0.5'
    },
    content: {
        flex: 1,
        overflowY: 'auto',
    },
});
  
export default useStyles