const defaultState = {
    loginData: {},
}

export const loginDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_LOGIN_DATA":
            return {...state, loginData: action.payload}
        default:
            return state
    }
}