import {changeTheme, InitStateType, themeReducer} from "./themeReducer";


let initState: InitStateType
beforeEach(() => {
    initState = {
        theme: ""
    }
})

test('theme should be changed', () => {

    const action = changeTheme('someTheme')
    const endState = themeReducer(initState, action)

    expect(endState.theme).toBe('someTheme')
})