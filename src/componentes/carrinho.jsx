import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { produtos } from "../produtos.js";

function carrinhoWhatsapp() {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
	let url = "https://wa.me/5521984025976?text=Olá, gostaria de mais informações desses produtos:";
	let subtotal = 0;

	if (!carrinho) {
		alert("Carrinho vazio!");
		return ;
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

export default function Carrinho() {
// 	const url = useLocation();

// 	function teste() {
// 		// console.log("teste 1:", url.search)
// 		// let teste = useLocation()
// 		// console.log("teste 2:", teste.search)
// console.log("aaaaaaa", url.search)
// 	}

// 	useEffect(() => {
// 		// let subtotal = 0;
// console.log(url)

// 	}, [url.search]);


	// const [url, setUrl] = useState(window.location.search);
// console.log(window.location.search)

// 	useEffect(() => {
// console.log("aaaaaaa",)
// 	}, [window.location.search]);



// const location = useLocation();

// useEffect(() => {
//   console.log("A URL mudou:", location.search);
//   // Aqui você pode executar ações sempre que os parâmetros da URL mudarem
// }, [location.search]);

	return (
		<>
			<div id="carrinho" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
				<i className="bi bi-cart-check"></i>
			</div>

			<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">Carrinho</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">

					<div className="list-group">
						<a href="#" className="list-group-item list-group-item-action">
							<h5 className="mb-1">List group item heading</h5>
							<small className="text-body-secondary">And some muted small print.</small>
						</a>
					</div>

					<div className="list-group">
						<a href="#" className="list-group-item list-group-item-action">
							<h5 className="mb-1">List group item heading</h5>
							<small className="text-body-secondary">And some muted small print.</small>
						</a>
					</div>

					{/* {url.search} */}

				</div>
				<div className="d-flex justify-content-between align-items-center p-3">
					<span>Subtotal: R$0,00</span>
					<div className="btn btn-outline-success" onClick={carrinhoWhatsapp}><i className="bi bi-whatsapp"></i></div>
				</div>
			</div>
		</>
	);
}