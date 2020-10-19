import * as React from 'react';
import { Button, View, Image, Text, SafeAreaView } from 'react-native';


export default function Second({navigation}){
  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#d2dae2' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={{padding:10, fontSize:20}} >
          Updates (Static Details) here 
        </Text>
      </View>
    </SafeAreaView>
  );
}