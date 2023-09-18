import React from "react";
import MainPage from "./MainPage/Main";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import MyList from "./MyList/MyList";
// import Film from "./Film/Film";
import AddReview from "./AddReview/AddReview";
import Player from "./Player/Player";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import FilmPage from "./Film/FilmPage";


const App = ({data, films, comments}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <MainPage data={data} films={films} comments={comments}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList data={data} films={films} comments={comments}/>
        </Route>
        <Route exact path="/films/:id">
          <FilmPage data={data} films={films}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview data={data} films={films} comments={comments}/>
        </Route>
        <Route exact path="/player/:id">
          <Player data={data} films={films} comments={comments}/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// Main /
// Sign In /login
// MyList /mylist
// Film /films/:id
// Add Review /films/:id/review
// Player /player/:id

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
export default App;
