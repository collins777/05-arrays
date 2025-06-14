// set up event listender for when the user selects a genre
document.getElementById("genre").addEventListener("change", function () {
  // get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // variable to hold the list of movies
  let movieList = [];

  // add movies to the movieList based on the selected genre
  if (selectedGenre === "Action") {
    movieList = ["Mad Max: Fury Road", "John Wick", "Die Hard"];
  } else if (selectedGenre === "Comedy") {
    movieList = ["The Hangover", "Superbad", "Step Brothers"];
  } else if (selectedGenre === "Drama") {
    movieList = ["The Shawshank Redemption", "Forrest Gump", "Fight Club"];
  } else if (selectedGenre === "Sci-Fi") {
    movieList = ["Inception", "The Matrix", "Interstellar"];
  }

  // display the list of movies on the page
  document.getElementById(
    "movieRecommendations"
  ).innerText = `Enjoy: ${movieList.join(", ")}`;
});
