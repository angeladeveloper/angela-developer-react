import NavigationBar from '../components/Navbar';
import ProjectCard from '../components/Project';
import ContactMe from '../components/ContactMe';
export default function AboutMe() {
  return (
    <div className="App">

      <header>

        <NavigationBar />
      </header>
      <div className="container">
        <h2>
          About Me
        </h2>
        <img src="https://avatars.githubusercontent.com/u/7980003?v=4" alt="avatar" />
        <p>
          I am a full stack web developer with a background in the medical field. I have a passion for learning and I am always looking for new ways to improve my skills. I am currently enrolled in the University of Washington's Full Stack Web Development Bootcamp. I am looking for a position where I can utilize my skills and continue to learn and grow.

        </p>
        <p>
          👀 I’m interested in everything to do with coding and design. I would love to learn about new projects that people are working on, and discover new technologies. I would love to make connections with anyone in the field to grow my network.
        </p>

        <p>

          🌱 I’m currently learning the basics. I started out teaching myself, but I recently enrolled in a UW's bootcamap. I will end up learning just about everything I need to start making full stack applications.

        </p>
        <p>

          💞️ I’m looking to collaborate on ANYHING! I really want exposure. I know that I love the fundamentals of coding and problem solving, but I am still not sure where I will find my stride. I really want to get my hands dirty with as many things as I can, so when the time comes, I can make the best descions and I'll have TONS of experience under my belt by then, making me an even better developer.

        </p>
        <p>

          📫 How to reach me:
          Linkedin - https://www.linkedin.com/in/angela-wright-8b60a1227/
          Email - angelag6617@gmail.com
          Twitter - https://twitter.com/angeladeveloper

        </p>

      </div>
      <div>
      </div>
    </div >
  );
}