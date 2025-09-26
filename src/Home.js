import { useState } from "react";
const Home = () => {
	// let name = "Fernando";

	const [name, setName] = useState("Fernando");
	const [age, setAge] = useState(25);
	const randomClick = () => {
		setName("Borges");
		setAge(40);
		console.log("hello");
	};

	return (
		<div className="home">
			<h2>Home Page</h2>
			<p>
				Welcome to the home page {name} and {age} years old
			</p>
			<button onClick={randomClick}>Click me</button>
		</div>
	);
};

export default Home;
