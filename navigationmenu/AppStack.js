import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
//  1)================================
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';
//  1)================================
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Hello my home',
    }; 
   
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
          }
        />

      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = { 
    
    headerRight: () => <Text>Bye</Text>, 
    headerTitle: () => ( <Button onPress={() => alert('This is a button!')} 
    title="Info" color="black" /> ),
     };
    
  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(this.props.navigation.getParam('otherParam', 'value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />



      </View>
    );
  }
}

// 2)-3)======================================
const Myroute = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    
  },
  {
    initialRouteName: 'Home',
  },

);

const AppContainer = createAppContainer(Myroute);
// 2)- 3)======================================


// 4)======================================
export default class App extends React.Component {
  render() {
    return (
    <AppContainer />
      )
  }
}
// 4)======================================

