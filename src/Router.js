// ./src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import CRUD from './components/CRUD'
import Jorge from './components/CRUD/Jorge'
import Layout from './components/Layout'
import jorge from './components/CRUD/Jorge'


// 2. FUNCIÓN
const Router = () => {

	// ARQUITECTURA DE ROUTING EN REACT
	return (
		<>
			<BrowserRouter>
				<Routes>

					{/* RUTA PADRE / PARENT ROUTE */}
					<Route path="/" element={<Layout />}>
						{/* localhost:3000/ */}
						{/* index es usar el path de la ruta padre */}
						<Route index element={<Home />} />
						{/* localhost:3000/crud */}
						<Route path="crud" element={<CRUD />} />
						<Route path="jorge" element={<Jorge />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)

}

// 3. EXPORTACIÓN
export default Router