import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        width: '25%',
        padding: '1rem 2rem'
    },
    profText: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr'
    },
    tweeterProfText: {
        marginRight: '0.5rem',
        width: 'max-content',
        direction: 'rtl'
    },
    tweeterGrid: {
        padding: '11px 0',
    },
    profName: {
        flex: 1,
        fontSize: '1.2rem',
    },
    profId: {
        color: '#7f8c8d',
        flex: 1,
        fontSize: '1rem',
    },
    tweeterRoot: {
        marginTop: "3rem",
        backgroundColor: '#ecf0f1',
        borderRadius: '2.5rem', 
        padding:'11px 24px',
    },
    tweeterTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '11px',
    },
});
  
export default useStyles