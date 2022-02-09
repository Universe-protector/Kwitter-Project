//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB3BCf3h2MStTZduis4vJVFhwZLMi4WsCk",
      authDomain: "kwitter-a9d83.firebaseapp.com",
      databaseURL: "https://kwitter-a9d83-default-rtdb.firebaseio.com",
      projectId: "kwitter-a9d83",
      storageBucket: "kwitter-a9d83.appspot.com",
      messagingSenderId: "271009861111",
      appId: "1:271009861111:web:4d813acd4f6fb2fa51b2f2"
    };
  
    // Initialize Firebase
    
      
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
childKey=childSnapshot.key;
childData=childSnapshot.val();
//End code
      } });  }); }
getData();

function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  