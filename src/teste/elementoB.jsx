import { useContext } from 'react';
import { TextContext } from './TextContext.jsx';

function ElementoB() {
  const { text } = useContext(TextContext);

  return (
    <p>{text}</p>
  );
}

export default ElementoB;
