import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect}from 'react-redux';
import { addItem} from '../actions/itemActions';
import { v4 as uuid } from 'uuid';


function ItemModal(props){
    let initialState = {
        modal: false,
        name: ''
    }
    const [state, setState] = useState(initialState);

    const toggle = () => {
        setState({...state, modal: !state.modal})
    }

    const onChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: state.name
        }
        props.addItem(newItem);
        toggle();
    }
    return (
        <div>
            <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => toggle()}
            >Add Item</Button>
            <Modal
            isOpen={state.modal}
            toggle={() => toggle()}
            >
                <ModalHeader toggle={() => toggle()}>
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add shopping litem"
                            onChange={(e) => onChange(e)} />
                            <Button
                            color="dark"
                            style={{marginTop: '2rem'}}
                            block
                            >Add item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </div>

    )


}

function mapStateToProps(state) {
    return { 
        item: state.item
    }
  } 

export default connect(mapStateToProps, { addItem })(ItemModal)