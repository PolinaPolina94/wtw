import React from "react";
// import Header from "../Header/Header";
import PropTypes from 'prop-types';
import FilmItem from "./FilmItem";
import {useParams} from "react-router-dom";
import PageContent from "./PageContent";
// import {useParams} from "react-router-dom";


const FilmPage = ({films}) => {
  const filmParams = useParams();
  const filmId = Number(filmParams.id);
  const currentFilm = films.filter((film)=> filmId === film.id);
  // console.log(currentFilm[0]);
  return (
    <>
      <FilmItem key={currentFilm[0].id} film={currentFilm[0]} filmId={filmId}/>
      <PageContent/>
    </>
  );
};

FilmPage.propTypes = {
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

export default FilmPage;
