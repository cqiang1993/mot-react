import React,{Component} from 'react';
import {Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';

class Nav extends Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}
export default Nav;