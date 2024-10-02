import { Route, Routes} from 'react-router-dom'
import Projects from './jsx/Projects.jsx'
import Blender from './jsx/Blender.jsx'
import Aoc from './jsx/Aoc.jsx'
import SimpleJavaPrograms from './jsx/SimpleJavaPrograms.jsx'
import Archive from './jsx/Archive.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<SimpleJavaPrograms/>} />
      <Route path="/aoc" element={<Aoc/>} />
      <Route path="/blender" element={<Blender/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/archive" element={<Archive/>} />
    </Routes>
    </>
  )
}

export default App