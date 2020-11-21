import * as React from 'react';
import { Button, View, SafeAreaView } from 'react-native';
import { signInWithGoogle } from '../Auth/GoogleAuthentication';

export default function GroupChatSignIn({navigation}){
  return(
    <SafeAreaView>
      <View style={{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Button 
          title="SignIn with Google"
          onPress={()=>{
            signInWithGoogle({client:"expo"}).then((res) => {
              global.ID_TOKEN = res.idToken;
              navigation.push("groupchat",{ user:res });
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}