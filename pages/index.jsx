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
            <Col xs={5} style={{paddingBottom: .5 + 'em'}}>
              <Image src="/graphErrLogo.svg" alt="graphErr Logo" width="300" height="180" />
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
          <Card className="cards">The Problem: GraphQL is a strongly typed, introspective query language that solves the standard REST response issue of over- and under-fetching data. Even as multi-system queries are abstracted away, some of the benefits of the static, explicit architecture of a RESTful API are lost with GraphQL…
          </Card>
          <Card className="cards">Solution: There is currently no lightweight, free library to generate readable, actionable error data that enables query debugging when using GraphQL in Deno. graphErr is an un-opinionated, lightweight library that provides descriptive, debuggable error data to developers working with GraphQL in Deno. In addition to expanded and illustrative error responses pulled directly from the formal GraphQL spec sheet, graphErr will programmatically analyze your GraphQL queries, adding a post-processing layer of error handling that reduces the conceptual burden on the developer by providing many of the benefits of RESTful API architecture.</Card>
          <Card className="cards">Wow, we have the solution.</Card>
          </Container>

        </Container>

        <Container id="links">
          <Card body style={{padding: 8 + 'em', marginTop: 8 + 'em', color: 'white', backgroundColor: '#59af95'}}>These are the links. Can we jump to them?</Card>
        </Container>

        <Container id="team">
          <Card className="text-center" style={{marginTop: 8 + 'em', marginBottom: 1 + 'em', color: '18341a', fontSize: 2 + 'em', backgroundColor: '#F5F7F7', border: 'none'}}>
            We are Team GraphErr
          </Card>

          <Row style={{display: 'flex', justifyContent: 'space-around', marginBottom: 8 + 'em'}}>
              <Card className="text-center" style={{backgroundColor: '#F5F7F7', border: 'none'}}>
              <Card.Img variant="top" src="/ak.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/avitacos">Avi</Card.Link>
              </Card.Body>
              </Card>
          
            <Card className="text-center" style={{backgroundColor: '#F5F7F7', border: 'none'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/loralyn-milcarek">Loralyn</Card.Link>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#F5F7F7', border: 'none'}}>
              <Card.Img variant="top" src="/mc.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/maxwellcook">Max</Card.Link>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#F5F7F7', border: 'none'}}>
              <Card.Img variant="top" src="/ts.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Link href="https://github.com/thomasseo1">Thomas</Card.Link>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#F5F7F7', border: 'none'}}>
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
