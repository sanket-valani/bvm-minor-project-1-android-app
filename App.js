import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from './screens/Home';
import { Profile } from './screens/Profile';
import Second from './screens/Second'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ProfileHeader } from './shared/Header.js';


const homeStack = createStackNavigator();
function HomeStack() {
  return (
    <homeStack.Navigator headerMode="screen" >
      <homeStack.Screen 
        name="Home" 
        component={Home}
        options={({navigation})=>({
          header: () => <Header title='Home' navigation={navigation}/>
        })}
      />
      <homeStack.Screen 
        name="Profile" 
        component={Profile}
        options={({navigation})=>({
          header: () => <ProfileHeader title='Profile' navigation={navigation}/>
        })}
      />
    </homeStack.Navigator>
  );
}

const secondStack = createStackNavigator();
function SecondStack() {
  return (
    <secondStack.Navigator>
      <secondStack.Screen 
        name="Updates" 
        component={Second} 
        options={({navigation})=>({
          header: () => <Header title='Updates' navigation={navigation}/>
        })}
      />
    </secondStack.Navigator>
  );
}



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const screens = [ 
    { page_index: 1, name: "Home" }, 
    { page_index: 2, name: "Updates" },
    { page_index: 3, name: "Profile" }
  ];

  return (
    <DrawerContentScrollView {...props}>
        <View>
          <DrawerItem 
            label= {({ focused, color }) => <Text style={{ color }}> {screens[0].name} </Text>} 
            onPress= {()=>{props.navigation.navigate('Page-1')}} 
          />
          <DrawerItem 
            label= {({ focused, color }) => <Text style={{ color }}> {screens[1].name} </Text>} 
            onPress= {()=>{props.navigation.navigate('Page-2')}} 
          />
        </View>
    </DrawerContentScrollView>
  );
}


function DrawerNavigation() {
  
  return (
    <Drawer.Navigator
      drawerType={'slide'}
      edgeWidth={250}
      drawerStyle={{
        backgroundColor: '#dff9fb',
        width: 300,
      }}
      drawerContent={props => <CustomDrawerContent {...props} /> }
      drawerContentOptions={{
        activeTintColor: '#353b48',
        activeBackgroundColor: '#9c88ff',
        itemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen name="Page-1" component={HomeStack} />
      <Drawer.Screen name="Page-2" component={SecondStack} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}