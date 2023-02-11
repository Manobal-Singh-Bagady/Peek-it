import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@picocss/pico'
import {FaGithub,FaHome} from "react-icons/fa"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
