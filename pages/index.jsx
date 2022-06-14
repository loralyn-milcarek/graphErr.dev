import Head from 'next/head';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import Image from 'next/image';
// import Link from 'next/link';
import NavBar from '../nav.jsx'


/* 
<div>
      <a href="#secion">Click</a>

      <section
        style={{ marginTop: "1000px", marginBottom: "1000px" }}
        id="secion"
      >
        <h1>Test</h1>
      </section>
    </div>
*/

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      
      <NavBar/>

      <Container>
        {/* <h1 style={{color: "#18341a"}}>graphErr</h1> */}
        {/* <div>           
        </div>  */}
        <Container>
          <Row style={{marginTop: 4 + 'em'}}>
            <Col xs={5}>
              <Image src="/graphErrLogo.svg" alt="graphErr Logo" width="300" height="150"/>
            </Col>
            <Col xs={6} style={{paddingTop: 2 + 'em', fontSize: 1.5 + 'em'}}>
            Descriptive error handling library for GraphQL + Deno
            </Col>
          </Row>
          {/* <Image src="/graphErrLogoType.svg" alt="graphErr Logo Type" width="240" height="120"/> */}
        </Container>
        
        {/* <img src={graphErrLogo} alt="graphErr Logo"/> */}

        <p style={{color: "#18341a"}}>
        </p>
        <Container>
        <Container className="grid-gap">
          <Card className="cards">Here is a paragraph about graphErr. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
          <Card className="cards">This is the problem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card>
          <Card className="cards">Wow, we have the solution.</Card>
          </Container>

        </Container>

        <Container id="links">
          <Card body style={{padding: 8 + 'em', marginTop: 8 + 'em', color: 'white', backgroundColor: '#59af95'}}>These are the links. Can we jump to them?</Card>
        </Container>

        <Container id="team" style={{}}>
          <Card className="text-center" style={{marginTop: 8 + 'em', marginBottom: 1 + 'em', color: '18341a', fontSize: 2 + 'em', backgroundColor: '#F5F7F7', border: 'none'}}>
            We are Team GraphErr
          </Card>
          <Row style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8 + 'em'}}>
            
          
            <Card style={{width: 125 + 'px', display: 'flex', justifyContent: 'space-around', border: 'none', backgroundColor: '#F5F7F7'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/avitacos">Avi</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{width: 125 + 'px', display: 'flex', justifyContent: 'space-around', border: 'none', backgroundColor: '#F5F7F7'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/loralyn-milcarek">Loralyn</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{width: 125 + 'px', display: 'flex', justifyContent: 'space-around', border: 'none', backgroundColor: '#F5F7F7'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/maxwellcook">Max</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{width: 125 + 'px', display: 'flex', justifyContent: 'space-around', border: 'none', backgroundColor: '#F5F7F7'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/thomasseo1">Thomas</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{width: 125 + 'px', display: 'flex', border: 'none', backgroundColor: '#F5F7F7'}}>
              <Card.Img variant="top" src="/cs.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/claysawyer">Clay</Card.Link>
              </Card.Body>
              </Card>


          </Row>
        </Container>



      </Container>

    

      <footer className="cntr-footer">
        <Image src="/graphErrLogoType.svg" alt="graphErr Logo Type" width="100" height="100"/>
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" /> */}
        </a>
      </footer>
    </Container>
  )
}
