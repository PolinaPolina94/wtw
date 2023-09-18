const card = document.querySelector(`.small-movie-card__image`);

export const showId = () => {
  card.addEventListener(`click`, function () {
    console.log(`card was clicked`);
  });
};
