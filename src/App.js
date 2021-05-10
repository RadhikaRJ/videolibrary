
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from "./pages/homepage"
import Navigation from "./displaycomponents/navigation/navbar";
import Footer from "./displaycomponents/footer/footer";
import SpringVideoList from "./pages/springGardening";
import MonsoonVideoList from "./pages/monsoonGardening";
import WinterVideoList from "./pages/winterGardening";
import SummerVideoList from "./pages/summerGardening";
import Favorites from "./pages/favorites";
import WatchLaterVideoList from "./pages/watchLaterList";
import Playlist from "./pages/private/playlists";
import {useState } from "react";
import {PrivateRoute} from "./PrivateRoute";
import {useAuth} from "./contexts/authcontext";
import Login from './pages/login';

function App() {

const {authState} =useAuth();

  
  return (
    <div className="App">
            <Navigation/>               
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/spring" element={<SpringVideoList/>}/>
                    <Route exact path="/summer"  element={<SummerVideoList/>}/>
                    <Route exact path="/winter"  element={<WinterVideoList/>}/>
                    <Route exact path="/monsoon"  element={<MonsoonVideoList/>}/>
                    <Route exact path="/favorites"  element={<Favorites/>}/>
                    <Route exact path="/watchLaterList"  element={<WatchLaterVideoList/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <PrivateRoute path="/private/playlist" login={authState.isUserLogin} element={<Playlist/>}/> 
                   
                </Routes>        
               
             
             <Footer/>
              
            
    </div>
  );
}

export default App;
// https://codesandbox.io/s/react-router-auth-10-forked-pd4vr?file=/src/App.jsx