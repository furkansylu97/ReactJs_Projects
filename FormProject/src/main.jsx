import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './context/Task.jsx'

createRoot(document.getElementById('root')).render(
<Provider>
    <App />
</Provider>
)
