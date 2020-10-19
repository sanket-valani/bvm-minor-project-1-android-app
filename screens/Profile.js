import * as React from 'react';
import { Button, View, Image, Text, SafeAreaView, Modal, ActivityIndicator, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOutWithGoogle, signInWithGoogle } from '../Auth/GoogleAuthentication';


export function Profile({navigation}){

  const [modalVisible0, changeModalVisible0 ] = React.useState(true);
  const [showSignInOption, changeShowSignInOption ] = React.useState(true);
  const [googleUser, changeGoogleUser ] = React.useState({
    email:'',
    familyName:'',
    givenName:'',
    id:'',
    name:'',
    photoUrl:'https://imgur.com/6P68knb',  
  });

  const popOut = () => {
    navigation.pop();
  }

  const getUserDetails = async()=>{
    let userDetails = await AsyncStorage.getItem("USER_SIGNIN_DETAILS");
    if (userDetails == null || userDetails == undefined){
      return null;
    } else {
      changeShowSignInOption(false);
      return JSON.parse(userDetails);
    }

  }  

  React.useEffect(()=>{
    setTimeout(()=>{
      getUserDetails().then((res)=>{
        if(res != null){
          changeGoogleUser(res.user);
        }
        changeModalVisible0(false);
      })
    },400)
  })


  const ProfileRender = ({navigation}) => {
    return (
      <View>
        <View style={{
          padding:20,
          borderRadius:15,
          borderColor:'#000',
          borderWidth:2
          }}
        >
          <Text style={{fontSize:25, }}> Name : {googleUser.name} </Text>
          <Text style={{fontSize:25, }}> Email : {googleUser.email} </Text>
        </View>

        <View style={{
            padding:20,
            borderRadius:15,
          }}
        >
          <TouchableOpacity 
            style={{
              alignItems: "center",
              backgroundColor: "#DDDDDD",
              padding: 10
            }}
            onPress={() => { 
              signOutWithGoogle({client:"expo"});
              navigation.pop();
              // changeShowSignInOption(true);
            }}
          >
            <Text> Sign Out </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const SignInRender = () => {
    return (
      <View>
        <View style={{
            padding:20,
            borderRadius:15,
          }}
        >
          <TouchableOpacity 
            style={{
              alignItems: "center",
              backgroundColor: "#DDDDDD",
              padding: 10
            }}
            onPress={() => { 
              signInWithGoogle({client:"expo"}).then((res) => {
                changeGoogleUser(res.user);
              });
              changeShowSignInOption(false);
            }}
            >
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#d2dae2' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Modal  
          animationType="none"
          transparent={true}
          visible={modalVisible0}
          onRequestClose={()=>{changeModalVisible0(false)}}
        >
          <View style={{
            flex: 1,
            backgroundColor: '#dff9fb',
            justifyContent: 'center',
            borderColor: '#000',
            alignItems: 'center',
            }}>
            <View style={{
              marginTop: '30%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ActivityIndicator size={60} color="#0097e6" />
            </View>
          </View>
        </Modal>  
            
        <View style={{paddingBottom:40}}>
          <Image
            style={{   
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
            source={{
              uri: googleUser.photoUrl,
            }}
          />
        </View>

        { showSignInOption == true ? <SignInRender/> : <ProfileRender navigation={navigation}/> }

      </View>
    </SafeAreaView>
  );  


}
