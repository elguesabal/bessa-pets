import { produtos } from "../produtos.js";
import { addRemmoveCarrinho, atualizarHeader, atualizarCarrinho } from "./card.jsx";

function carrinhoWhatsapp() {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
	let url = "https://wa.me/5521984025976?text=Olá, gostaria de mais informações desses produtos:";
	let subtotal = 0;

	if (!carrinho) {
		alert("Carrinho vazio!");
		return;
	}

	carrinho.forEach((produto) => {
		url += encodeURIComponent("\n\n") + produto + ": R$";
		for (let i = 0; i < produtos.length; i++) {
			if (produtos[i].titulo === produto) {
				url += produtos[i].preco.toFixed(2).replace('.', ',') + encodeURIComponent("\n");
				subtotal += produtos[i].preco;
				break;
			}
		}
		url += window.location.origin + "?produto=" + encodeURIComponent(encodeURIComponent(produto));
	});
	url += encodeURIComponent("\n\n") + "Clique aqui e volte a adicionar produtos ao seu carrinho:" + encodeURIComponent("\n") + encodeURIComponent(window.location.href);
	url += encodeURIComponent("\n\n") + "Subtotal: R$" + subtotal.toFixed(2).replace('.', ',');

	window.open(url, "_blank");
}

export function removeCarrinho(produto) {
	const ids = Array.from(document.getElementById("produtosPage").children).map(child => child.id).filter(id => id);

	ids.forEach((id) => {
		let numeroCard = id.match(/\d+$/)[0];

		if (produto === document.getElementById("produtoLabel" + numeroCard).textContent) {
			addRemmoveCarrinho("addCarrinho" + numeroCard, produto);
			atualizarHeader();
			atualizarCarrinho();
			return;
		}
	});
}

export function atualizarProdutosCarrinho(i, j) {
	return (
		<li className="list-group-item d-flex bg-light" key={i}>
			<a href={"/pesquisa?pesquisa=" + produtos[j].titulo} target="_blank" className="w-75">
				<div className="fw-bold" id={"tituloCarrinho" + i}>{produtos[j].titulo}</div>
				Valor: R${produtos[j].preco.toFixed(2).replace('.', ',')}
			</a>
			<div className="btn btn-outline-danger w-25 d-flex align-items-center justify-content-center" onClick={() => removeCarrinho(produtos[j].titulo)}><i className="bi bi-cart-x"></i></div>
		</li>
	);
}

export default function Carrinho() {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
	let subtotal = 0;

	return (
		<>
			<div id="carrinho" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
				<i className="bi bi-cart-check"></i>
				<span className="position-absolute top-0 start-25 translate-middle badge rounded-pill bg-danger" id="nProdutos">{(carrinho) ? carrinho.length : null}</span>
			</div>

			<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">Carrinho</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<ol className="list-group offcanvas-body" id="carrinhoListaProdutos">
					{(!carrinho) ? <></> : carrinho.map((produto, i) => {
						for (let j = 0; j < produtos.length; j++) {
							if (produto === produtos[j].titulo) {
								subtotal += produtos[j].preco;
								return (atualizarProdutosCarrinho(i, j));
							}
						}
					})}
				</ol>
				<div className="d-flex justify-content-between align-items-center p-3">
					<span id="carrinhoSubtotalProdutos">Subtotal: R${subtotal.toFixed(2).replace('.', ',')}</span>
					<div className="btn btn-outline-success" onClick={carrinhoWhatsapp}><i className="bi bi-whatsapp"></i></div>
				</div>
			</div>
		</>
	);
}