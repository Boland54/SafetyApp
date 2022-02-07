import React, { useContext } from "react";
import { useQuery } from "@chakra-ui/react";
import "./imageCSS.css"
import stat1 from "../image/2018stats.png";
import stat2 from "../image/2020stats.png";

const AccidentsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('accidents')


  return (
    <div align="center">
    <div>
      <h1>Accidents within a workplace</h1>
      <div>
     <img src={stat1} alt="stats for 2018" />
     </div>
     <div>
       <img src={stat2} alt="stats for 2020" />
     </div>
    </div>
    </div>
  );
};

export default AccidentsPage;