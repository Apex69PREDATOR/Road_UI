import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/accounts/Signup'
import Login from './components/accounts/Login'

function App() {
   

  const route=createBrowserRouter([{
    path:'/',
    element:<Home name={name}/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
  return <RouterProvider router={route}/>
}

export default App
