const defaultState = {
  basket: [],
}

export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, basket: [...state.basket, action.payload]}
        case "DEL_FROM_CART":
            return {basket: state.basket.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}