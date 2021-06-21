import { createMuiTheme } from "@material-ui/core";

const colorPrimary = '#5ea9dd'

const Theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'shabnam !important', 
            }
        }
    },
    palette: {
        primary: {
            main: colorPrimary,
            light: '#7eb3d9'
        }
    }
})

export default Theme