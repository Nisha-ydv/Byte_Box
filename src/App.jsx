import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-gray-300">
        <Navbar />
        <main className="max-w-6xl mx-auto mt-6 p-6 bg-gray-400 rounded-xl shadow-md">
          <Home />
        </main>
      </div>
    )
  },
  {
    path: "/pastes",
    element: (
      <div className="min-h-screen bg-gray-300">
        <Navbar />
        <main className="max-w-6xl mx-auto mt-6 p-6 bg-gray-400 rounded-xl shadow-md">
          <Paste />
        </main>
      </div>
    )
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-md">
          <ViewPaste />
        </main>
      </div>
    )
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

