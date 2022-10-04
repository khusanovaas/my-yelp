import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "../styles/header.css";

export default function YelpNavbar({signOut}){
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container >
            <Navbar.Brand bg="light" fixed="bottom">restaurant</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Button className="signout" onClick={signOut}>sign out</Button>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}