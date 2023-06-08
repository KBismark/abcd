import { createTheme, } from "@rneui/themed";


//#b8e1ee
//#d3ecf4
export default createTheme({
    mode: 'light',
    lightColors: {
        background: '#fbfbfb',//
        primary: '#0bbcf4',
        white:'#ffffff',
        black: '#121313',
        grey0:'#b8e1ee',
        grey1:'#d3ecf4'
    },
    darkColors: {

    }
})


interface ThemeSkeleton {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        white: string;
        black: string;
        grey0: string;
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        grey5: string;
        greyOutline: string;
        searchBg: string;
        success: string;
        error: string;
        warning: string;
        divider: string;
        platform: {
            ios: {
                primary: string;
                secondary: string;
                grey: string;
                searchBg: string;
                success: string;
                error: string;
                warning: string;
            };
            android: {
                // Same as ios
            };
            web: {
                // Same as ios
            };
        };
    };
}