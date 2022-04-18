import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getMovies } from '../../store/movies/actions';
import { StyledBox, StyledTextField, StyledIconButton, StyledSearchIcon, StyledCircularProgress } from './styles';

export interface SearchBarProps {
    searchText: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchText, handleChange }) => {
    const dispatch = useDispatch();
    const { fetchingMovies } = useSelector((state: RootState) => state.movies);

    const handleClick = async () => {
        await dispatch(getMovies(searchText));
    };

    const getDisplayedItem = () => {
        if (fetchingMovies) {
            return <StyledCircularProgress />;
        }

        return (
            <StyledIconButton onClick={handleClick} disabled={!searchText} data-testid="btn">
                <StyledSearchIcon />
            </StyledIconButton>
        );
    };
    return (
        <StyledBox>
            <StyledTextField value={searchText} onChange={handleChange} placeholder="Enter Text Here" />
            {getDisplayedItem()}
        </StyledBox>
    );
};

export default SearchBar;
