import React, { Component } from 'react';
import {AppRegistry,Text} from 'react-native'
import { Container, Content, Header, Body, Title } from 'native-base';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {apiMiddleware, reducer} from './redux'; // Version can be specified in package.json
const store = createStore (reducer,{},applyMiddleware(apiMiddleware))
store.dispatch({type:'GET_DATA'})
import ImageListItems from './components/ImageListItems'

export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <Container>
                <Header>
                  <Body>
                    <Title><Text>TheWebOps</Text></Title>
                  </Body>
                </Header>
                <ImageListItems />
            </Container>
          </Provider>
        );
      }
    }
AppRegistry.registerComponent('WeatherApp', () => App); 
