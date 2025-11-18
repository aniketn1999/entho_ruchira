import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ProductPage from './components/ProductPage.jsx';
import AppLayout from './components/layout/AppLayout.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AboutUs from './components/AboutUs.jsx';
import FAQ from './components/FAQ.jsx';
import ProductDetailsView from './components/ProductDetailsView.jsx';
import { CartProvider } from './components/CartContext.jsx';
import Cart from './components/Cart.jsx';
import { ToastContainer } from 'react-toastify';
import ContactUs from './components/ContactUs.jsx';
import Checkout from './components/Checkout.jsx';
import { AuthProvider } from './components/authentication/AuthContext.jsx';
import ProtectedRoute from './components/authentication/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/products/:productId', element: <ProductDetailsView /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/checkout', element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        )
      },
    ],
  },
]);

// ✅ Render the root with all providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <ToastContainer position="top-right" autoClose={2000} />
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
