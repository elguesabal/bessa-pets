import { produtos } from "../produtos.js";

// function carrinho() { // FOI TRANFERIDO PARA UM BOTAO LATERAL
// 	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
// 	let url = "https://wa.me/5521984025976?text=Olá, gostaria de mais informações desses produtos:";
// 	let subtotal = 0;

// 	if (!carrinho) {
// 		alert("Carrinho vazio!");
// 		return ;
// 	}

// 	carrinho.forEach((produto) => {
// 		url += encodeURIComponent("\n\n") + produto + ": R$";
// 		for (let i = 0; i < produtos.length; i++) {
// 			if (produtos[i].titulo === produto) {
// 				url += produtos[i].preco.toFixed(2).replace('.', ',') + encodeURIComponent("\n");
// 				subtotal += produtos[i].preco;
// 				break;
// 			}
// 		}
// 		url += window.location.origin + "?produto=" + encodeURIComponent(encodeURIComponent(produto));
// 	});
// 	url += encodeURIComponent("\n\n") + "Clique aqui e volte a adicionar produtos ao seu carrinho:" + encodeURIComponent("\n") + encodeURIComponent(window.location.href);
// 	url += encodeURIComponent("\n\n") + "Subtotal: R$" + subtotal.toFixed(2).replace('.', ',');

// 	window.open(url, "_blank");
// }

function pesquisa(event) {
	event.preventDefault();
	if (!event.target.elements.pesquisa.value) return ;

	let url = new URLSearchParams(new URL(window.location.href));
	const carrinho = new URLSearchParams(new URL(window.location.href).search).get("carrinho");

	url.set("pesquisa", event.target.elements.pesquisa.value);
	(carrinho) ? url.set("carrinho", carrinho) : "";
	window.location.href = window.location.origin + "/pesquisa?" + url.toString();
}

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary"> {/* ACHO Q POR Z INDEX NO HEADER PODE TER CONFLITO  COM ALGUMAS COISAS NO FUTURO (position-fixed top-0 z-1 w-100) */} {/* DESATIVA POR ENQUANTO */}
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Bessa pets</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" id="home" aria-current="page" href="/">Pagina inicial</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Cães</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id="felinos" aria-current="page" href="/felinos">Felinos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Peixes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Roedores</a>
						</li>
					</ul>
					<form className="d-flex" onSubmit={pesquisa}> {/* action="/pesquisa" method="get" */}
						{/* <i className="btn btn-outline-success bi bi-cart-check me-3" onClick={carrinho}></i> */}
						<input className="form-control me-2" placeholder="Pesquisar" name="pesquisa"/>
						<button className="btn btn-outline-success" type="submit">Pesquisar</button>
					</form>
				</div>
			</div>
		</nav>
	);
}