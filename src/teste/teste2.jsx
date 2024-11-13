import { TextProvider } from './TextContext.jsx';
import BotaoA from './botaoA.jsx';
import ElementoB from './elementoB.jsx';

function Teste2() {
	return (
		<TextProvider>
			<BotaoA />
			<ElementoB />
		</TextProvider>
	);
}

export default Teste2;
