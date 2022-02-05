import React, { useContext } from "react";
import { useQuery } from "@chakra-ui/react";

const ComitteePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('comittee')


  return (
    <div align="center">
    <div className="App">
      <h1>Comittee</h1>
    </div>
    </div>
  );
};

export default ComitteePage;