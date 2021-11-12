import React from "react";
import TrailerModal from "../TrailerModal/TrailerModal";
import "./MovieMenu.styles.scss";

const MovieMenu = (props) => {
  return (
    <ul className="line">
      <li>
        <div className="movie-rating">
          <div className="rating">
            <h3>{props.vote_average} User Rating</h3>
          </div>
          <div className="ui green progress active" id="rating">
            <div
              className="bar"
              style={{ width: `${props.vote_average * 10}%` }}
            ></div>
            <div className="progress"></div>
          </div>
        </div>
      </li>
      <li className="party-btn">
        <a className="btn" href={`/parties/new?movie_id=${props.id}`}>
          Create Viewing Party
        </a>
      </li>
      <TrailerModal video={props.video} />
    </ul>
  );
};

export default MovieMenu;
