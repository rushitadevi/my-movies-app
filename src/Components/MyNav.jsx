import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

  class MyNav extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          filterMovie:""
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div className="container-fluid">
              <div>
              <Navbar  dark expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Browse</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          </div>
          </div>
        );
      }
  }
  
  export default MyNav;