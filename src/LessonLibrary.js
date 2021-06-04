import { Link } from "react-router-dom";
import { useState } from "react";
import french_it_up_logo from "./french-it-up.gif";

const LessonLibrary = (props) => {
  let { state, lessons } = props;
  const [filteredLessons, setfilteredLessons] = useState(lessons);
  const [isFiltered, toggleFiltered] = useState(false);

  if (isFiltered) {
    if (filteredLessons.length > 0) {
      return (
        <div>
          <div className="r101-wrapper--f4f5f8">
            <div className="ll">
              <div className="ll-header--browse-all">
                <div className="r101-grid--a">
                  <div className="ill-header__cell-a js-tap-tooltip">
                    <h2>Browse All {state.levelName} Pathways</h2>
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
                    setfilteredLessons(lessons);
                    toggleFiltered(!isFiltered);
                  } else {
                    if (!isFiltered) {
                      toggleFiltered(!isFiltered);
                    }
                    const temp = props.lessons.filter((l) => {
                      if (
                        l.lesson
                          .toLowerCase()
                          .includes(e.target.value.toLocaleLowerCase())
                      ) {
                        return true;
                      }
                    });
                    setfilteredLessons(temp);
                  }
                }}
              />
            </div>
          </div>
          <div className="list">
            {filteredLessons.map((l) => {
              return (
                <Link
                  to={{
                    pathname: `/french/lesson/${l.id}`,
                    state: {
                      state: {
                        levelName: state.levelName,
                        lessonId: l.id,
                        lessonName: l.lesson,
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
                          <span>{l.id.substring(l.id.length - 2)}</span>
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
                                {l.lesson}
                              </div>
                              <div className="ll-collection-all__description">
                                <span>{l.description}</span>
                              </div>
                              <div>
                                <span className="ll-collection-all__lessons">
                                  {l.totalLectures} Lessons - {l.duration}
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
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="r101-wrapper--f4f5f8">
            <div className="ll">
              <div className="ll-header--browse-all">
                <div className="r101-grid--a">
                  <div className="ill-header__cell-a js-tap-tooltip">
                    <h2>Browse All {state.levelName} Pathways</h2>
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
                    setfilteredLessons(lessons);
                    toggleFiltered(!isFiltered);
                  } else {
                    if (!isFiltered) {
                      toggleFiltered(!isFiltered);
                    }
                    const temp = props.lessons.filter((l) => {
                      if (
                        l.lesson
                          .toLowerCase()
                          .includes(e.target.value.toLocaleLowerCase())
                      ) {
                        return true;
                      }
                    });
                    setfilteredLessons(temp);
                  }
                }}
              />
            </div>
          </div>
          <div className="list">
            <div>No Matches</div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <div className="r101-wrapper--f4f5f8">
          <div className="ll">
            <div className="ll-header--browse-all">
              <div className="r101-grid--a">
                <div className="ill-header__cell-a js-tap-tooltip">
                  <h2>Browse All {state.levelName} Pathways</h2>
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
                  setfilteredLessons(lessons);
                  toggleFiltered(!isFiltered);
                } else {
                  if (!isFiltered) {
                    toggleFiltered(!isFiltered);
                  }
                  const temp = props.lessons.filter((l) => {
                    if (
                      l.lesson
                        .toLowerCase()
                        .includes(e.target.value.toLocaleLowerCase())
                    ) {
                      return true;
                    }
                  });
                  setfilteredLessons(temp);
                }
              }}
            />
          </div>
        </div>
        <div className="list">
          {lessons.map((l) => {
            return (
              <Link
                to={{
                  pathname: `/french/lesson/${l.id}`,
                  state: {
                    state: {
                      levelName: state.levelName,
                      lessonId: l.id,
                      lessonName: l.lesson,
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
                        <span>{l.id.substring(l.id.length - 2)}</span>
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
                              {l.lesson}
                            </div>
                            <div className="ll-collection-all__description">
                              <span>{l.description}</span>
                            </div>
                            <div>
                              <span className="ll-collection-all__lessons">
                                {l.totalLectures} Lessons - {l.duration}
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
          })}
        </div>
      </div>
    );
  }
};

export default LessonLibrary;
