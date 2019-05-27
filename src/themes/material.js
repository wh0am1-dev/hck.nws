import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const theme = responsiveFontSizes(createMuiTheme({
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
    fontFamily: 'IBM Plex Mono, Consolas, Monaco, system monospace'
  }
}))

export default theme
