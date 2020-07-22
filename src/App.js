import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Search from './components/Search';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import {BrowserRouter,Route} from 'react-router-dom'
import SocialMediaSection from './components/SocialMediaSection';
import RegisterScreen from './components/RegisterScreen';
import SigninScreen from './components/SigninScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <NavBar/>
        <Search/>
        <main>
        <div className="main">
              <Route path="/" exact={true} component={HomeScreen}/> 
              <Route path="/register" component={RegisterScreen}/> 
              <Route path="/signin" component={SigninScreen}/>           
        </div>
       </main>
       <SocialMediaSection/>
        
        <Footer/>

   
        
     </div>
    </BrowserRouter>
  )
}

export default App
