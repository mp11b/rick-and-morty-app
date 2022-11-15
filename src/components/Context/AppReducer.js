export default (state, action) => {
    switch (action.type) {
        case "ADD_CHARACTER_TO_FAVORITES":
            return{
                ...state,
                charactersFavorites: [action.payload, ...state.charactersFavorites]
            }
        case "ADD_EPISODE_TO_FAVORITES":
            return{
                ...state,
                episodesFavorites: [action.payload, ...state.episodesFavorites]
            }
        case "REMOVE_CHARACTER_TO_FAVORITES":
            return{
                ...state,
                charactersFavorites: state.charactersFavorites.filter((c) => c.id !== action.payload.id)
            }
        case "REMOVE_EPISODE_TO_FAVORITES":
            return{
                ...state,
                charactersFavorites: state.episodesFavorites.filter((e) => e.id !== action.payload.id)
            }
        default:
            return state
    }
}