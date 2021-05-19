import { videoData } from "../data/videodataList";
import "../styles/category.css";
import VideosInCategory from "../displaycomponents/category/videosInCategory";

function SummerVideoList() {
  return (
    <div>
      <h3>Summer Special Gardening Videos</h3>
      <div className="video-list-display">
        {videoData.map((item) => {
          if (item.category === "summer") {
            return <VideosInCategory item={item} />;
          }
          return <div></div>;
        })}
      </div>
    </div>
  );
}

export default SummerVideoList;
