import { createContext } from 'react';

/*export const themes = {
    light: {
        backgroundPrimary: "#E5E5E5",
        backgroundSecondary: "#FFFFFF",
        colorPrimary: "#E6362D",
        colorSecondary: "#1F1331",
        textPrimary: "#06070D",
        textSecondary: "#9A9A9D",
        iconPrimary: "#06070D",
        iconSexondary: "#F1F1F1"
    },
    dark: {
        backgroundPrimary: "#140C21",
        backgroundSecondary: "#1F1331",
        colorPrimary: "#E6362D",
        colorSecondary: "#1F1331",
        textPrimary: "#BCBEC0",
        textSecondary: "#9A9A9D",
        iconPrimary: "#BCBEC0",
        iconSexondary: "#1F1331"
    }
}*/
export const themes = {
    dark: 'dark-theme',
    light: 'light-theme'
}

export const ThemeContext = createContext(themes.dark);