import "../../styles/category.css";
import "../../styles/button.css";
import { Link } from "react-router-dom";
export function VideoCategoryComponent(props) {
  return (
    <div className="categories apply-shadow">
      <div className="card-container">
        <div className="card-large">
          <div className="card-content">
            <img className="image-card-size-large" src={props.image} />
            <p>{props.category}</p>
          </div>
        </div>
        <div className="card-large-showSimilar-section">
          <Link to={props.redirect} className="link-Text-Btn">
            Explore{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
