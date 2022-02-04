import React from "react";
import PropTypes from "prop-types";
import "./styles.css"

const YoutubeEmbed = ({ embedId }) => (
  <div align="center">
  <div className="video-responsive">
    <iframe
      width="400"
      height="350"
      src={`https://www.youtube.com/embed/4bkr5lpKGUM?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Safety is key"
    />
  </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;