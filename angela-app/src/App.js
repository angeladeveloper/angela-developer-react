import './App.css';
import NavigationBar from './components/Navbar';
import ProjectCard from './components/Project';

function App() {
  return (
    <div className="App">
      <header>

        <NavigationBar />
      </header>
      <div className="container">

        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
