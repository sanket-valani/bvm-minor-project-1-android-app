import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header({ title, navigation }){
  return(
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height: 60,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#0984e3',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  iconMenu: {
    position: 'absolute',
    left: 16,
  },
  iconProfile: {
    position: 'absolute',
    right: 16,
  }

});