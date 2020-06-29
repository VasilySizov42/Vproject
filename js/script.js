const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMouvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};
const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
      firstRate = +prompt('На сколько оцените его?', ''),
      secFilm = prompt('Один из последних просмотренных фильмов?', '');
      secRate = +prompt('На сколько оцените его?', '');
personalMouvieDB.muvies[firstFilm] = firstRate;
personalMouvieDB.muvies[secFilm] = secRate;

console.log(personalMouvieDB);