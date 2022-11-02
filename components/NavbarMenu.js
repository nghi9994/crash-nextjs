import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>My Next App</Navbar.Brand>
      <Nav>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/posts" passHref legacyBehavior>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarMenu
