import React, { useState, useEffect } from "react";
// import axios from "../../Utils/axios";
import "./banner.css";

const Banner = () => {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const fetchBannerData = async () => {
			try {
				
				// const response = await axios.get("/request.FetchNetflixoriginals");
				const randomMovie =
					response.data.results[
						Math.floor(Math.random() * response.data.results.length)
					];
				setMovie(randomMovie);
			} catch (error) {
				console.error("Error fetching banner data:", error);
			}
		};

		fetchBannerData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
