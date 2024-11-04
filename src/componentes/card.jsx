import { Modal } from "bootstrap";

export default function Card({ id, imagem, titulo, texto }) {

	// useEffect(() => {
	// 	const modalElement = document.getElementById("exampleModal" + id);
	// 	const modal = new Modal(modalElement);
	// 	modal.show(); // Abre o modal ao carregar o componente
	//   }, [id]); // Dependência para que execute quando o `id` mudar

	return (
		<>
			<div className="card mt-3" style={{ width: "18rem" }}>
				<div class="card-header text-center">{titulo}</div>
				<img src={imagem} className="card-img-top" alt="..." />
				<div className="card-body text-center">
					<a href="#" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal" + id}>Ver detalhes</a>
				</div>
			</div>

			<div className="modal fade" id={"exampleModal" + id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id={"exampleModalLabel" + 1}>{titulo}</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">{texto}</div>
						<div className="modal-footer">
							<a href={"https://wa.me/5521984025976?text=" + "Olá, gostaria de mais informações de "+ titulo + "%0A%0Agoogle.com"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link whatsapp</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}