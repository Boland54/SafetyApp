import React, { useContext } from "react";
import { useQuery } from "@chakra-ui/react";

const AccidentsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('accidents')


  return (
    <div align="center">
    <div className="App">
      <h1>Accidents within a workplace</h1>
    </div>
    </div>
  );
};

export default AccidentsPage;