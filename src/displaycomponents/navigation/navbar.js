import "../../styles/nav.css";
import "../../styles/button.css";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/authcontext";
 function Nav(){

    const {authState}=useAuth();

    return(<div>
       <nav class="navigation container ">
                            <h1 class="nav-brand">🌼 Baghbaani 🌼</h1>
                            <ul class="list-non-bullet nav-pills">
                                <li class="list-item-inline">
                                    <Link to="/" class="link" ><span class="material-icons md-24">home</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/watchLaterList" class="link"><span class="material-icons md-24">watch_later</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/private/Playlist" class="link"  ><span class="material-icons md-24">playlist_add</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/favorites" class="link"><span class="material-icons">favorite</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/login" class="link"><span class="material-icons-two-tone">{authState.isUserLogin ? "logout": "login"}</span></Link>
                                </li>
                            </ul>
                        </nav>
    </div>);
}

export default Nav;