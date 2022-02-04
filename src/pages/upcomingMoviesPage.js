import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

   

  return (
    
    <div>
      <table>
        <thead>
          <tr>
            <td> Error </td>
            <td> Description </td>
            <td> Name </td>
            <td> Name </td>
          </tr>
        </thead>
        </table>
    </div>
);
};

export default UpcomingMoviesPage;