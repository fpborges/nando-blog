import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	// useState hook of react to create a state variable object
	const [blogs, setBlogs] = useState([
		{ title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
		{ title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
		{
			title: "Web dev top tips",
			body: "lorem ipsum...",
			author: "mario",
			id: 3,
		},
	]);
	const handleClick = () => {
		// Create a new array with the modified blog
		setBlogs(
			blogs.map((blog, index) => {
				if (blog.title.includes("party")) {
					return { ...blog, title: "something else" };
				}
				console.log(blog.title);
				console.log("index:", index);
				return blog;
			})
		);
	};

	const deleteBlogs = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		console.log(newBlogs);
		setBlogs(newBlogs);
	};

	const [name, setName] = useState("mario");

	//initial render and after every render
	useEffect(() => {
		console.log(name);
		// return () => {};
	}, [name]);
	// returning jsx template
	return (
		<div className="home">
			<h2>List of Blogs:</h2>
			<BlogList blogs={blogs} deleteBlogs={deleteBlogs} />
			{/* <BlogList
				blogs={blogs.filter((blog) => blog.author === "mario")}
				title="Mario's Blogs TEST"
			/> */}
			<button onClick={handleClick}>Click me</button>
			<button
				onClick={() => (name === "mario" ? setName("luigi") : setName("mario"))}
			>
				Change name
			</button>
			{name}
		</div>
	);
};

export default Home;
