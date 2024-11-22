import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./componentes/load.css";
import "./componentes/carrinho.css";
import "./404/404.css";

import Home from './home/home.jsx';
import Pesquisa from "./pesquisa/pesquisa.jsx";
import Felinos from "./felinos/felinos.jsx";
import PageNotFound from "./404/404.jsx";

// import Teste from "./teste/teste.jsx";
// import Teste2 from "./teste/teste2.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/pesquisa" element={<Pesquisa />}/>
			<Route path="/felinos" element={<Felinos />}/>

			<Route path="*" element={<PageNotFound />}/>

			{/* <Route path="/teste" element={<Teste />}/>
			<Route path="/teste2" element={<Teste2 />}/> */}
		</Routes>
	</BrowserRouter>
);