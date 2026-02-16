import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Contry from './pages/Contry'
import AppLayout from './components/AppLayout'
import NotFound from "./pages/NotFound"
function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country" element={<Contry />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
