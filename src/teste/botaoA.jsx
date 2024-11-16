import { useContext } from 'react';
import { TextContext } from './TextContext.jsx';

function BotaoA() {
  const { setText } = useContext(TextContext);

  return (
    <button onClick={() => setText("Texto atualizado!")}>
      Clique para alterar o texto
    </button>
  );
}

export default BotaoA;
