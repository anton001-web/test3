import {BURGER_TOGGLE, THEME_TOGGLE} from "./types";

export const burgerToggle = () => {
    return {
        type: BURGER_TOGGLE
    }
}

export const themeChange = () => {
    return {
        type: THEME_TOGGLE
    }
}