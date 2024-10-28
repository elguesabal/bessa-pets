export default function Card({ imagem, titulo, texto }) {
	return (
		<div className="card mt-3" style={{ width: "18rem" }}>
			<img src={imagem} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text">{texto}</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
}