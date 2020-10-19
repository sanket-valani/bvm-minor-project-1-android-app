import * as React from 'react';
import { Button, View, Text, SafeAreaView, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function home({navigation}) {
  
  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#d2dae2' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{paddingBottom:20}}>
          <TouchableOpacity 
            style={{
              padding:20,
              borderColor: '',
              borderWidth:1,
              borderRadius:20,
              width:350,
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor:'#3dc1d3'
            }} 
            onPress={()=>{ console.log(" updates ");} }> 
            <Text style={{fontSize:20}}> Updates </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom:20}}>
          <TouchableOpacity 
            style={{
              padding:20,
              borderColor: '',
              borderWidth:1,
              borderRadius:20,
              width:350,
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor:'#3dc1d3'
            }} 
            onPress={()=>{ console.log(" current market prices ");} }> 
            <Text style={{fontSize:20}}> Current Market Prices </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom:20}}>
          <TouchableOpacity 
            style={{
              padding:20,
              borderColor: '',
              borderWidth:1,
              borderRadius:20,
              width:350,
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor:'#3dc1d3'
            }} 
            onPress={()=>{ console.log(" chatbot ");} }> 
            <Text style={{fontSize:20}}> Chat bot </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}