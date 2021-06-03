import { useState, useEffect } from "react";

import LessonLibrary from "./LessonLibrary";

const localCache = {};
const levels = [
  { levelName: "Absolute Beginner", className: "absolute-beginner" },
  { levelName: "Beginner", className: "beginner" },
  { levelName: "Intermediate", className: "intermediate" },
  { levelName: "Upper Intermediate", className: "upper-intermediate" },
  { levelName: "Advanced", className: "advanced" },
  { levelName: "Bonus", className: "bonus" },
];
const ProficiencyLevel = () => {
  const [state, setState] = useState(levels[0]);
  const [lessons, setLessons] = useState([]);
  const [disp, setDisp] = useState("none");

  useEffect(() => {
    let level =
      state.className === "absolute-beginner"
        ? "abs-beginner"
        : state.className;

    if (localCache[level]) {
      setLessons(localCache[level]);
    } else {
      getLessons(level);
    }
  }, [state]);

  const getLessons = (level) => {
    if (level === "absolute-beginner") {
      level = "abs-beginner";
    }
    const res = fetch(
      `https://raw.githubusercontent.com/webdevgopi/langpod101-static-content/master/langs/french/${level}.json`
    );
    res
      .then((r) => r.json())
      .then((json) => {
        localCache[level] = json.lessons;
        setLessons(localCache[level]);
      })
      .catch((err) => console.log(err.json()));
  };

  let dropDownClass = `r101-dropdown_level r101-dropdown_level--${state.className} js-show-dropdown-tooltip js-show-tooltip--level`;
  return (
    <div style={{ maxWidth: "1143px", margin: "0 auto" }}>
      <div className={"r101-wrapper--" + state.className}>
        <div className="ll">
          <div className="ll-headline">
            <div>
              <h1>Lesson Library</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="r101-dropdown--b"
                onClick={(e) => {
                  e.preventDefault();
                  disp === "none" ? setDisp("block") : setDisp("none");
                }}
                style={{
                  border: "none",
                  textAlign: "center",
                  textDecoration: "none",
                  outline: "none",
                  boxShadow: "none",
                  padding: "2px",
                }}
              >
                {disp === "none" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-down"
                    width="20"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="18" y1="13" x2="12" y2="19" />
                    <line x1="6" y1="13" x2="12" y2="19" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-up"
                    width="20"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="18" y1="11" x2="12" y2="5" />
                    <line x1="6" y1="11" x2="12" y2="5" />
                  </svg>
                )}
              </button>
              <span className="r101-dropdown--b ll-select--custom">
                <a className={dropDownClass}>{state.levelName}</a>
                <div
                  id="study-level"
                  className="js-tooltip"
                  style={{ display: disp }}
                >
                  <ul>
                    {levels.map((l) => {
                      return (
                        <li key={l.className}>
                          <a
                            className={
                              "r101-dropdown_level r101-dropdown_level--" +
                              l.className
                            }
                            onClick={() => {
                              setState(l);
                              setDisp("none");
                            }}
                          >
                            {l.levelName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {lessons == null || lessons.length === 0 ? (
        <div>Empty</div>
      ) : (
        <LessonLibrary state={state} lessons={lessons} />
      )}
    </div>
  );
};

export default ProficiencyLevel;
