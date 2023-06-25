import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Interests } from './components/Interests';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Banner />
      <Interests />
      <Projects />
      </header>
    </div>
  );
}

export default App;

/**
 * INTRO BANNER
 * !ABOUT ME (CORNELL, INTERESTS, PHOTO OF ME)
 * INTERESTS
 * !SKILLS (ICONS OF LANGUAGES/FRAMEKWORKS)
 * PROJECTS
 * CONTACT ME / COLLAB W ME
 */