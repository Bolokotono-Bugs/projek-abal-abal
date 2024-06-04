/*

console.warn("%cWELLcome to App Abal-Abal", "color: red; font-size: 24px;");

const movies = [
    {
        title: "The Matrix",
        year: 1999,
        descripsion: "ths is the good action movies all of time",
        author: "lambada",
    },
    {
        title: "The conjjuring 2",
        year: 2016,
        descripsion: "this is the best horror movies all of time",
        author: "limbad",
    },
    {
        title: "the scarry movie",
        year: 2000,
        descripsion: "this is the best comedy movies all of time",
        author: "limva",
    }

];

console.table(movies);

const user = {
    username: "qitmir",
    favorite: "the conjuring 2",
};
console.group("%cLOG FOR MOVIES", "color: green; font-size: 24px;");
const movies1 = movies[0];
const movies2 = movies[1];
const movies3 = movies[2];
console.groupEnd();

console.table(movies1);

console.log({movies2});

console.log({movies3});

 
// const all = [user, movies1, movies2, movies3];
// console.table(all);

*/






const filmHoror = document.getElementsByTagName("article")[0];
const filmKomedi = document.getElementsByTagName("article")[1];
const filmAction = document.getElementsByTagName("article")[2];

console.group("%cLOG FOR ARTICLE", "color: green; font-size: 24px;");
console.info(filmHoror);
console.info(filmKomedi);
console.info(filmAction);
console.groupEnd();

function articleEffect() {
    filmKomedi.style.backgroundColor = "green";
    filmKomedi.style.color = "red";
    filmKomedi.style.scale = "1.5";
    filmKomedi.style.transition = "500ms";

    filmHoror.style.scale = "0.8";
    filmHoror.style.transition = "1500ms";

    filmAction.style.scale = "0.8";
    filmAction.style.transition = "1500ms";
}

filmKomedi.addEventListener("click", articleEffect);


function setNewElement() {
    const inputNamaLengkap = prompt("masukan username");
    namaLengkap.textContent = inputNamaLengkap;

    const inputFilmHoror = prompt("masukan film horor");
    filmHoror.textContent = inputFilmHoror;

    const inputDeskripsi1 = prompt("masukan deskripsi film horor");
    deskripsi1.textContent = inputDeskripsi1;

    const inputFilmKomedi = prompt("masukan film komedi");
    filmKomedi.textContent = inputFilmKomedi;

    const inputDeskripsi2 = prompt("masukan deskripsi film komedi");
    deskripsi2.textContent = inputDeskripsi2;

    const inputFilmAction = prompt("masukan film action");
    filmAction.textContent = inputFilmAction;

    const inputDeskripsi3 = prompt("masukan deskripsi film action");
    deskripsi3.textContent = inputDeskripsi3;
}
