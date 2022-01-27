const defaultState = {
    data: [],
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {...state, data: action.payload}

        default:
            return state
    }
}