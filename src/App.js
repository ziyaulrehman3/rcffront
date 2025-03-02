import {Routes,Route} from 'react-router-dom'

import OurWork from './components/OurWork'
import Event from './components/Event'
import Gallery from './components/Gallery'
import LoginPage from './components/LoginPage'
import OurTeam from './components/OurTeam'
import Home from './components/Home'
import ContactPage from './components/ContactPage'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundCancellationPolicy from './components/RefundCancellationPolicy'
import Donation from './components/Donation'
import OurStory from './components/OurStory'
import Mission from './components/Mission'


const App=function(){

  return (


          <Routes>
              <Route path='OurWork' element={<OurWork/>}/>
              <Route path='Event' element={<Event/>}/>
              <Route path='Gallery' element={<Gallery/>}/>
              <Route path='LoginPage' element={<LoginPage/>}/>
              <Route path='OurTeam' element={<OurTeam/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='ContactUs' element={<ContactPage/>}/>
              <Route path='TermsAndConditions' element={<TermsAndConditions/>}/>
              <Route path='PrivacyPolicies' element={<PrivacyPolicy/>}/>
              <Route path='RefundCancellation' element={<RefundCancellationPolicy/>}/>
              <Route path='Donation' element={<Donation/>}/>
              <Route path='OurStory' element={<OurStory/>}/>
              <Route path='Mission' element={<Mission/>}/>
          </Routes>


   
    
  )
}

export default App;
