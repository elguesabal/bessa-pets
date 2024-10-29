import { useEffect, useState } from "react";
import Header from "../componentes/header.jsx";
import Promocoes from "../componentes/promocoes.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";
import Load from "../componentes/load.jsx";

export default function Home() {
	const [load, setLoad] = useState(true);

	useEffect(() => { setTimeout(() => setLoad(false), Math.floor(Math.random() * 16) * 100 + 1500) }, []);

	if (load) return (<Load />);

	return (
		<>
			<Header />
			<Promocoes />
			<Card imagem="https://thumbs.dreamstime.com/b/o-lince-%C3%A1rtico-de-escandin%C3%A1via-140496069.jpg" titulo="primeiro card" texto="teste1"/>
			<Card imagem="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.jpg?w=1900&h=1267" titulo="segundo card" texto="teste2"/>
			<Footer />
		</>
	);
}