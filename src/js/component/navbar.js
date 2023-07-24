import React from "react";
import { Link } from "react-router-dom";
import { Usuarios } from "../views/Usuarios";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<div className="btn-group" role="group" aria-label="Basic outlined example">

				<Link to="/usuarios">
				<button type="button" className="btn btn-outline-primary">Usuarios</button>
				</Link>

				<Link to="/post">
				<button type="button" className="btn btn-outline-primary">Posts</button>
				</Link>

			</div>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
