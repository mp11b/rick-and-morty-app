import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

//Initial State
const initialState = {
    charactersFavorites: localStorage.getItem('charactersFavorites') 
    ? JSON.parse(localStorage.getItem('charactersFavorites')) 
    :[],
    episodesFavorites: localStorage.getItem('episodesFavorites') 
    ? JSON.parse(localStorage.getItem('episodesFavorites')) 
    :[],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('charactersFavorites', JSON.stringify(state.charactersFavorites));
        localStorage.setItem('episodesFavorites', JSON.stringify(state.episodesFavorites));
    }, [state])

    //Actions

    const addCharacterToFavorites = character => {
        dispatch({type: "ADD_CHARACTER_TO_FAVORITES", payload: character});
    }

    const addEpisodeToFavorites = episode => {
        dispatch({type: "ADD_EPISODE_TO_FAVORITES", payload: episode});
    }

    const removeCharacterToFavorites = (id) => {
        dispatch({type: "REMOVE_CHARACTER_TO_FAVORITES", payload: id});
    }

    const removeEpisodeToFavorites = (id) => {
        dispatch({type: "REMOVE_EPISODE_TO_FAVORITES", payload: id});
    }  

    return (
        <GlobalContext.Provider 
            value={{
                charactersFavorites: state.charactersFavorites, 
                episodesFavorites: state.episodesFavorites, 
                addCharacterToFavorites, 
                addEpisodeToFavorites,
                removeCharacterToFavorites,
                removeEpisodeToFavorites}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
