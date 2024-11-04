import { useEffect, useState } from "react";
import Header from "../componentes/header.jsx";
import Promocoes from "../componentes/promocoes.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";
import Load from "../componentes/load.jsx";

import { produtoshome } from "./produtosHome.js";

export default function Home() {
	const [load, setLoad] = useState(true);

	useEffect(() => { setTimeout(() => setLoad(false), Math.floor(Math.random() * 16) * 100 + 1500) }, []);

	if (load) return (<Load />);

	return (
		<>
			<Header />
			<Promocoes />
			{produtoshome.map((produto, i) => { return (<Card key={i} id={i} imagem={produto.imagem} titulo={produto.titulo} texto={produto.texto}/>) })}
			<Footer />
		</>
	);
}