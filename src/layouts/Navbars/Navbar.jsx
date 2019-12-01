import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

    const NavBar = (props) =>  {
        
        const [isOpen, setOpen] = useState(false);
        const  toggle = () => {
        return setOpen(true)
        }

        return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ghost-Composer</NavbarBrand>
            <NavbarToggler onClick={()=> toggle()} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Connexion</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/inscription">
                        Inscription    
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Profile
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
    export default NavBar;