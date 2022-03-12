import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../features/movieSlice';
import { fetchMoviesData } from '../../features/movieSlice'
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import styled, { css } from 'styled-components';

const sharedStyles = css`
  color: ${props => props.theme.colors.white};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  ${sharedStyles};
  margin-top: 72px;
  font-size: 49px;
`;

const MoviesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 18px;
  grid-row-gap: 36px;
  justify-items: center;
`;

const ErrorMessage = styled.h2`
  ${sharedStyles};
  font-size: 37px;
`;

const Movies = () => {

  const [movieTitle, setMovieTitle] = useState('superman');
  const movies = useSelector(getMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesData(movieTitle))
  }, [dispatch])

  const handleMovieChange = e => {
    setMovieTitle(e.target.value);
  }

  const handleFetchMovies = (title) => {
    dispatch(fetchMoviesData(title));
  }

  return(
    <Main>
      <Logo>Moviefinder</Logo>
      <SearchBar title={movieTitle} onChange={handleMovieChange} onClick={handleFetchMovies} />
        {movies?.length > 0 ? (
          <MoviesGrid>
            {movies?.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </MoviesGrid>
        ) : (
          <ErrorMessage>No movies found 😟</ErrorMessage>
        )}
    </Main>
  );
}

export default Movies;