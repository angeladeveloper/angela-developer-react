import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';

function ProjectCard() {
  return (
      <>
  <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>  A Weather Dashboard ☁️</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Javascript, HTML, CSS
          </Card.Subtitle>
          <Card.Img src='https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'></Card.Img>
          <Card.Text>
            Front end application to browes and save weather seraches. Returns information regarding forcast, temprature, and UV index. Searched by location.
          </Card.Text>
          <Button variant='dark' href='https://github.com/angeladeveloper/Weather-Dashboard'>GitHub</Button>
          <Button variant='light' href='https://angeladeveloper.github.io/Weather-Dashboard/'>Live Site</Button>
        </Card.Body>
      </Card>
      </>
  );
}

export default ProjectCard;