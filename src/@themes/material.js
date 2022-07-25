import { createTheme, responsiveFontSizes } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'dark',
      primary: orange,
      secondary: {
        light: '#4c4c4c',
        main: '#202020',
        dark: '#161616',
        contrastText: '#fff'
      }
    },
    typography: {
      fontFamily: 'Segoe UI, Helvetica Neue, Helvetica, Roboto, sans'
    },
    size: {
      drawer: 240
    }
  })
)

export default theme
