import React from "react";
import PropTypes from 'prop-types';


const Card = ({item = {}}) => {
  const {img, name, alt, href} = item;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={img} alt={alt} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={href}>{name}</a>
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
  )
};

export default Card;
