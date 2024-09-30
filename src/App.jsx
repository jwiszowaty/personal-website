import { Route, Routes} from 'react-router-dom'
import Projects from './jsx/Projects.jsx'
import Blender from './jsx/Blender.jsx'
import Aoc from './jsx/Aoc.jsx'
import Menu from './jsx/Menu.jsx'
import SimpleJavaPrograms from './jsx/SimpleJavaPrograms.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<SimpleJavaPrograms/>} />
      <Route path="/aoc2023" element={<Aoc/>} />
      <Route path="/blender" element={<Blender/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    </>
  )
}

export default App