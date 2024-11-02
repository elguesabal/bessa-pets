import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./componentes/load.css";

import Home from './home/home.jsx';
import Felinos from "./felinos/felinos.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/felinos" element={<Felinos />}/>
		</Routes>
	</BrowserRouter>
);