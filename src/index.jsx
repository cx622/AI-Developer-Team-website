import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Navbar'
import Hook from './components/Hook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Nav />
    <Hook />
	</React.StrictMode>
)