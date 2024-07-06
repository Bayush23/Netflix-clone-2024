const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // Netflix Originals
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, // Top rated movies
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // Action movies
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Comedy movies
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Horror movies
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Romance movies
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Documentaries
	fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`, // Popular TV shows
};

export default requests;
