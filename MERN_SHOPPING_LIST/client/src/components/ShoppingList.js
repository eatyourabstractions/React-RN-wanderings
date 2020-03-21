import React, {  useEffect } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types';


function ShoppingList(props){
    const Items = props.item.items

    useEffect(() => {
        props.getItems()
      }, []);

      const onDeleteClick = (id) =>{
          props.deleteItem(id)
      }
  
    return (
        <Container>
            
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {Items.map(({_id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button 
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => onDeleteClick(_id)}>&times;</Button>
                                {name}
                                </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )

}

ShoppingList.propTypes = {
    deleteItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return { 
        item: state.item
    }
  } 

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);