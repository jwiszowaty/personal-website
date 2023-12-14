import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Northcoders from './components/Northcoders/Northcoders.jsx'
import Freecodecamp from './components/Pages/Freecodecamp.jsx'
import Personal from './components/Pages/Personal.jsx'
import Blender from './components/Pages/Blender'
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blender" element={<Blender/>} />
        <Route path="/northcoders" element={<Northcoders/>} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="/freecodecamp" element={<Freecodecamp/>} />
    </Routes>
  )
}

export default App