import './headerbar.css';
import {Container, Navbar} from 'react-bootstrap';




function HeaderBar() {
     return (
       <div className="Main">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
       </div>
     );
   }
   
   export default HeaderBar;