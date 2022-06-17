import { createTheme } from "@mui/material";
import Scratchy from '../assets/fonts/MS-Scratch.ttf';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
      },
      typography: {
        fontFamily: "Scratchy"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Scratchy';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Scratchy'), local('MS-Scratch'), url(${Scratchy}) format('truetype');
            }
            `,
        },
    },
});

export default darkTheme;