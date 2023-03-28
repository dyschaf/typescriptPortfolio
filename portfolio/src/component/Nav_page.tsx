import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Nav_page (){
    return(
    <div className='fixed'>
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">DOVID SCHAFFEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/#about">ABOUT</Nav.Link>
            <Nav.Link href="/#project">PROJECTS</Nav.Link>
            <Nav.Link href="/#contact">CONTACT</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        // <nav>
        //     <h3>DOVID SCHAFFEL</h3>
        //     <div>
        //         <ul>
        //             <li>
        //                 <a href="/">HOME</a>
        //             </li>
        //             <li>
        //                 <a href="#project">PROJECTS</a>
        //             </li>
        //             <li>
        //                 <a href="#contact">CONTACT</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}
export default Nav_page