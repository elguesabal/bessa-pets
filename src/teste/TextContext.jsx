import { createContext, useState } from 'react';

// Cria o contexto
export const TextContext = createContext();

// Provedor do contexto
export function TextProvider({ children }) {
	const [text, setText] = useState("Texto inicial");

	return (
		<TextContext.Provider value={{ text, setText }}>
			{children}
		</TextContext.Provider>
	);
}