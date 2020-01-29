import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Text, Item, Input } from 'native-base';




 class Search extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (<View>
                <Input placeholder="Search... Hit enter after Typing"></Input>
                </View>
        )
    }
    
    
}

export default Search