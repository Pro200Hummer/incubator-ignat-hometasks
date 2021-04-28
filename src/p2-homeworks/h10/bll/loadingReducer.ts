
export type InitialStateType = {
    loading: boolean
}
export type ActionType = {
    type: "PRELOADER"
}


const initState = {
    loading: false
}

export const loadingReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'PRELOADER': {
            state.loading = !state.loading
            return {...state}
        }
        default: return state
    }
}

export const loadingAC = (): ActionType => {
    return {
        type: "PRELOADER"
    }
}