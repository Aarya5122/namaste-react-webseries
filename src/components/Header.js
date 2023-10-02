import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
	return (
		<header>
			<div className="logo-container"></div>
			<nav>
				<ul>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<NavLink to={"/menu"}>Menu</NavLink>
					</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div>
				<div>cart</div>
				<Button value="GET STARTED" />
			</div>
		</header>
	);
}

export default Header;
