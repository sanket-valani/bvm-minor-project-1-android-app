import firebase from 'firebase';
import { firbase_js } from "../credentials";

class Fire{
  constructor(){
    this.init()
    this.checkAuth();
  }
  
  init = () => {
    if (!firebase.apps.length){
      firebase.initalizeApp(firbase_js);
    }
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user =>{
      if(!user){
        firebase.auth().signInAnonymously();
      }
    })
  }

  send = messages =>{
    messages.forEach(item =>{
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message)
    })
  }  

  parse = message =>{
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createAt = new Date(timestamp)

    return {
      _id,
      createAt,
      text,
      user
    };
  }

  get = callback => {
    this.db.on("child_added",snapshot => callback(this.parse(snapshot)))
  }

  off(){
    this.db.off();
  }

  get db() {
    return firebase.database.ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid
  }
}

export default new Fire(); 