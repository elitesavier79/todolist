import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'; 
import { ThemeProvider } from "emotion-theming";

//import Todolist from "./pages/todolist";
import Todolist from "./pages/todolistClass";
import About from "./pages/about";


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

//export default function App() {
  //return (
  	//<ThemeProvider theme={theme}>
		//<Todolist />;
  	//</ThemeProvider>
  	//); 
  
//}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Todolist} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
