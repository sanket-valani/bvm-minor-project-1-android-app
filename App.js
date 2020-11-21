import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import { Profile } from './screens/Profile';
import GroupChat from './screens/GroupChat';
import ChatBot from "./screens/Chatbot";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './shared/Header.js';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import GroupChatSignIn from './screens/GroupChatSignIn';

console.disableYellowBox = true;

const homeStack = createStackNavigator();
function HomeStack() {
  return (
    <homeStack.Navigator headerMode="screen" >
      <homeStack.Screen 
        name="Home" 
        component={Home}
        options={({navigation})=>({
          header: () => <Header title='Farming Tips' navigation={navigation}/>
        })}
      />
    </homeStack.Navigator>
  );
}

const groupChatStack = createStackNavigator();
function GroupChatStack() {
  return (
    <groupChatStack.Navigator>
      <groupChatStack.Screen 
        name="groupchatsignin" 
        component={GroupChatSignIn} 
        options={({navigation})=>({
          header: () => <Header title='Group Chat Signin' navigation={navigation}/>
        })}
      />
      <groupChatStack.Screen 
        name="groupchat" 
        component={GroupChat} 
        options={({navigation})=>({
          header: () => <Header title='Group Chat' navigation={navigation}/>
        })}
      />
    </groupChatStack.Navigator>
  );
}

const chatbot = createStackNavigator();
function ChatBotStack() {
  return (
    <chatbot.Navigator>
      <chatbot.Screen 
        name="chatbot" 
        component={ChatBot} 
        options={({navigation})=>({
          header: () => <Header title='Chat Bot' navigation={navigation}/>
        })}
      />
    </chatbot.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function TabNaivgation() {
  return (
    <Tab.Navigator
      initialRouteName="updates"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        activeBackgroundColor: '#0984e3',
        inactiveBackgroundColor: '#74b9ff',
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
        }
      }}
    >
      <Tab.Screen
        name="updates"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="groupchatstack"
        component={GroupChatStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chatbot"
        component={ChatBotStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="robot" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNaivgation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}