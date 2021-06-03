import { useLocation } from "react-router-dom";
import { ReactVideo } from "reactjs-media";

const VideoPlayer = () => {
  const location = useLocation();
  const { state } = location.state;

  return (
    <div>
      <ReactVideo src={`${state.videoURL}`} />
    </div>
  );
};

export default VideoPlayer;
