import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import BookDetails from './components/BookDetail/BookDetails.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import { ToastContainer, toast } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
     {
      path:"/",
     element:<Home></Home>
     },
     {
      path:'books/:bookId',
      loader:()=> fetch('/booksData.json'),
      element:<BookDetails></BookDetails>

     },
     {
      path:'listedbooks',
      loader:()=>fetch('/booksData.json'),
      element:<ListedBooks></ListedBooks>
      


     },
     {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
     }



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
<ToastContainer
  position="top-center"  
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>


  </StrictMode>,
)
