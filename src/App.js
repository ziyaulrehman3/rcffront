import {Routes,Route} from 'react-router-dom'

import OurWork from './components/OurWork'
import Event from './components/Event'
import Gallery from './components/Gallery'
import LoginPage from './components/LoginPage'


const App=function(){

  return (


          <Routes>
              <Route path='OurWork' element={<OurWork/>}/>
              <Route path='Event' element={<Event/>}/>
              <Route path='Gallery' element={<Gallery/>}/>
              <Route path='LoginPage' element={<LoginPage/>}/>
          </Routes>


   
    
  )
}

export default App;
