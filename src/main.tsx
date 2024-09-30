import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import App from './App.tsx'
import "@/index.css";
import Homepage from './pages/Homepage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <NotFoundPage />
    },
])


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
