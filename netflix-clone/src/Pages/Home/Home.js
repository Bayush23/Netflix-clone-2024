import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/banner";
// import Rowlist from "../../Components/Rows/Row";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			{/* <Rowlist /> */}
			<Footer />
		</div>
	);
};

export default Home;
