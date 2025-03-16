import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/accounts/Signup'
import Login from './components/accounts/Login'
import AddBlog from './components/AddBlog'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
   

  const route=createBrowserRouter([{
    path:'/',
    element:<Home />
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/addblog',
    element:<AddBlog/>
  }
])
  return <RouterProvider router={route}/>
}

export default App
