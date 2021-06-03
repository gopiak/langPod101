import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

let localCache = [];

const LanguagePicker = () => {
  const [language, setLanguage] = useState("");
  const [langs, updateLangs] = useState([]);

  let history = useHistory();

  useEffect(() => {
    fetchLangs();
  }, []);

  const fetchLangs = () => {
    if (localCache.length === 0) {
      const res = fetch(
        "https://raw.githubusercontent.com/webdevgopi/langpod101-static-content/master/languages.json"
      );

      res
        .then((r) => r.json())
        .then((json) => {
          localCache = json.langs;
          updateLangs(localCache);
        })
        .catch((err) => console.log(err.json()));
    } else {
      updateLangs(localCache);
    }
  };

  return (
    <div className="languagePicker">
      <h1>Welcome to LangPod101</h1>
      <h4>Pick a language you wanna learn🙂</h4>
      {langs.map((l) => {
        return (
          <div className="language-container" key={l.id}>
            <div className="image-container">
              <img
                src={l.langPic}
                alt={l.langName}
                style={{ width: "320px", height: "213px" }}
              />
            </div>
            {l.status !== "completed" ? (
              <div className="info">
                <h1>{l.langName}</h1>
                <p>Work in Progress</p>
              </div>
            ) : (
              <div className="info">
                <h1>{l.langName}</h1>
                <p>Total Courses: {l.resources}</p>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(l.langName);
                    history.push(`/language/${l.langName}`);
                  }}
                >
                  Learn {l.langName}!
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LanguagePicker;
