import Head from 'next/head';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import NavBar from '../components/nav.jsx'
import Image from 'next/image';
import FooterNav from '../components/footer.jsx';

export default function Demo() {
  return (
    <Container className="lg-container">
      <Head>
        <title>graphErr Demo</title>
        <link rel="icon" href="/graphErrLogo.svg"/>
      </Head>

      <NavBar/>



        <Container className="grid-gap">
          <Card className="demo">
                <h1>
                  GraphErr Demo
                </h1>
                <Card.Text>
                <br/>
                See what the graphErr library can add to your GraphQL queries, or try it out yourself. 
                <br/>
                <Button href="https://deno.land/x/grapherr" className="install">Install graphErr</Button>

                </Card.Text>
              </Card>
<br/>
            <h1>Making a GraphQL Query </h1> 
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
            <br/>
            <Image className="ss" src="/qr1.png" alt="example query response" width="826" height="484"/>

            {/* <Image src="/qr1.png" alt="example query response" width="300" height="180" /> */}

          <hr/>
          <h1>GraphErr Functionality </h1> 
          <br/>
          <br/>
          <h3>Example #1: Null Response</h3>
          Standard GraphQL response:
          <br/>
          <Image src="/qr2.png" alt="example query response" width="830" height="364" />

          <br/>

          <br/>
          Extended graphErr response:
          <br/>
          <Image src="/qr3.png" alt="example query response" width="830" height="359" />

          <br/>
          <hr/>
          <br/>
          <h3>Example #2: Native GraphQL Error</h3>
          Standard GraphQL response:
          <br/>
          <Image src="/qr4.png" alt="example query response" width="830" height="488" />

          <br/>

          <br/>
          Extended graphErr response:
          <br/>
          <Image src="/qr5.png" alt="example query response" width="830" height="489" />

          <br/>
          <hr/>
{/*             
            Same query without graphErr:
            <Image src="/qr1.png" alt="example query response" width="300" height="180"/>

            Example #2 - graphErr response for a native GraphQL error:
            <Image src="/qr1.png" alt="example query response" width="300" height="180" />

            Same query without graphErr:
            <Image src="/qr1.png" alt="example query response" width="300" height="180" /> */}

  

        </Container>
        

        <FooterNav/>

      </Container>


  )
}
  