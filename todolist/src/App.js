import React from 'react';
import './App.css'; 
import { ThemeProvider } from "emotion-theming";

//import Todolist from "./pages/todolist";
import Todolist from "./pages/todolistClass";


const theme = {
	color: {
		primary: {
			black: "#484848",
			red: "#e06262",
			blue: "#0779e4"
		}
	},

	background: {
		color: {
			primary: "#f2eecb"
		}
	}
};

export default function App() {
  return (
  	<ThemeProvider theme={theme}>
		<Todolist />;
  	</ThemeProvider>
  	); 
  
}

