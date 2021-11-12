import React from "react";
import "./Movie.styles.scss";

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
        <div className="poster">
          <img
            className="poster-img"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`}
            alt="..."
          />
        </div>
        <div className="movie-card">
          <div className="movie-title">
            <a className="title"> {props.title} </a>
            <span>({props.release})</span>
          </div>
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
            <li className="trailer">
              <button
                className="btn "
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                View Trailer
              </button>
              <div
                className="modal fade "
                id="videoModal"
                tabindex="-1"
                aria-labelledby="videoModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content" style={{ height: "522px" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${props.video}`}
                      id="Iframe"
                      title="Movie Trailer"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      data-bs-dismiss="modal"
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="party-btn">
              <a className="btn" href={`/parties/new?movie_id=${props.id}`}>
                Create Viewing Party
              </a>
            </li>
          </ul>
          <div className="ui top attached tabular menu mb-3">
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
