import { MoviesActionTypes, MoviesState, SET_MOVIES, SET_ERROR, SET_FETCHING_MOVIES } from './types';

const initialState: MoviesState = {
    movies: undefined,
    fetchingMovies: false,
    error: '',
};

const moviesReducer = (state: MoviesState = initialState, action: MoviesActionTypes) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                fetchingMovies: false,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                fetchingMovies: false,
            };
        case SET_FETCHING_MOVIES:
            return {
                ...state,
                fetchingMovies: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;
