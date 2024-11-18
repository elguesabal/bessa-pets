import { Modal } from "bootstrap";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { produtos } from "../produtos.js";

function addRemmoveCarrinho(id, titulo) {
	const element = document.getElementById(id);
	let url = new URL(window.location.href);
	let carrinho = [];

	if (element.classList.contains("btn-outline-success")) {
		element.classList.remove("btn-outline-success");
		element.classList.add("btn-outline-danger");
		element.classList.remove("bi-cart-plus");
		element.classList.add("bi-cart-x");

		carrinho = decodeURIComponent(url.searchParams.get("carrinho"));
		if (!carrinho || carrinho == "null") {
			url.searchParams.set("carrinho", encodeURIComponent(JSON.stringify([titulo])));
		} else if (carrinho && carrinho != "null") {
			carrinho = JSON.parse(carrinho);
			carrinho.push(titulo);
			url.searchParams.set("carrinho", encodeURIComponent(JSON.stringify(carrinho)));
		}
	} else if (element.classList.contains("btn-outline-danger")) {
		element.classList.remove("btn-outline-danger");
		element.classList.add("btn-outline-success");
		element.classList.remove("bi-cart-x");
		element.classList.add("bi-cart-plus");

		carrinho = JSON.parse(decodeURIComponent(url.searchParams.get("carrinho")));
		carrinho.splice(carrinho.indexOf(titulo), 1);
		if (carrinho.length) {
			url.searchParams.set("carrinho", encodeURIComponent(JSON.stringify(carrinho)));
		} else {
			url.searchParams.delete("carrinho");
		}
	}

	history.pushState({}, '', url.toString());
}

function classCarrinho(titulo) {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));

	if (!carrinho) return ("btn btn-outline-success bi bi-cart-plus");
	return ("btn " + ((carrinho.includes(titulo)) ? "btn-outline-danger" : "btn-outline-success") + " bi " + ((carrinho.includes(titulo)) ? "bi-cart-x" : "bi-cart-plus"))
}

function atualizarHeader() {
	document.getElementById("home").href = window.location.origin + window.location.search
	// document.getElementById("caes").href = window.location.origin + "/caes" + window.location.search
	document.getElementById("felinos").href = window.location.origin + "/felinos" + window.location.search
	// document.getElementById("peixes").href = window.location.origin + "/peixes" + window.location.search
	// document.getElementById("roedores").href = window.location.origin + "/roedores" + window.location.search
}

let carrinhListaProdutos = null;
function atualizarCarrinho() {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
	let subtotal = 0;

	if (!carrinhListaProdutos) carrinhListaProdutos = createRoot(document.getElementById("carrinhoListaProdutos"));
	if (!carrinho) {
		carrinhListaProdutos.render(<></>);
		document.getElementById("carrinhoSubtotalProdutos").innerText = "Subtotal: R$0,00";
		return ;
	}
	carrinhListaProdutos.render(
		<>
			{carrinho.map((produto, i) => {
				for (let j = 0; j < produtos.length; j++) {
					if (produto === produtos[j].titulo) {
						subtotal += produtos[j].preco;
						return (
							<li className="list-group-item d-flex bg-light" key={i}>
								<a href={"/pesquisa?pesquisa=" + produtos[j].titulo} target="_blank" className="w-75">
									<div className="fw-bold">{produtos[j].titulo}</div>
									Valor: R${produtos[j].preco.toFixed(2).replace('.', ',')}
								</a>
								<div className="btn btn-outline-danger w-25 d-flex align-items-center justify-content-center" onClick={() => console.log("ainda fznd nada (carrinho gerado pelo botao do card))")}><i className="bi bi-cart-x"></i></div>
							</li>
						);
					}
				}
			})}
		</>
	);
	document.getElementById("carrinhoSubtotalProdutos").innerText = "Subtotal: R$" + subtotal.toFixed(2).replace('.', ',');
}

export default function Card({ id, imagem, titulo, texto, preco }) {
	useEffect(() => {
		// const url = new URL(window.location.href);
		// const params = new URLSearchParams(url.search);
		// if (params.get("produto") == titulo) {
		// 	const modal = new Modal(document.getElementById("produto" + id));
		// 	modal.show();
		// }

		// const params = new URLSearchParams(new URL(window.location.href).search);
		// if (params.get("produto") == titulo) {
		// 	new Modal(document.getElementById("produto" + id)).show();
		// }

		if (new URLSearchParams(new URL(window.location.href).search).get("produto") == titulo) new Modal(document.getElementById("produto" + id)).show();
	}, []);

	return (
		<>
			<div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center"> {/* ADICIONAR UM ID AKI PARA SER CAPTURADO POR removeCarrinho() */}
				<div className="card mt-3" style={{ width: "18rem" }}>
					<div className="card-header text-center">{titulo}</div>
					<img src={imagem} className="card-img-top" alt="Imagem do produto" />
					<div className="card-body d-flex justify-content-between align-items-center">
						<span className="text-left">R${preco.toFixed(2).replace('.', ',')}</span>
						<i className={classCarrinho(titulo)} id={"addCarrinho" + id} onClick={() => { addRemmoveCarrinho("addCarrinho" + id, titulo), atualizarHeader(), atualizarCarrinho()}}></i>
						<a href="#" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={"#produto" + id}>Ver detalhes</a>
					</div>
				</div>
			</div>

			<div className="modal fade" id={"produto" + id} tabIndex="-1" aria-labelledby="produtoLabel" aria-hidden="true"> {/* O ID id={"produto" + id} DESSA TAG ESTA SENDO LISTADO EM removeCarrinho() */}
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id={"produtoLabel" + id}>{titulo}</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">{texto}</div>
						<div className="modal-footer d-flex justify-content-between">
							<span>R${preco.toFixed(2).replace('.', ',')}</span>
							<a href={"https://wa.me/5521984025976?text=" + "Olá, gostaria de mais informações de "+ titulo + "%0A%0A" + window.location.href + "?produto=" + encodeURIComponent(encodeURIComponent(titulo))} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link whatsapp</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}