import React, { useContext } from "react";
import YoutubeEmbed from "../components/youtubeEmbed/YoutubeEmbed";
import { useQuery } from "@chakra-ui/react";
import "./imageCSS.css"; 

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('home')


  return (
   
    <div className="back" align="center">
      <h1>Safety is key</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
    
  );
};

export default HomePage;