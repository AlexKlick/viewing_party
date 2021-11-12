import React from "react";
import "./Movie.styles.scss";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import MovieMenu from "../components/MovieMenu/MovieMenu";

const MovieDetails = (props) => {
  const runtime =
    String(Math.round(props.runtime / 60)) +
    " " +
    "hour" +
    `${props.runtime / 60 > 1 ? "s" : null}` +
    " " +
    String(props.runtime % 60) +
    " minutes";
  return (
    <div
      className="contain"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.backdrop_path})`,
      }}
    >
      <div className="dimmer">
        <MoviePoster poster_path={props.poster_path} />
        <div className="movie-card">
          <div className="movie-title">
            <a className="title"> {props.title} </a>
            <span>({props.release})</span>
          </div>
          <MovieMenu
            vote_average={props.vote_average}
            id={props.id}
            video={props.video}
          />
          <div className="ui top attached tabular menu">
            {props.genres.map((genre) => (
              <div className="item">{genre.name}</div>
            ))}
            <div className="item">{runtime}</div>
          </div>
          <div className="ui bottom attached segment">
            <p className="overview">{props.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
