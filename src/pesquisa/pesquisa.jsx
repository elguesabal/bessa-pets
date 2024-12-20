import { produtos } from "../produtos.js";
import Carrinho from "../componentes/carrinho.jsx";
import Header from "../componentes/header.jsx";
import Card from "../componentes/card.jsx";
import Footer from "../componentes/footer.jsx";

export default function Pesquisa() {
	const pesquisa = new URLSearchParams(new URL(window.location.href).search).get("pesquisa");

	if (!pesquisa || produtos.find((produto) => produto.titulo.toLocaleLowerCase().match(pesquisa.toLocaleLowerCase())) == undefined) { 
		return (
			<>
				<Header />
				<h1 className="text-center mt-3">Sua pesquisa nao encontrou nenhum resultado</h1>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Carrinho />
			<Header />
			<div className="container">
				<div className="row d-flex justify-content-center" id="produtosPage">
					{produtos.map((produto, i) => {
						if (produto.titulo.toLocaleLowerCase().match(pesquisa.toLocaleLowerCase())) {
							return (<Card key={i} id={i} imagens={produto.imagens} titulo={produto.titulo} texto={produto.texto} preco={produto.preco}/>);
						}
					})}
				</div>
			</div>
			<Footer />
		</>
	);
}