import * as Google from "expo-google-app-auth";
import { AsyncStorage } from "react-native";
import { GoogleAuthentication_js } from "../credentials";

const ANDROID_CLIENT_ID = GoogleAuthentication_js.ANDROID_CLIENT_ID;
const EXPO_CLIENT_ID = GoogleAuthentication_js.EXPO_CLIENT_ID;
let CLIENT_ID = "";

export const signInWithGoogle = async ( request ) => {
  if(request.client === "expo"){
    CLIENT_ID = EXPO_CLIENT_ID;
  } else if ( request.client === "android") {
    CLIENT_ID = ANDROID_CLIENT_ID;
  } else {
    return  {error: true, message: "Invalid request type. Request type can be expo or android"};
  }

  try {
    const result = await Google.logInAsync({
      androidClientId: CLIENT_ID,
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      console.log("success : \n", result);
      AsyncStorage.setItem("USER_SIGNIN_DETAILS",JSON.stringify(result)); 
      return result;
    } else {
      return { error: false, success: false, message: "Login process was cancelled"};
    }
  } catch (e) {
    return  {error: true, message: e};
  }

};

export const signOutWithGoogle = async ( request ) => {
  if(request.client === "expo"){
    CLIENT_ID = EXPO_CLIENT_ID;
  } else if ( request.client === "android") {
    CLIENT_ID = ANDROID_CLIENT_ID;
  } else {
    return  {error: true, message: "Invalid request type. Request type can be expo or android"};
  }

  AsyncStorage.removeItem("USER_SIGNIN_DETAILS");

};
