import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Interests } from './components/Interests';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Banner />
      <Interests />
      </header>
    </div>
  );
}

export default App;
