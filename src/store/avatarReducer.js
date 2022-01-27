const defaultState = {
    avatar: false,
}

export const avatarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_AVATAR_STATUS":
            return {...state, avatar: action.payload}
        default:
            return state
    }
}