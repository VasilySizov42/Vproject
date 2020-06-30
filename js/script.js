'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMouvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};

//console.log(personalMouvieDB);

function rememberMyFilms() {
    /* for (let i = 0; i< 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', ''),
              rate = +prompt('На сколько оцените его?', '');
        if (film != null && rate != null && film != '' && rate != '' && film.length <= 50){
            personalMouvieDB.muvies[film] = rate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    } */
    /* let i = 0;
    while (i<2){
        const film = prompt('Один из последних просмотренных фильмов?', ''),
              rate = +prompt('На сколько оцените его?', '');
        if (film != null && rate != null && film != '' && rate != '' && film.length <= 50){
            personalMouvieDB.muvies[film] = rate;
            console.log('done');
            i++;
        } else {
            console.log('error');
            continue;
        }    
    } */
    let i = 0;
    do {
        const film = prompt('Один из последних просмотренных фильмов?', ''),
            rate = +prompt('На сколько оцените его?', '');
        if (film != null && rate != null && film != '' && rate != '' && film.length <= 50) {
            personalMouvieDB.muvies[film] = rate;
            console.log('done');
            i++;
        } else {
            console.log('error');
            continue;
        }
    } while (i < 2)
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMouvieDB.count < 10) {
        console.log('Посмотрено довольно мало фильмов');
    } else if (personalMouvieDB.count >= 10 && personalMouvieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMouvieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personalMouvieDB);
    } else {
        console.log('Данные закрыты для просмотра');
    }
}

showMyDB(personalMouvieDB.privat);

function writeYourGenres() {
    let genre;
    for (let i = 0; i < 3; i++) {
        genre = prompt(`Ваш любимый фильм под номером ${i + 1}`, '');
        if (genre != null && genre != '' && genre.length <= 50) {
            personalMouvieDB.genres[i] = genre;
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();