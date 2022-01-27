const defaultState = {
    favorites: [],
}

export const favoritesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {...state, favorites: [...state.favorites, action.payload]}
        case "DEL_FROM_FAVORITES":
            return {favorites: state.favorites.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}