import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import ScrollTop from './components/ScrollTop'


import App from './App';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './index.css'


const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
       <Navbar/>
       <ScrollTop/>
       <App/>
       <Footer/>
  </BrowserRouter>
  
)