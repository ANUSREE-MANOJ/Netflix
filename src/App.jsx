import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Banner from './Componenets/Banner/Banner'
import './App.css'
import RowPost from './Componenets/RowPost/RowPost'
import {orginals,action} from './Urls'
function App() {
  return (
    <div>

<Navbar/>
<Banner/>
<RowPost url={orginals} title='Netflix Originals'/>
<RowPost url={action} title='Action' isSmall/>

    </div>
  )
}

export default App