import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header({ title, navigation }){

  const openMenu = () => {
    navigation.openDrawer();
  }
  const openProfile = () => {
    navigation.navigate('Profile');
  }
  
  return(
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.iconMenu} />
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <MaterialIcons name='account-circle' size={32} onPress={openProfile} style={styles.iconProfile} />
        {/* // ! Some weired icon, styles not affecting here
        */}
        {/* <MaterialCommunityIcons name='github-face' size={28} onPress={openProfile} stlye={styles.iconProfile} /> */}

      </View>
    </SafeAreaView>
  )
}

export function ProfileHeader({ title, navigation }){

  const goBack = () => {
    navigation.pop();
  }
  
  return(
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={goBack} style={styles.iconMenu} />
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

    borderWidth: 1,
    borderColor: '#4cd137',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,

    // borderColor: '#00a8ff',
    // borderWidth:1,
  },
  iconMenu: {
    position: 'absolute',
    left: 16,
  },
  iconProfile: {
    position: 'absolute',
    // left:25,
    right: 16,
  }

});