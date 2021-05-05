import "./nav.css";
import "../category/button.css";
import {Link} from "react-router-dom";
 function Nav(){

    return(<div>
       <nav class="navigation container ">
                            <h1 class="nav-brand">🌼 Baghbaani 🌼</h1>
                            <ul class="list-non-bullet nav-pills">
                                <li class="list-item-inline">
                                    <Link to="/" class="link" ><span class="material-icons md-24">home</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <a class="link" href=""><span class="material-icons md-24">watch_later</span></a>
                                </li>
                                <li class="list-item-inline">
                                    <a class="link" href=""><span class="material-icons md-24">playlist_add</span></a>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/favorites" class="link"><span class="material-icons">favorite</span></Link>
                                </li>
                            </ul>
                        </nav>
    </div>);
}

export default Nav;