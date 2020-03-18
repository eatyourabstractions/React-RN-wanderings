import React, {Component, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default function AppNavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(prev => !prev)
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={()=> toggle() } />
                    <Collapse isOpen={isOpen}  navbar>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink href="https://github.com/eatyourabstractions">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
        </div>
    )

}