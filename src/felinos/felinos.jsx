import { useState, useEffect } from "react";
import Load from "../componentes/load.jsx";
import Carrinho from "../componentes/carrinho.jsx";
import Header from "../componentes/header.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";

import { produtos } from "../produtos.js";

export default function Felinos() {
	const [load, setLoad] = useState(true);

	useEffect(() => { setTimeout(() => setLoad(false), Math.floor(Math.random() * 16) * 100 + 1500) }, []);

	if (load) return (<Load />);
	return (
		<>
			<Carrinho />
			<Header />
			<div className="container">
				<div className="row d-flex justify-content-center" id="produtosPage">
					{produtos.map((produto, i) => { if (produto.secao === "felinos") return (<Card key={i} id={i} imagem={produto.imagem} titulo={produto.titulo} texto={produto.texto} preco={produto.preco}/>) })}
				</div>
			</div>
			<Footer />
		</>
	);
}