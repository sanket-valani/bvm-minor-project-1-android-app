import * as React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import Fire from '../firebase/firebase'
import { useEffect, useState } from 'react';
import { IconButton } from 'react-native-paper'

export default function GroupChat({ navigation, route }){
  const [ messages, updateMessages ] = useState([]);
  const [ user, updateUser ] = useState({
    email:'',
    id:'',
    name:'',
    avatar:'https://imgur.com/6P68knb',  
  })

  useEffect(() => {
    let newUser = route.params.user.user;
    let newUserObj = {
      email: newUser.email,
      id: newUser.id,
      name: newUser.name,
      avatar: newUser.photoUrl,  
    } 
    updateUser(newUserObj)
    Fire.get(message => updateMessages( previous => GiftedChat.append(previous, message)  )   )

    return ()=>{
      Fire.off();
    }
  },[]);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <IconButton icon="send-circle" size={34} color="#0984e3" />
        </View>
      </Send>
    );
  }


  return(
    <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={10} enabled>
      <GiftedChat 
        messages={messages} 
        onSend={Fire.send} 
        user={user}
        onPressAvatar={()=>console.log('todo on press avatar')}
        placeholder="Type here..."
        showUserAvatar
        alwaysShowSend
        scrollToBottom
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderUsernameOnMessage={true}
        />
    </KeyboardAvoidingView>
  )
}