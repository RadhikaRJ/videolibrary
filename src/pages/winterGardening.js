import { videoData } from "../data/videodataList";
import "../styles/category.css";
import VideosInCategory from "../displaycomponents/category/videosInCategory";

function WinterVideoList() {
  return (
    <div>
      <h3>Winter Special Gardening Videos</h3>
      <div className="video-list-display">
        {videoData.map((item) => {
          if (item.category === "winter") {
            return <VideosInCategory item={item} />;
          }
          return <div></div>;
        })}
      </div>
    </div>
  );
}

export default WinterVideoList;
