import { Modal } from "bootstrap";
import { useEffect } from "react";

function addRemmoveCarrinho(id, titulo) {
	const element = document.getElementById(id);
	let url = new URL(window.location.href);
	// console.log(url)

	if (element.classList.contains("btn-outline-success")) {
		element.classList.remove("btn-outline-success");
		element.classList.add("btn-outline-danger");
		url.searchParams.append("carrinho", titulo);
		// let carrinho = url.searchParams.getAll("carrinho");
		// console.log(carrinho);

// new URL(window.location.href).searchParams.delete();

		console.log(url.toString());
		history.pushState({}, '', url.toString());

	} else if (element.classList.contains("btn-outline-danger")) {
		element.classList.remove("btn-outline-danger");
		element.classList.add("btn-outline-success");


		// console.log("antes:", url.toString())
		// // for (const [nome, valor] of url.searchParams) {
		// // 	if (nome === "carrinho" && valor === titulo) {
		// // 		// console.log("valor:", titulo)
		// // 		// Se o nome e valor coincidirem, removemos o parâmetro
		// // 		url.searchParams.delete("carrinho");
		// // 		break;  // Após remover, podemos sair do loop
		// // 	}
		// // }
		// url.searchParams.delete("carrinho");
		// console.log("depois:", url.toString())





// Acessa todos os parâmetros da URL
let params = new URLSearchParams(url.search);

// Percorre todos os parâmetros e remove os que correspondem ao valor
for (let [chave, valor] of params.entries()) {
  if (valor === titulo) {
    params.delete(chave); // Remove o parâmetro com o valor específico
  }
}

// Atualiza a URL com os parâmetros restantes
url.search = params.toString();

console.log(url.toString()); // Saída: https://www.example.com/?produto=123&produto=789





		history.pushState({}, '', url.toString());
	}
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
			<div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
				<div className="card mt-3" style={{ width: "18rem" }}>
					<div className="card-header text-center">{titulo}</div>
					<img src={imagem} className="card-img-top" alt="Imagem do produto" />
					<div className="card-body d-flex justify-content-between align-items-center">
						<span className="text-left">R${preco.toFixed(2).replace('.', ',')}</span>
						<i className="btn btn-outline-success bi bi-cart-plus" id={"addCarrinho" + id} onClick={() => addRemmoveCarrinho("addCarrinho" + id, titulo)}></i>
						<a href="#" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={"#produto" + id}>Ver detalhes</a>
					</div>
				</div>
			</div>

			<div className="modal fade" id={"produto" + id} tabIndex="-1" aria-labelledby="produtoLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id={"produtoLabel" + 1}>{titulo}</h1>
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