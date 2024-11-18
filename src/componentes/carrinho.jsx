import { produtos } from "../produtos.js";

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

function removeCarrinho(produto) {
    const ids = Array.from(document.getElementById("produtosPage").children).map(child => child.id).filter(id => id);

    // console.log("IDs dos filhos diretos:", ids);
	// console.log("teste:", document.getElementById("tituloCarrinho0").textContent)
	// console.log("aaaaa:", document.getElementById("produto0").firstChild.firstChild.firstChild.firstChild.textContent);

	// console.log("testando:", "10".match(/\d+$/)[0])

	ids.forEach((id) => {
		// console.log("produto:", document.getElementById("produto" + i).firstChild.firstChild.firstChild.firstChild.textContent);

		let numeroCard = id.match(/\d+$/)[0];

		// console.log(document.getElementById(id).firstChild.firstChild.firstChild.firstChild.textContent)
		// console.log(document.getElementById("produtoLabel" + numeroCard).textContent)
		// console.log(document.getElementById(id))
		// console.log(id.match(/\d+$/)[0])

		if (produto === document.getElementById("produtoLabel" + numeroCard).textContent) {
			// console.log("tem q mudar o card:", id)
			// document.getElementById(id).classList.remove("btn-outline-danger");
			// document.getElementById(id).classList.add("btn-outline-success");

			const element = document.getElementById("addCarrinho" + numeroCard);
			element.classList.remove("btn-outline-danger");
			element.classList.add("btn-outline-success");
			element.classList.remove("bi-cart-x");
			element.classList.add("bi-cart-plus");
			return;
		}
	});



	// NO FINAL DE TUDO INTEGRAR COM ESSAS DUAS FUNCOES
	atualizarHeader(); // IMPORTAR ESSAS FUNCOES VAI SER UMA BUNDA
	atualizarCarrinho();
}

export default function Carrinho() {
	let carrinho = JSON.parse(decodeURIComponent(new URL(window.location.href).searchParams.get("carrinho")));
	let subtotal = 0;

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
				<ol className="list-group offcanvas-body" id="carrinhoListaProdutos">
					{(!carrinho) ? <></> : carrinho.map((produto, i) => {
						for (let j = 0; j < produtos.length; j++) {
							if (produto === produtos[j].titulo) {
								subtotal += produtos[j].preco;
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