import {ActionType, InitialPeopleType} from "../HW8";


export const homeWorkReducer = (state: InitialPeopleType[], action: ActionType) => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                state.sort((a, b) => a.name <= b.name ? -1 : 1)
            }
            if (action.payload === "down") {
                state.sort((a, b) => a.name <= b.name ? 1 : -1)
            }
            return [...state]
        }
        case "check": {
            return state = state.filter(st => st.age > 18)
        }
        default:
            return state
    }
};