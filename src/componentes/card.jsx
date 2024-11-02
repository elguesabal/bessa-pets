export default function Card({ id, imagem, titulo, texto }) {
	return (
		<>
			<div className="card mt-3" style={{ width: "18rem" }}>
				<img src={imagem} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{titulo}</h5>
					<a href="#" className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal" + id}>Go somewhere</a>
				</div>
			</div>

			<div className="modal fade" id={"exampleModal" + id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id={"exampleModalLabel" + 1}>Modal title</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">{texto}</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}