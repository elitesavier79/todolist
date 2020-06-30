import React from "react";
import Paper from "../components/paper/paper";
import Container from "../layout/container";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<Paper>
		 <Container />
		 <h1> This is About Paper</h1>
		 <Link to="/"> Kembali ke Home</Link>
		</Paper>

	);
};

export default About;