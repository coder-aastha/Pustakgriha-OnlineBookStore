import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './components/CartContext.jsx'
import {WishlistProvider} from './components/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
     
    </Router>
  
  </React.StrictMode>
)
