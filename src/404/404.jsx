export default function PageNotFound() {
	setTimeout(() => window.location.href = "/", 3000);
	return (
		<>
			<div className="wrapper">
				<div className="box">
					<h1>404</h1>
					<p>Página não encontrada!</p>
					<p><a href="/">Você está sendo redirecionado em <span>5</span>...</a></p>
				</div>
			</div>
		</>
	);
}