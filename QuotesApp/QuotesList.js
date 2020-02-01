import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
    Alert,
    TouchableHighlight
} from 'react-native';

import { List,
    ListItem,
    Content,
        Container,
        Header,
        Card,
        CardItem
       } from 'native-base'

export default class QuotesList extends Component {
    
    constructor(props){
        super(props);

    }
    


  

  render() {
          this.props.myQuotes.map(x => console.log('quotelist: '+ x.id))

    return (
        <Container>
        <Header>
            <Text style={styles.header}>{this.props.header}</Text>
        </Header>
        <Content>
          <List
            dataArray={this.props.myQuotes}
            renderRow={(guest) => Item(guest, this.props.saveQuotes)
            }
          >
            
          </List>
        </Content>
      </Container>
    );
  }
}


    function Item(quote, saveFunc){
        return (
            <View>
            <TouchableHighlight onPress={() => askSave(quote, saveFunc)}>
                <Card >
                    <CardItem header>
            <Text style={styles.titleText}>{quote.author}</Text></CardItem>
                    <CardItem body><Text>{quote.title}</Text></CardItem>
                </Card>
            </TouchableHighlight>
            </View>
        )
}
    
   function askSave(myQ, saveFunc){
        Alert.alert(
          'Hey!',
          'Would you like to save this quote for later?',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            
            {text: 'OK', onPress: () => saveFunc(myQ)},
          ],
          {cancelable: false},
        );
    }
    

  function yo({ title }) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#7995d4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
    header: {
        fontSize: 40,
        color: 'white',
    },
    
    titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

//<FlatList
  //      data={this.props.myQuotes}
    //    renderItem={({ item }) => <Item title={item.title} />}
      //  keyExtractor={item => item.id}
      ///>

// <ListItem>
  //   <Text>{guest.title}</Text>
// </ListItem>
