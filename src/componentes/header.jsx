export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Bessa pets</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Pagina inicial</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Cães</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/felinos">Felinos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Peixes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Roedores</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Pesquisar</button>
					</form>
				</div>
			</div>
		</nav>
	);
}