
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Card } from './index';

function App() {
	const [open, setOpen] = useState(false);
	const node = useRef(); 
	const user = 'ASB Client'
	useOnClickOutside(node, () => setOpen(false));
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div>
					<h1>Welcome {user} </h1>
					<Card />
				</div>
				<div ref={node}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
			</>
		</ThemeProvider>
	);
}
export default App;