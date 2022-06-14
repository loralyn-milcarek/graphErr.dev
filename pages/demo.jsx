import Head from 'next/head';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import NavBar from '../nav.jsx'

export default function Demo() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>

      <NavBar/>

        <div>this is the demo page</div>
      </Container>
  )
}
  