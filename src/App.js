
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
function App() {
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
                    <Route exact path="/private/playlist"  element={<Playlist/>}/>
                </Routes>        
               
             
             <Footer/>
              
            
    </div>
  );
}

export default App;
// https://codesandbox.io/s/react-router-auth-10-forked-pd4vr?file=/src/App.jsx