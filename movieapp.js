const myMoviesList = [
  {
    name: "Breaking Bad",
    category: "Series",
    releaseDate: "12/12/2013",
    watched: true,
  },
  {
    name: "Parasite",
    category: "Movie",
    releaseDate: "12/2/2023",
    watched: false,
  },
  {
    name: "Mad Max",
    category: "Movie",
    releaseDate: "2/5/2011",
    watched: true,
  },
  {
    name: "Game of Thrones",
    category: "Series",
    releaseDate: "18/11/2016",
    watched: false,
  },
];
// updateLocalStorage(myMoviesList); // one time ---seeding a database
renderUI();

const addMovieForm = document.querySelector("form");

addMovieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // get data from the inputs / select
  const nameInput = document.getElementById("name").value;
  const categoryInput = document.getElementById("category").value;
  const releaseInput = document.getElementById("release").value;

  if (nameInput.length == 0 || releaseInput.length == 0) {
    document.getElementById("error").textContent =
      "Movie name and release date must be provided";
    return;
  } else {
    document.getElementById("error").textContent = "";
  }

  // addMovieToList(nameInput, categoryInput, releaseInput);
  let currentMovieList = JSON.parse(localStorage.getItem("mymovieList"));
  currentMovieList.push({
    name: nameInput,
    category: categoryInput,
    releaseDate: releaseInput,
    watched: false,
  });
  updateLocalStorage(currentMovieList);
  renderUI();
  // add the movie div to the list
});

function addMovieToList(name, category, releasedate, watchStatus) {
  // create a new movie div
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  const movieTitle = document.createElement("h2");
  movieTitle.textContent = name;
  const movieCategory = document.createElement("p");
  movieCategory.textContent = category;
  const releaseDateSpan = document.createElement("span");
  releaseDateSpan.textContent = releasedate;
  const watchedBtn = document.createElement("button");
  if (watchStatus) {
    watchedBtn.textContent = "watched";
    watchedBtn.classList.add("watched");
    watchedBtn.disabled = true;
  } else {
    watchedBtn.textContent = "mark as watched";
    watchedBtn.classList.add("not-watched");
    watchedBtn.setAttribute("data-movie-name", name);
    // data attributes
    watchedBtn.addEventListener("click", (event) => {
      markMovieAsWatched(event);
    });
  }
  movieDiv.append(movieTitle);
  movieDiv.append(movieCategory);
  movieDiv.append(releaseDateSpan);
  movieDiv.append(watchedBtn);
  document.getElementById("my-list").append(movieDiv);
  //put the content from the form into the movie div
}

function markMovieAsWatched(event) {
  let currentMovieList = JSON.parse(localStorage.getItem("mymovieList"));
  let clickedMovie = currentMovieList.find(
    (movie) => movie.name === event.target.getAttribute("data-movie-name")
  );
  clickedMovie.watched = true;
  updateLocalStorage(currentMovieList);
  renderUI();
  // update that the movie whose button was to watched = true
  // rerender the list/movies
}
function renderUI() {
  document.getElementById("my-list").innerHTML = "";
  let updatedList = JSON.parse(localStorage.getItem("mymovieList"));
  for (movie of updatedList) {
    addMovieToList(
      movie.name,
      movie.category,
      movie.releaseDate,
      movie.watched
    );
  }
}

function updateLocalStorage(newArray) {
  localStorage.setItem("mymovieList", JSON.stringify(newArray));
}

// passing by value vs passing by reference -- how varaible are stored in memory ---

// addMovieToList("Breaking bad", "series", "2013/4/5", true);
// addMovieToList("Agnry men", "movie", "2020/10/5", fasle);
// addMovieToList("The Office", "series", "2023/4/22", fasle);

// implement mark as watched feature

// window.addEventListener("load", () => {
//   console.log("Window / page finished loading");
// });
//   window.scrollTo(0, 0);

// localStorage.setItem(
//   "usermail",
//   JSON.stringify(["albert@eldoub.co.ke", "jhfsjnfj"])
// );
// localStorage.setItem("usermai", "purity@eldoub.co.ke");
// console.log(JSON.parse(localStorage.getItem("usermail")));
// // localStorage.clear();
