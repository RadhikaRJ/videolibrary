import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Homepage from "./pages/homepage"
import Navigation from "./displaycomponents/navigation/navbar";
import Footer from "./displaycomponents/footer/footer";
import SpringVideoList from "./pages/springGardening";
import MonsoonVideoList from "./pages/monsoonGardening";
import WinterVideoList from "./pages/winterGardening";
import SummerVideoList from "./pages/summerGardening";
function App() {
  return (
    <div className="App">
            <Navigation/>               
                <Switch>
                    <Route exact path="/"><Homepage/></Route>
                    <Route exact path="/spring"><SpringVideoList/></Route>
                    <Route exact path="/summer"><SummerVideoList/></Route>
                    <Route exact path="/winter"><WinterVideoList/></Route>
                    <Route exact path="/monsoon"><MonsoonVideoList/></Route>
                </Switch>        
               
             
             <Footer/>
              
            
    </div>
  );
}

export default App;
