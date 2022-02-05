import React from "react";
import { useQuery } from 'react-query'



const TrendingMovies = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('problems')



  return (
   <div>
     <h1>Hello this is the problems page</h1>
   </div>
);
};

export default TrendingMovies;