import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1>My New Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" className="create_blog">
					New Blog
				</Link>
			</div>
		</nav>
	);
};
export default NavBar;
