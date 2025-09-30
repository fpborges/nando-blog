import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	// useState hook of react to create a state variable object

	const {
		data: blogs,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			<h2>List of Blogs:</h2>
			{blogs && <BlogList blogs={blogs} title="All Blogs!" />}
		</div>
	);
};

export default Home;
