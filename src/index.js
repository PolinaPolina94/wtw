import React from "react";
import ReactDOM from 'react-dom';
import {data} from "./components/mock-data";
import App from "./components/App";
import {films} from "./mocks/films";
import {comments} from "./mocks/reviews";
import PropTypes from 'prop-types';


ReactDOM.render(
    <App data={data} films={films} comments={comments}/>,
    document.getElementById(`root`)
);

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
  ),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired,
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,

      })
  ),
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
  )
};
