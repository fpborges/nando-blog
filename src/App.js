import NavBar from "./NavBar";
import Home from "./Home";

function App() {
	// const title = "Welcome to the new blog";
	// const likes = 50;
	// const person = { name: "Mario", age: 30 };
	// const link = "http://www.google.com";
	// const randomNumber = Math.random();
	//jsx template
	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home />
			</div>
		</div>
	);
}

export default App;
