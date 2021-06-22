import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        height: '100vh',
        width: '100%',
        display: 'flex'
    },
    mainPart: {
        backgroundColor: 'white',
        flex: 1
    },
    divider: {
        height: '100% !important',
        width: '1px !important',
        backgroundColor: '#74b9ff !important',
        opacity: '0.5'
    }
});
  
export default useStyles