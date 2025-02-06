


// import { Search } from '@mui/icons-material'
import './App.css'
import Navbar from './components/navbar'

import Sidebar from './components/sidebar'

function App() {
  return (
    <div>
       <div className='flex'>
      <Sidebar/>
      <Navbar/>
      
      {/* <Search /> */}
      </div>

    </div>
  )
}

export default App
