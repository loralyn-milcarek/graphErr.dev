import Head from 'next/head';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import Image from 'next/image';
// import Link from 'next/link';
import NavBar from '../components/nav.jsx'
import FooterNav from '../components/footer.jsx';

export default function Home() {
  return (
    <Container className="lg-container">
      <Head>
        <title>graphErr</title>
        {/* <link rel="icon" href="/favicon-32x32.png"/> */}

        <link rel="icon" href="/graphErrLogo.svg"/>
      </Head>
      
      <NavBar/>

      <Container>
        <Container>
          <Row style={{marginTop: 4 + 'em'}}>
            <Col xs={4} style={{paddingBottom: .5 + 'em'}}>
              <Image src="/graphErrLogo.svg" alt="graphErr Logo" width="300" height="180" />
            </Col>
            <Col xs={7} style={{paddingTop: 2 + 'em', fontSize: 1.5 + 'em'}}>
            Descriptive error handling library for GraphQL + Deno
            </Col>
          </Row>
        </Container>
        
        <Container>
          <Container className="grid-gap">
            <Card className="cards">
              <Card.Title>
                Why we built graphErr
              </Card.Title>
              <Card.Text>
              <br/>
              GraphQL is a strongly typed, introspective query language that solves the standard REST response issue of over- and under-fetching data. 
              <br/>
              <br/>
              However, even as multi-system queries are abstracted away, some of the benefits of the static, explicit architecture of a RESTful API are lost with GraphQL…
              </Card.Text>
            </Card>
            <Card className="cards">
              <Card.Title>
                The graphErr solution
              </Card.Title>
              <Card.Text>
                <br/>
                A lightweight, free library to generate readable, actionable error data that enables query debugging when using GraphQL in Deno. 
              </Card.Text>
              </Card>
              <Container align="center" style={{marginTop: 8 + 'em'}}>
          <Image src="/scale.png" width="240px" height="138px"/>
        </Container>
            <Card className="cards" style={{paddingTop: 4 + 'em', paddingBottom: 5 + 'em', marginTop: 10 + 'em', marginBottom: 14 + 'em', color: '#F5F7F7', backgroundColor: '#59af95'}}>
              <Card.Title style={{paddingBottom: 2 + 'em'}}>
                About graphErr 
              </Card.Title>
              <Card.Text>
                GraphErr is an un-opinionated, lightweight library that provides descriptive, debuggable error data to developers working with GraphQL in Deno. 
                <br/>              
                <br/>
                In addition to expanded and illustrative error responses pulled directly from the formal GraphQL spec sheet, graphErr programmatically analyzes your GraphQL queries, adding a post-processing layer of error handling that reduces the conceptual burden on the developer by providing many of the benefits of RESTful API architecture.
                <br/>
                <br/>
                Read more on Medium
              </Card.Text>
            </Card>
          </Container>
        </Container>
        <Container align="center">
          <Image src="/scale.png" width="240px" height="138px"/>
        </Container>
        <Container id="team" style={{backgroundColor: '#dcf2eb', borderRadius: 20 + 'px', marginTop: 12 + 'em'}}>
          <Card className="text-center" style={{paddingTop: 4 + 'em', marginTop: 8 + 'em', marginBottom: 2 + 'em', color: '#18341a', fontSize: 2 + 'em', backgroundColor: '#dcf2eb', border: 'none'}}>
            We are Team GraphErr
          </Card>

          <Row style={{display: 'flex', justifyContent: 'space-around', marginBottom: 12 + 'em', paddingBottom: 8 + 'em', }}>
              <Card className="text-center" style={{backgroundColor: '#dcf2eb', border: 'none'}}>
              <Card.Img variant="top" src="/ak.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Text href="https://github.com/avitacos">Avi</Card.Text>
                <a href="https://linkedin.com/in/avi-kerson" style={{margin: 4 + 'px'}}>
                  <Image src="/li.png" width="26px" height="22px"/>
                </a>
                <a href="https://github.com/avitacos" style={{margin: 4 + 'px'}}>
                  <Image src="/gh.png" width="22px" height="22px"/>
                </a>
              </Card.Body>
              </Card>
          
            <Card className="text-center" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#dcf2eb', border: 'none'}}>
              <Card.Img variant="top" src="/lm.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                {/* <Card.Text href="https://github.com/loralyn-milcarek">Loralyn</Card.Text> */}
                <Card.Text>Loralyn</Card.Text>
                <a href="https://linkedin.com/in/loralyn-milcarek" style={{margin: 4 + 'px'}}>
                  <Image src="/li.png" width="26px" height="22px"/>
                </a>
                <a href="https://github.com/loralyn-milcarek" style={{margin: 4 + 'px'}}>
                  <Image src="/gh.png" width="22px" height="22px"/>
                </a>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#dcf2eb', border: 'none'}}>
              <Card.Img variant="top" src="/mc.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Text href="https://github.com/maxwellcook">Max</Card.Text>
                <a href="https://linkedin.com/in/maxwellcook" style={{margin: 4 + 'px'}}>
                  <Image src="/li.png" width="26px" height="22px"/>
                </a>
                <a href="https://github.com/maxwellcook" style={{margin: 4 + 'px'}}>
                  <Image src="/gh.png" width="22px" height="22px"/>
                </a>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#dcf2eb', border: 'none'}}>
              <Card.Img variant="top" src="/ts.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Text href="https://github.com/thomasseo1">Thomas</Card.Text>
                <a href="https://linkedin.com/in/thomasjseo" style={{margin: 4 + 'px'}}>
                  <Image src="/li.png" width="26px" height="22px"/>
                </a>
                <a href="https://github.com/thomasseo1" style={{margin: 4 + 'px'}}>
                  <Image src="/gh.png" width="22px" height="22px"/>
                </a>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{backgroundColor: '#dcf2eb', border: 'none'}}>
              <Card.Img variant="top" src="/cs.png" style={{borderRadius: 50 + 'px', width: 100 + 'px', height: 100 + 'px'}}/>
              <Card.Body>
                <Card.Text href="https://github.com/claysawyer">Clay</Card.Text>
                <a href="https://linkedin.com/in/claysawyer" style={{margin: 4 + 'px'}}>
                  <Image src="/li.png" width="26px" height="22px"/>
                </a>
                <a href="https://github.com/claysawyer" style={{margin: 4 + 'px'}}>
                  <Image src="/gh.png" width="22px" height="22px"/>
                </a>
              </Card.Body>
            </Card>


          </Row>
        </Container>
        <Container align="center">
          <Image src="/scale.png" width="240px" height="138px"/>
        </Container>
      </Container>
      
      <FooterNav/>

    </Container>
  )
}
