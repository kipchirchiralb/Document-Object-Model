let myMoviesList = [];

function renderUI() {
  const myListElement = document.getElementById("my-list");
  myListElement.innerHTML = "";

  myMoviesList.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.name;

    const movieCategory = document.createElement("p");
    movieCategory.textContent = movie.category;

    const releaseDateSpan = document.createElement("span");
    releaseDateSpan.textContent = movie.releaseDate;

    const watchedBtn = document.createElement("button");
    watchedBtn.textContent = movie.watched ? "Watched" : "Mark as Watched";
    watchedBtn.classList.add(movie.watched ? "watched" : "not-watched");
    watchedBtn.disabled = movie.watched;
    watchedBtn.addEventListener("click", () => markMovieAsWatched(movie.name));

    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieCategory);
    movieDiv.appendChild(releaseDateSpan);
    movieDiv.appendChild(watchedBtn);

    myListElement.appendChild(movieDiv);
  });
}

function markMovieAsWatched(movieName) {
  const movieToUpdate = myMoviesList.find((movie) => movie.name === movieName);
  if (movieToUpdate) {
    movieToUpdate.watched = true;
    updateLocalStorage(myMoviesList);
    renderUI();
  }
}

function addMovieToList(name, category, releaseDate) {
  myMoviesList.push({
    name,
    category,
    releaseDate,
    watched: false,
  });

  updateLocalStorage(myMoviesList);
  renderUI();
}

function updateLocalStorage(newArray) {
  localStorage.setItem("myMoviesList", JSON.stringify(newArray));
}

document.addEventListener("DOMContentLoaded", () => {
  const storedMovies = JSON.parse(localStorage.getItem("myMoviesList"));
  if (storedMovies) {
    myMoviesList = storedMovies;
    renderUI();
  }

  const addMovieForm = document.querySelector("form");
  addMovieForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const categoryInput = document.getElementById("category").value;
    const releaseInput = document.getElementById("release").value;

    if (!nameInput || !releaseInput) {
      document.getElementById("error").textContent =
        "Movie name and release date must be provided";
      return;
    }

    addMovieToList(nameInput, categoryInput, releaseInput);

    document.getElementById("error").textContent = "";
    addMovieForm.reset();
  });
});
