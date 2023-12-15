import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onChange }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<form onChange={onChange}>
				<label for="types">Sort Pigs     </label>
				<select name="types" id="type">
					<option value="all">All</option>
					<option value="true">Greased</option>
					<option value="false">Non-greased</option>
				</select>
			</form>
		</div>
	);
};

export default Nav;
