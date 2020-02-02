const results = document.getElementById('results');
const searchForm = document.getElementById('search-form');
const inputSearch = document.getElementById('search');

const fetchMovies = (searchContent) => {
  results.innerHTML = "";

  fetch(`http://www.omdbapi.com/?s=${searchContent}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const movieHTML = `<li class="list-inline-item">
          <img src="${movie.Poster}" alt="">
          <p>${movie.Title}</p>
        </li>`;

        results.insertAdjacentHTML('beforeend', movieHTML);
      });
    });
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // We need this because form submission has a default action in browsers

  fetchMovies(inputSearch.value);
});
