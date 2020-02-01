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

export default class SavedQuotes extends Component {
    
    constructor(props){
        super(props);

    }
    


  

  render() {

    return (
        <Container>
        <Header>
            <Text style={styles.header}>Your Quotes</Text>
        </Header>
        <Content>
          <List
            dataArray={this.props.saved}
            renderRow={(guest) => Item(guest, this.props.delFromSaved)
            }
          >
            
          </List>
        </Content>
      </Container>
    );
  }
}


    function Item(quote, delItem){
        return (
            <View>
            <TouchableHighlight onPress={() => askDel(quote, delItem)}>
                <Card >
                    <CardItem header>
            <Text style={styles.titleText}>{quote.author}</Text></CardItem>
                    <CardItem body><Text>{quote.title}</Text></CardItem>
                </Card>
            </TouchableHighlight>
            </View>
        )
}
    
   function askDel(myQ, delItem){
        Alert.alert(
          'Hey!',
          'Would you like to Delete this item from this List?',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            
            {text: 'OK', onPress: () => delItem(myQ)},
          ],
          {cancelable: false},
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
