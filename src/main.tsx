import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from './components/pokedex/pokedex.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<Router>
			<Routes>
				<Route path="/" element={<Pokedex />} />
			</Routes>
		</Router>
	</>
)
