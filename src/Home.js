import { useState } from "react";
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
	return (
		<div className="home">
			<h2>List of Blogs:</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h3>{blog.title}</h3>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
