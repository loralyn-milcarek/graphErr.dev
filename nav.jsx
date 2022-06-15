import { Nav } from 'react-bootstrap';
// import Link from 'next/link';

export default function NavBar() {
  return (
    <Nav className="justify-content-end" style={{color: "#18341a"}} variant="pills" activeKey="/install">
    <Nav.Item>
      <Nav.Link href="/" className="justify-content-start" style={{color: "#18341a", position: 'flex', alignItems: 'start'}}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/#links" style={{color: "#18341a"}}>Links</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/#team" eventKey="team" style={{color: "#18341a"}}>Team</Nav.Link>
      </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/demo" eventKey="link-2" style={{color: "#18341a"}}>Demo</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/install" style={{backgroundColor: "#59af95"}}>Install graphErr</Nav.Link>
    </Nav.Item>
    </Nav>
  )
}