
import Search from './Search';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text, Item, Input } from 'native-base';

export default class tut4 extends Component {
  constructor(props) {
  super(props);
  this.firstpage=this.firstpage.bind(this);
  this.secondpage=this.secondpage.bind(this);
      this._renderComponent=this._renderComponent.bind(this);
  this.state = {
    shows: <Text>mike</Text>,
    page:1,
    firstpageactive:true,
    secondpageactive:false,

  } ;
}
  render() {

    return (
      <Container>
         <Header>
           <Left>
  
           </Left>
           <Body>
             <Segment>
               <Button  active={this.state.firstpageactive}
                 onPress= {this.firstpage}><Text>Puppies</Text></Button>
               <Button  active={this.state.secondpageactive}
                 onPress= {this.secondpage}><Text>Cubs</Text></Button>
             </Segment>
           </Body>
           <Right>

           </Right>
         </Header>
         <Content padder>
       
          {this._renderComponent()}
         </Content>
       </Container>

    );
  }
_renderComponent(){
  if(this.state.page === 1){
    return <Search/>
            
  }else{
    return <Text>baez</Text> //... Your Component 2 to display
  }
}
  firstpage(){
  this.setState({
    page:1,
  firstpageactive:true,
secondpageactive:false})
  }

  secondpage(){
    this.setState({page:2,
    firstpageactive:false,
  secondpageactive:true})
  }



}



// firstpage() {
//    alert ("hello")
//  }


AppRegistry.registerComponent('tut4', () => tut4);