import React from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import Header from "../Header/Header";


const MyList = ({data, films, comments}) => {
  return (
    <>
      <Header/>

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {
              data.map((card) => {
                return (
                  <Card key={card.id} item={card} films={films} comments={comments}/>
                );
              })
            }
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MyList.propTypes = {
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

export default MyList;
