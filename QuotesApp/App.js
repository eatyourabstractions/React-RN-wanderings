
import Search from './Search';
import QuotesList from './QuotesList';
import SavedQuotes from './SavedQuotes'
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
      this.updateMyQuotes=this.updateMyQuotes.bind(this);
      this.saveQuotes=this.saveQuotes.bind(this);
      this.delFromSaved=this.delFromSaved.bind(this);
      this.modHeader=this.modHeader.bind(this);
  this.state = {
    shows: <Text>mike</Text>,
    page:1,
    firstpageactive:true,
    secondpageactive:false,
      quotes: [],
      saved: [],
      headerText: "Quote-O-Matic"

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
                 onPress= {this.firstpage}><Text>Search</Text></Button>
               <Button  active={this.state.secondpageactive}
                 onPress= {this.secondpage}><Text>Saved Quotes</Text></Button>
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
  
  modHeader(keyw){
      this.setState({headerText: keyw})
  }
  
  saveQuotes(aQuote){
      this.setState({saved: [...this.state.saved, aQuote]})
  }

delFromSaved(aQuote){
     for( var i = 0; i < this.state.saved.length; i++){ 
       if ( this.state.saved[i].id === aQuote.id) {
           this.state.saved.splice(i, 1)
         this.setState({saved: [...this.state.saved]})
       }
     }
          
}
  
updateMyQuotes(quotesArr){
    this.setState({quotes: quotesArr})
}  
  
_renderComponent(){
  if(this.state.page === 1){
    return(<>
     <Search updateMyQuotes={this.updateMyQuotes} modHeader={this.modHeader}/>
     <QuotesList 
           myQuotes={this.state.quotes} 
           saveQuotes={this.saveQuotes} 
           header={this.state.headerText}/>
           </>
        )
            
  }else{
    return <SavedQuotes saved={this.state.saved} delFromSaved={this.delFromSaved}/> //... Your Component 2 to display
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