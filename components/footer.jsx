import { Nav, Image } from 'react-bootstrap';
// import Link from 'next/link';

export default function FooterNav() {
  return (
    <footer className="cntr-footer">

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          Connect with graphErr: 
        </Nav.Item>
        <Nav.Item>
          <a href="https://github.com/oslabs-beta/graphErr" style={{margin: 12 + 'px'}}>
            <Image src="/gh.png" width="22px" height="22px"/>
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="https://linkedin.com/company/grapherr" style={{margin: 12 + 'px'}}>
            <Image src="/li.png" width="26px" height="22px"/>
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="https://deno.land/x/grapherr" style={{margin: 12 + 'px'}}>
            <Image src="/de.png" width="26px" height="26px"/>
          </a>
        </Nav.Item>
      </Nav>
    </footer>
  )
}