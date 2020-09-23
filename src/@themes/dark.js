import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      common: {
        black: '#111',
        white: '#eee'
      },
      primary: orange,
      secondary: {
        light: '#4c4c4c',
        main: '#202020',
        dark: '#161616',
        contrastText: '#fff'
      },
      error: {
        light: '#4c4c4c',
        main: '#202020',
        dark: '#161616',
        contrastText: '#fff'
      },
      text: {
        primary: '#eee'
      },
      background: {
        paper: '#222',
        default: '#111'
      }
    },
    typography: {
      fontFamily: 'Nunito, Segoe UI, Helvetica Neue, Helvetica, Roboto, sans'
    },
    size: {
      drawer: 240
    },
    overrides: {
      MuiButton: {
        text: {
          fontWeight: 600,
          textTransform: 'lowercase'
        },
        outlined: {
          fontWeight: 600,
          textTransform: 'lowercase'
        }
      }
    }
  })
)

export default theme
