import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//  1)================================
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
//  1)================================
class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        
      };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.openDrawer()}
                    
                />

            </View>
        );
    }
}

class DetailsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Details',
        
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




            </View>
        );
    }
}

// 2)-3)======================================
const Myroute = createDrawerNavigator(
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


