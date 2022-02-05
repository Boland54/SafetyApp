import React, { useContext } from "react";
import YoutubeEmbed from "../components/youtubeEmbed/YoutubeEmbed";
import { useQuery } from "@chakra-ui/react";

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('home')


  return (
    <div align="center">
    <div className="App">
      <h1>Safety is key</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
    </div>
  );
};

export default HomePage;