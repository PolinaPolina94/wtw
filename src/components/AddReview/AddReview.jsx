import React, {useState} from "react";
import PropTypes from 'prop-types';
// import Header from "../Header/Header";
import {useParams} from "react-router-dom";


const AddReview = ({films}) => {
  const filmParams = useParams();
  const filmId = Number(filmParams.id);
  const currentFilm = films.filter((film)=> filmId === film.id)[0];

  const [text, setText] = useState(``);

  const saveText = function (e) {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <>
      {/* <Header/> */}
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{currentFilm.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>

                <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
                <label className="rating__label" htmlFor="star-6">Rating 6</label>

                <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
                <label className="rating__label" htmlFor="star-7">Rating 7</label>

                <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked />
                <label className="rating__label" htmlFor="star-8">Rating 8</label>

                <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
                <label className="rating__label" htmlFor="star-9">Rating 9</label>

                <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
                <label className="rating__label" htmlFor="star-10">Rating 10</label>
              </div>
            </div>

            <div className="add-review__text">
              <form>
                <textarea onChange={(e)=>saveText(e)} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">{text}</textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>
              </form>
            </div>
          </form>
        </div>

      </section>
    </>
  );
};

AddReview.propTypes = {
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

export default AddReview;
