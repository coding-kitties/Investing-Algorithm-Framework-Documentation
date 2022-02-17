import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
    typography: {
        fontFamily: "Lexend Deca"
    },
    palette: {
        primary: {
            main: '#6c5fc7',
            light: '#897fd2',
            dark: '#393596',
            contrastText: "#fff"
        },
        secondary: {
            main: "#2C394A",
            light: "#566376",
            dark: "#031322",
            contrastText: "#fff",
        },
        background: {
            light: "#c2c2c2",
        }
    },
    text: {
        main: "#ffffff",
        light: "#f0f0f0",
        dark: "#c2c2c2",
        contrastText: "#3c3c3c",
    },
    drawerWidth: 270,
});

theme = responsiveFontSizes(theme);

export default theme