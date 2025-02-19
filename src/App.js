import {Routes,Route} from 'react-router-dom'

import OurWork from './components/OurWork'


const App=function(){

  return (


          <Routes>
              <Route path='OurWork' element={<OurWork/>}/>
          </Routes>


   
    
  )
}

export default App;
