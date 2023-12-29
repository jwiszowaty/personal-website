import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import NorthcodersMob from './components/Northcoders/NorthcodersMob.jsx'
import FreecodecampMob from './components/Pages/Mobile/FreecodecampMob.jsx'
import PersonalMob from './components/Pages/Mobile/PersonalMob.jsx'
import BlenderMob from './components/Pages/Mobile/BlenderMob'
import AocMob from './components/Pages/Mobile/AocMob.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aoc2023" element={<AocMob/>} />
        <Route path="/blender" element={<BlenderMob/>} />
        <Route path="/northcoders" element={<NorthcodersMob/>} />
        <Route path="/personal" element={<PersonalMob/>} />
        <Route path="/freecodecamp" element={<FreecodecampMob/>} />
    </Routes>
  )
}

export default App