import {Routes,Route} from 'react-router-dom'

import OurWork from './components/OurWork'
import Event from './components/Event'


const App=function(){

  return (


          <Routes>
              <Route path='OurWork' element={<OurWork/>}/>
              <Route path='Event' element={<Event/>}/>
          </Routes>


   
    
  )
}

export default App;
