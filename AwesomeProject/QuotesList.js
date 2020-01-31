import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import { List,
    ListItem,
    Content,
        Container,
        Header
       } from 'native-base'

export default class QuotesList extends Component {
    
    constructor(props){
        super(props);

    }
    
  

  render() {
          this.props.myQuotes.map(x => console.log('quotelist: '+ x.id))

    return (
        <Container>
        <Header />
        <Content>
          <List
            dataArray={this.props.myQuotes}
            renderRow={(guest) =>
              <ListItem>
                <Text>{guest.title}</Text>
              </ListItem>
            }
          >
            
          </List>
        </Content>
      </Container>
    );
  }
}

  function Item({ title }) {
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
});

//<FlatList
  //      data={this.props.myQuotes}
    //    renderItem={({ item }) => <Item title={item.title} />}
      //  keyExtractor={item => item.id}
      ///>
