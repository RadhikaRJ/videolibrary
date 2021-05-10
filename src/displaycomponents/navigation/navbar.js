import "../../styles/nav.css";
import "../../styles/button.css";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../contexts/authcontext";
 function Nav(){
     
    
    const {authState}=useAuth();

    return(<div>
       <nav class="navigation container ">
                            <h1 class="nav-brand">🌼 Baghbaani 🌼</h1>
                            <ul class="list-non-bullet nav-pills">
                                <li class="list-item-inline">
                                    <NavLink activeClassName="activeNav" to="/" class="link" end><span class="material-icons md-24">home</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink activeClassName="activeNav" to="/watchLaterList" class="link"><span class="material-icons md-24">watch_later</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink activeClassName="activeNav" to="/private/Playlist" class="link"  ><span class="material-icons md-24">playlist_add</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink activeClassName="activeNav" to="/favorites" class="link"><span class="material-icons">favorite</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink activeClassName="activeNav" to="/login" class="link"><span class="material-icons-two-tone">{authState.isUserLogin ? "logout": "login"}</span></NavLink>
                                </li>
                            </ul>
                        </nav>
    </div>);
}

export default Nav;