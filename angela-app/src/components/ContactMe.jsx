
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';

function ContactMe() {
  return (
      <>
  <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>  Get in contact!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>
          <Card.Img src='https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></Card.Img>
          <Card.Text>
          Feel free to reach out and I will get back to you ASAP!
          </Card.Text>
          <Button variant='dark' href='https://github.com/angeladeveloper/Weather-Dashboard'>GitHub</Button>
          <Button variant='light' href='/'>Email</Button>
        </Card.Body>
      </Card>
      </>
  );
}

export default ContactMe;