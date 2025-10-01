import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, deleteBlogs }) => {
	return (
		<div className="blog-list">
			<h3>{title}</h3>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h3>{blog.title}</h3>
						<p>Written by {blog.author}</p>
					</Link>
					{/* <button onClick={() => deleteBlogs(blog.id)}>Delete blog</button> */}
				</div>
			))}
		</div>
	);
};

export default BlogList;
