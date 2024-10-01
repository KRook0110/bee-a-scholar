import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import App from './App.tsx'
import "@/index.css";
import Homepage from '@pages/Homepage';
import NotFoundPage from '@pages/NotFoundPage';
import "@/App.css"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <NotFoundPage />,
    },
])

createRoot(document.getElementById('root')!).render(
    <div className="bg-background-50">
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
    </div>
)
