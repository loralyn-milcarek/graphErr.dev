import Head from 'next/head';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import NavBar from '../components/nav.jsx'

export default function Demo() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>

      <NavBar/>

        <div>
          {/* header? */}
        </div>
        <Container className="grid-gap">
          <Card className="cards"> Here's is that demo 
          </Card>
          <div>
            add a screenshot demo stuff 
          </div>
          <Card className="cards"> Here is somemore demo stuff
          </Card>
          <div>
            add a screenshot demo stuff 
          </div>

        </Container>
        
      </Container>
  )
}
  