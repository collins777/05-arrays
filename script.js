// Create arrays for movie titles in each genre
const comedyMovies = ["Superbad", "The Hangover", "Step Brothers", "Bridesmaids"];
const actionMovies = ["Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight"];
const dramaMovies = ["The Shawshank Redemption", "Forrest Gump", "The Godfather", "Fight Club"];
const sciFiMovies = ["Inception", "The Matrix", "Interstellar", "Blade Runner 2049"];

// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Initialize an empty array to hold the recommended movies
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    console.log("You selected 'Comedy'");
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    console.log("You selected 'Action'");
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    console.log("You selected 'Drama'");
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    console.log("You selected 'Sci-Fi'");
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
