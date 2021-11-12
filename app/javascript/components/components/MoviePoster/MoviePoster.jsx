import React from "react";

const MoviePoster = (props) => {
  console.log(props);
  return (
    <div className="poster">
      <img
        className="poster-img"
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`}
        alt="..."
      />
    </div>
  );
};

export default MoviePoster;
