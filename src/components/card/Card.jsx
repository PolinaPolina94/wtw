import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const Card = ({item = {}, films, comments, onMouseEnter, onMouseLeave}) => {
  const {backgroundImage, name, id} = item;
  const handleMouseEnter = () => {
    onMouseEnter(item);
  };
  const handleMouseLeave = () => {
    onMouseLeave();
  };
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={backgroundImage} alt={name} width="280" height="175" />
        <div>{films.map((el) => el.rating)}</div>
        <div> {comments.map((el)=> el.id)}</div>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};


Card.propTypes = {
  item: PropTypes.object.isRequired,
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
  ),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default Card;
