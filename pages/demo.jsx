import Head from 'next/head';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import NavBar from '../components/nav.jsx'
import Image from 'next/image';

export default function Demo() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/graphErrLogo.svg"/>
      </Head>

      <NavBar/>


        <Container className="grid-gap">
          <Card className="cards"> 
            <h1>Making a Query </h1> 
            Here is an example query in the GraphQL playground:
            <pre><code>{
            `
    query {
      allUsers {
        username
      }
    }
            `}
            </code></pre>
            The response would look like:
            <Image src="/qr1.png" alt="example query response" width="826" height="484"/>

            {/* <Image src="/qr1.png" alt="example query response" width="300" height="180" /> */}
          </Card>

          <Card className="cards"> 
            <h1>Functionality </h1> 
            
            Example #1 - graphErr response when the user receives an error (null response) that GraphQL does not natively provide error messaging for:
            {/* <Image src="/qr1.png" alt="example query response" width="413" height="242" /> */}
{/*             
            Same query without graphErr:
            <Image src="/qr1.png" alt="example query response" width="300" height="180"/>

            Example #2 - graphErr response for a native GraphQL error:
            <Image src="/qr1.png" alt="example query response" width="300" height="180" />

            Same query without graphErr:
            <Image src="/qr1.png" alt="example query response" width="300" height="180" /> */}

          </Card>
  

        </Container>
        
      </Container>
  )
}
  