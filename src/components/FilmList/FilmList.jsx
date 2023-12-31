/* eslint-disable no-console */
import React, {useState} from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const FilmList = ({films, comments}) => {
  const [activeCard, setActiveCard] = useState(null);
  const handleMouseEnter = (film) => {
    setActiveCard(film);
  };
  const handleMouseLeave = () => {
    setActiveCard(null);
  };
  console.log(activeCard);
  return (
    <div className="catalog__movies-list">
      {films.map((card) => {
        return (
          <Card key={card.id} item={card} films={films} comments={comments} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        );
      })
      }
    </div>
  );
};

FilmList.propTypes = {
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

export default FilmList;
