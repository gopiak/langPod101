import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import french_it_up_logo from "./french-it-up.gif";

const localCache = {};

const LessonVideos = () => {
  const location = useLocation();
  const { state } = location.state;
  const [videos, setVideos] = useState([]);
  const [isFiltered, toggleFiltered] = useState(false);

  useEffect(() => {
    if (localCache[state.lessonId]) {
      setVideos(localCache[state.lessonId]);
    } else {
      getVideos(state.lessonId);
    }
  }, []);

  const getVideos = (lessonId) => {
    const res = fetch(
      `https://raw.githubusercontent.com/webdevgopi/langpod101-static-content/master/langs/french/videos/${lessonId}.json`
    );
    res
      .then((r) => r.json())
      .then((json) => {
        localCache[lessonId] = json.videos;
        setVideos(localCache[lessonId]);
      })
      .catch((err) => console.log(err.json()));
  };

  return (
    <div style={{ maxWidth: "1143px", margin: "0 auto" }}>
      <div className="r101-wrapper--f4f5f8">
        <div className="ll">
          <div className="ll-header--browse-all">
            <div className="r101-grid--a">
              <div className="ill-header__cell-a js-tap-tooltip">
                <h2>
                  Video Lessons from - {state.lessonName} - {state.levelName}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="r101-grid--a">
        <div className="ll-cell--b-2">
          <input
            type="text"
            placeholder="Search Lesson Library"
            className="search"
            onChange={(e) => {
              if (e.target.value === "") {
                setVideos(localCache[state.lessonId]);
              } else {
                const filteredVideos = localCache[state.lessonId].filter(
                  (l) => {
                    if (
                      l.videoName
                        .toLowerCase()
                        .includes(e.target.value.toLocaleLowerCase())
                    ) {
                      return true;
                    }
                  }
                );
                setVideos(filteredVideos);
              }
              toggleFiltered(!isFiltered);
            }}
          />
        </div>
      </div>
      <div className="list">
        {videos.length !== 0 ? (
          videos.map((l) => {
            return (
              <Link
                to={{
                  pathname: `/french/video/${l.id}`,
                  state: {
                    state: {
                      videoName: state.levelName,
                      videoId: l.id,
                      videoURL: l.videoURL,
                    },
                  },
                }}
                key={l.id}
                style={{ textDecoration: "none" }}
              >
                <div className="ll-collection-all ll-collection-all--private">
                  <div className="ll-collection-all__table">
                    <div className="ll-collection-all__row">
                      <div
                        className="ll-collection-all__cell ll-collection-all__cell--a"
                        style={{ paddingTop: "16px", fontSize: "20px" }}
                      >
                        <span>
                          {l.id.toString().length === 1 ? `0${l.id}` : l.id}
                        </span>
                      </div>
                      <div className="ll-collection-all__cell ll-collection-all__cell--a">
                        <div className="ll-collection__image">
                          <img
                            src={french_it_up_logo}
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "20%",
                            }}
                            alt="French it up:)"
                          />
                        </div>
                      </div>
                      <div
                        className="ll-collection-all__cell ll-collection-all__cell--b"
                        style={{ paddingLeft: "20px" }}
                      >
                        <div className="ll-collection-all__table">
                          <div className="ll-collection-all__cell ll-collection-all__cell--b-1">
                            <div className="title ll-collection-all__title">
                              {l.videoName}
                            </div>
                            <div className="ll-collection-all__description">
                              <span>{l.description}</span>
                            </div>
                            <div>
                              <span className="ll-collection-all__lessons">
                                {l.totalLectures} Videos - {l.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>No Matches</div>
        )}
      </div>
    </div>
  );
};

export default LessonVideos;
