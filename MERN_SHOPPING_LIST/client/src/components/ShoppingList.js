import React, { useState } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { v4 as uuid } from 'uuid';

export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Steak'},
        {id: uuid(), name: 'Water'}
    ]);
    return (
        <Container>
            <Button 
            color="dark" 
            style={{marginBottom: '2rem'}}
            onClick={() => {
                const name = prompt('enter name')
                if(name){
                    setItems([...items, {id: uuid(), name: name}])
                }
            }}> Add Item 
            </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button 
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    setItems([...items.filter(it => it.id !== id )])
                                }}>&times;</Button>
                                {name}
                                </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )

}