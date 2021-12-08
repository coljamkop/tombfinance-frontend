//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#FFF',
    },
    background: {
      default: '#ededf2',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      light: '#4d6ac5',
      main: '#0e3ea5',
      dark: '#002285',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffdd4c',
      main: '#ddb11c',
      dark: '#a5750e',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    color: '#2c2560',
    fontFamily: ['"Gotham"', 'sans-serif'].join(','),
  },
});

export default newTheme;
