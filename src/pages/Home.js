import NavigationBar from '../components/Navbar';
import ProjectCard from '../components/Project';
import ContactMe from '../components/ContactMe';
export default function Home() {
  return (
    <div className="App">

      <header>

        <NavigationBar />
      </header>
      <div className="container">

        <ProjectCard />
        <ContactMe />
      </div>
      <div>
      </div>
    </div>
  );
}