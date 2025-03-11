import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const route=createBrowserRouter([{
    path:'/',
    element:<Home/>
  },
  {
    path:'/signup',
    element:<><h1>better sign up</h1></>
  },
  {
    path:'/login',
    element:<><h1>better authenticate</h1></>
  }
])
  return <RouterProvider router={route}/>
}

export default App
