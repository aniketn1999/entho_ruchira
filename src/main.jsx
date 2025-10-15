import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProductPage from './components/ProductPage.jsx'
import AppLayout from './components/layout/AppLayout.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AboutUs from './components/AboutUs.jsx'
import FAQ from './components/FAQ.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/aboutus', element: <AboutUs /> },
      { path: '/faq', element: <FAQ/>},
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
