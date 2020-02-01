import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Text, Item, Input } from 'native-base';




 class Search extends Component{
    constructor(props){
        super(props);
        
        this.handleShuffle=this.handleShuffle.bind(this);
        this.state = { 
            famousNames: [
                 "Scooby Doo",
                 "Bruce Wayne",
                 "Denzel W",
                 "Justin Trudeau",
                 "Bertrand Russell",
                 "muhammad Ali",
                 "M. Matos",
                 "Siddharta Gautama",
                 "Joaquin Guzman loera",
                 "Gepetto"
            ]
                    }
     
    }
     handleShuffle(){
         this.setState({famousNames: this.shuffle(this.state.famousNames)})
     }
     shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
     
     
       async getQuotes(txt){
           this.props.modHeader(txt)
        let end = Math.floor((Math.random() * 10) + 1);
          let myQuotes = []
          let myrange = this.range(1,end)
          this.handleShuffle()
           let names = this.state.famousNames
        console.log('============================')
        for(const n in myrange){
            console.log('call number: ' + myrange[n])
            fetch('https://jsonplaceholder.typicode.com/todos/' + myrange[n])
            .then((res) => res.json())
            .then((x) => myQuotes.push({id: x.id,title: x.title, author: names[n]}))
            .then(() => console.log('size of mq: '+ myQuotes.length))
            .then(() => {
                if(myQuotes.length === myrange.length){
                this.props.updateMyQuotes(myQuotes)
                console.log('============================')
                }    
            })

            
           
               
        }
        
        
     }
   
                  
                  
    
    render(){
        return (<View>
                <Input placeholder="Search... Hit enter after Typing"
                // (ev)=> this.getQuotes(ev.nativeEvent.text)
                onSubmitEditing={(ev)=> this.getQuotes(ev.nativeEvent.text)}
                />
                </View>
        )
    }
    
    
}

export default Search