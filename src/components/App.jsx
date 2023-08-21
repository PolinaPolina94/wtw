import React from "react";
import MainPage from "./MainPage/Main";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import MyList from "./MyList/MyList";
import Film from "./Film/Film";
import AddReview from "./AddReview/AddReview";
import Player from "./Player/Player";
import NotFoundPage from "./NotFoundPage/NotFoundPage";


const App = ({data}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <MainPage data={data}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList/>
        </Route>
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>
        <Route exact path="/player/:id">
          <Player/>
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
  )
};
export default App;
