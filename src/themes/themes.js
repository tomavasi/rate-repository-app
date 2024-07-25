import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        backgroundMain: "#e1e4e8",
        backgroundBar: "#24292e",
        error: "#d73a4a", 
    },
    fontSizes: {
        heading: 20,
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: "Sans-serif",
            ios: "Arial"
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;