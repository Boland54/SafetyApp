import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { Form } from "../components/form/Form";
import { OutputLeaderboard } from "../components/form/OutputLeaderboard";


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)



  return (
    <div align="center">
      <Spinner/>
    </div>
  );
}


export default UpcomingMoviesPage;