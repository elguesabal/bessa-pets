import { useEffect, useState } from "react";
import Load from "../componentes/load.jsx";
import Carrinho from "../componentes/carrinho.jsx";
import Header from "../componentes/header.jsx";
import Promocoes from "../componentes/promocoes.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";
import { produtos } from "../produtos.js";

export default function Home() {
	const [load, setLoad] = useState(true);

	useEffect(() => { setTimeout(() => setLoad(false), Math.floor(Math.random() * 16) * 100 + 1500) }, []);

	if (load) return (<Load />);

	return (
		<>
			<Carrinho />
			<Header />
			<Promocoes />
			<div className="container">
				<div className="row d-flex justify-content-center" id="produtosPage">
					{produtos.map((produto, i) => { if (produto.home == true) return (<Card key={i} id={i} imagens={produto.imagens} titulo={produto.titulo} texto={produto.texto} preco={produto.preco}/>) })}
				</div>
			</div>
			<Footer />
		</>
	);
}