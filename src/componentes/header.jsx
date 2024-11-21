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
							<a className="nav-link active" id="home" aria-current="page" href={"/" + window.location.search}>Pagina inicial</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href={"/caes" + window.location.search}>Cães</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id="felinos" aria-current="page" href={"/felinos" + window.location.search}>Felinos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href={"/peixes" + window.location.search}>Peixes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href={"/roedores" + window.location.search}>Roedores</a>
						</li>
					</ul>
					<form className="d-flex" onSubmit={pesquisa}>
						<input className="form-control me-2" placeholder="Pesquisar" name="pesquisa"/>
						<button className="btn btn-outline-success" type="submit">Pesquisar</button>
					</form>
				</div>
			</div>
		</nav>
	);
}