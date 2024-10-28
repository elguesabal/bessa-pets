import Header from "../componentes/header.jsx";
import Promocoes from "../componentes/promocoes.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";

export default function Home() {
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