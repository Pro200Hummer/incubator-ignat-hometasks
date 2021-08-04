const initState: InitStateType = {
    theme: ""
};

export const themeReducer = (state = initState, action: ThemeReducerActionsType): InitStateType => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.currentTheme
            }
        default:
            return state;
    }
};

export const changeTheme = (currentTheme: string) =>
    ({type:"CHANGE_THEME", currentTheme} as const);


/* Types */
export type InitStateType = {
    theme: string
}

type ThemeReducerActionsType =
    |ReturnType<typeof changeTheme>