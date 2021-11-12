import React from "react";
import "./TrailerModal.styles";

const TrailerModal = (props) => {
  return (
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
        </div>
      </div>
    </li>
  );
};

export default TrailerModal;
