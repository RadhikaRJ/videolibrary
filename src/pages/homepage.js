import { VideoCategoryComponent } from "../displaycomponents/category/videocategory";
import "../App.css";
import summerpic from "../assets/images/summergardening.jpg";
import winterpic from "../assets/images/wintergardening.jpg";
import monsoonpic from "../assets/images/monsoongardening.jpg";
import springpic from "../assets/images/springgardening.jpg";

function Homepage() {
  return (
    <div className="main-homepage-container">
      <div className="video-categories">
        <div>
          <VideoCategoryComponent
            category={"Spring Gardening"}
            image={springpic}
            redirect={"/spring"}
          />
        </div>

        <div>
          <VideoCategoryComponent
            category={"Summer Gardening"}
            image={summerpic}
            redirect={"/summer"}
          />
        </div>

        <div>
          <VideoCategoryComponent
            category={"Monsoon Gardening"}
            image={monsoonpic}
            redirect={"/monsoon"}
          />
        </div>

        <div>
          <VideoCategoryComponent
            category={"Winter Gardening"}
            image={winterpic}
            redirect={"/winter"}
          />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
