import * as React from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';

export function WebViewScreen({ link, webviewModalState, changeWebviewModalState }) {
  return(
    <Modal
      animationType="fade"
      transparent={true}
      visible={webviewModalState}
      onRequestClose={() => changeWebviewModalState(false) }
      style={{ marginTop: 60, marginBottom: 60, }}
    >
      <WebView 
        source={{ uri:link }}
        style={{ marginTop: 60, marginBottom: 60, alignItems:'center', justifyContent:'center', flex:1, borderWidth:100 }}
      />          
    </Modal>

  )
}