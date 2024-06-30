import React, { useEffect, useState } from "react";
import axios from "../../../Utils/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(fetchUrl);
				setMovies(response.data.results);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					const videoId = urlParams.get("v");
					setTrailerUrl(videoId);
				})
				.catch((error) => {
					console.error("Error fetching trailer:", error);
					setTrailerUrl(""); // Reset trailer URL on error
				});
		}
	};

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map((movie, index) => (
					<img
						key={index}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>

			{/* Conditional rendering of YouTube trailer */}
			{trailerUrl && (
				<div className="row__trailer">
					<YouTube videoId={trailerUrl} opts={opts} />
				</div>
			)}
		</div>
	);
};

export default Row;
