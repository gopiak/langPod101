const Navbar = () => {
  return (
    <div>
      <div class="dashbar-a__cell-a">
        <a class="dashbar-a__block--logo" tabindex="0" href="/index.php">
          <img
            src="/static/images/frenchpod101/header/frenchpod101-logo.svg"
            class="c1"
            alt="Home"
            onerror="this.src='/static/images/frenchpod101/header/frenchpod101-logo.png'; this.onerror=null;"
          />
        </a>
      </div>
      <div class="dashbar-a__cell-b">
        <div class="dashbar-a__block--nav-item">
          <span role="application">
            <a
              class="dashbar-a__nav-item js-dashbar-a-touch-exception js-dashbar-a-tabindex"
              href="/dashboard"
              tabindex="0"
            >
              Dashboard
            </a>
          </span>
        </div>
        <div class="dashbar-a__block--nav-item js-dashbar-a-nav js-dashbar-a-block-lessons">
          <span role="application">
            <a
              class="dashbar-a__nav-item js-dashbar-a-lessons js-dashbar-a-tabindex"
              aria-haspopup="true"
              aria-label="Lessons"
              tabindex="0"
            >
              Lessons
            </a>
          </span>
          <div class="dashbar-a__block--dashbar dashbar-lessons js-dashbar-a-nav-item dashbar-a__grid dashbar-a__grid--no-lesson-image">
            <div class="dashbar-a__cell-e--3">
              <span role="application">
                <span class="dashbar-a__nav-item--sub ill-ease-color">
                  <a href="/lesson-library/">Lesson Library</a>
                </span>
                <span class="dashbar-a__nav-item--sub ill-ease-color">
                  <a href="/index.php?cat=Newest">Newest Lessons</a>
                </span>
                <span class="dashbar-a__nav-item--sub ill-ease-color">
                  <a href="/index.php?cat=MyLessons">Favorites</a>
                </span>
              </span>
            </div>
            <div class="dashbar-a__cell-e--4">
              <div class="dashbar-a__label--next-lesson">Your Next Lesson</div>
              <div class="dashbar-a__separator"></div>
              <div>
                <div class="dashbar-a__cell-e--5">
                  <img class="js-dashbar-lesson-img" src="" alt="" />
                </div>
                <div class="dashbar-a__cell-e--6">
                  <a
                    href="https://www.frenchpod101.com/lesson/basic-bootcamp-1-self-introduction-and-basic-greetings-in-formal-french/?lp=230"
                    class="js-dashbar-lesson-href js-dashbar-lesson-title dashbar-a__label--lesson-title ill-ease-color"
                    aria-label="Lesson Title"
                  >
                    Self Introduction and Basic Greetings in Formal French
                  </a>
                  <div class="dashbar-a__label--season-title js-dashbar-season-title">
                    Level 1 French
                  </div>
                  <div class="dashbar-a__label--focus-statement js-dashbar-focus-statement">
                    Learn how to say many common phrases in French that people
                    use every day to introduce themselves
                  </div>
                  <div class="dashbar-a__label--add-new-path js-dashbar-add-new-path c2">
                    Congratulations! You've finished everything on your pathway.
                    <a href="/lesson-library/">Add a new path?</a>
                  </div>
                  <div class="dashbar-a__button--study-now">
                    <a
                      class="r101-button--h40-r4 js-dashbar-lesson-href"
                      href="https://www.frenchpod101.com/lesson/basic-bootcamp-1-self-introduction-and-basic-greetings-in-formal-french/?lp=230"
                    >
                      Study Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dashbar-a__block--nav-item js-dashbar-a-nav">
          <a
            class="dashbar-a__nav-item js-dashbar-a-tabindex"
            aria-haspopup="true"
            aria-label="Vocabulary"
            tabindex="0"
          >
            Vocabulary
          </a>
          <div class="dashbar-a__block--dashbar js-dashbar-a-nav-item dashbar-a__grid">
            <div class="dashbar-a__cell-e--1">
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/learningcenter/flashcards/flashcards">Flashcards</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-vocabulary-lists/">
                  Vocabulary Lists
                  <span class="dashbar-a__free">Free</span>
                </a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/learningcenter/account/wordbank">Word Bank</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-phrases/">
                  Word of the Day
                  <span class="dashbar-a__free">Free</span>
                </a>
              </span>
            </div>
            <div class="dashbar-a__cell-e--2">
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-dictionary/">
                  French Dictionary
                  <span class="dashbar-a__free">Free</span>
                </a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-word-lists/?coreX=100">
                  100 Most Common Words
                  <span class="dashbar-a__free">Free</span>
                </a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-word-lists/?coreX=2000">
                  2000 Most Common Words
                </a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/key-french-phrases/">
                  French Key Phrases
                  <span class="dashbar-a__free">Free</span>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="dashbar-a__block--nav-item js-dashbar-a-nav">
          <a
            class="dashbar-a__nav-item js-dashbar-a-tabindex"
            aria-haspopup="true"
            aria-label="My Teacher"
            tabindex="0"
          >
            My Teacher
          </a>
          <div class="dashbar-a__block--dashbar js-dashbar-a-nav-item dashbar-a__grid my-teacher">
            <span class="dashbar-a__nav-item--sub ill-ease-color">
              <a href="/myteacher">My Teacher Messenger</a>
            </span>
            <span class="dashbar-a__nav-item--sub ill-ease-color">
              <a href="/member/assignments_for_student.php">
                My Assignments
                <span class="assignment-notification js-dashbar-assignment-notification c3">
                  0
                </span>
              </a>
            </span>
            <span class="dashbar-a__nav-item--sub ill-ease-color">
              <a href="/myteacher">My Assessment Test</a>
            </span>
          </div>
        </div>
        <div class="dashbar-a__block--nav-item js-dashbar-a-nav">
          <a
            class="dashbar-a__nav-icon js-dashbar-a-tabindex"
            aria-haspopup="true"
            aria-label="Extras"
            tabindex="0"
          ></a>
          <div class="dashbar-a__block--dashbar dashbar-dots js-dashbar-a-nav-item dashbar-a__grid">
            <div class="dashbar-a__cell-e--1">
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-resources/">French Resources</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/app/">Mobile App</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/french-grammar/">Grammar Bank</a>
              </span>
            </div>
            <div class="dashbar-a__cell-narrow">
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/learningcenter/account/notes">My Notes</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/learningcenter/account/myfeed">My Feed</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="https://www.frenchpod101.com/blog/">Blog</a>
              </span>
              <span class="dashbar-a__nav-item--sub ill-ease-color">
                <a href="/helpcenter/">Help Center</a>
              </span>
            </div>
          </div>
        </div>
        <div
          class="dashbar-a__block--nav-item js-dashbar-a-nav"
          role="application"
        >
          <a
            class="dashbar-a__nav-icon js-dashbar-a-search-item"
            role="search"
            tabindex="0"
            aria-haspopup="true"
            aria-label="Search"
          ></a>
          <div class="dashbar-a__block--dashbar dashbar-search">
            <div class="dashbar-a__block--search-string">
              <input
                type="text"
                class="dashbar-a__search-string js-dashbar-search-string"
                name="search"
                accesskey="s"
                placeholder="Search Lessons or Dictionary...."
                aria-label="Search Lessons or Dictionary"
                autocomplete="off"
              />
            </div>
            <div class="dashbar-a__grid dashbar-a__search-results js-dashbar-search-results c4">
              <div class="dashbar-a__cell-f--1 dashbar-a__block--search-result-lesson">
                <span class="dashbar-a__label--search-result-title">
                  Lessons
                </span>
                <a
                  href="/search"
                  class="dashbar-a__label--search-result-extra js-dashbar-advanced-search"
                >
                  Advanced Lesson Search
                </a>
                <ul class="js-dashbar-search-result-lessons"></ul>
              </div>
              <div class="dashbar-a__cell-f--2 dashbar-a__block--search-result-dictionary">
                <span class="dashbar-a__label--search-result-title">
                  Dictionary
                </span>
                <a
                  href="/learningcenter/reference/dictionary"
                  class="dashbar-a__label--search-result-extra js-dashbar-dictionary-results"
                >
                  View All Dictionary Results
                </a>
                <ul class="js-dashbar-search-result-dictionary"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
