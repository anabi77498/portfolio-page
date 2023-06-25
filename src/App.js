import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Banner />
      </header>
    </div>
  );
}

export default App;
