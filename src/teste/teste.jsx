import { useState } from 'react';

function Teste() {
	const [text, setText] = useState(["Texto inicial", "texto 2"]);

	return (
		<div>
			<BotaoA setText={setText} />
			<ElementoB text={text} />
		</div>
	);
}

function BotaoA({ setText }) {
	return (
		<button onClick={() => setText(["Texto atualizado!", "texto 2 atualizado", "texto 3"])}>
			Clique para alterar o texto
		</button>
	);
}

function ElementoB({ text }) {
	return (
		<>
			{text.map((texto, i) => {
				return (<p key={i}>{texto}</p>);
			})}
		</>
	);
}

export default Teste;
