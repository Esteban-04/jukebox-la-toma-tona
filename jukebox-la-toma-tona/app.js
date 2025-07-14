
const firebaseConfig = {
  apiKey: "AIzaSyB_GJ50MkykMuuOrDaq42AArHN6wtygSFw",
  authDomain: "jukebox-web-1adee.firebaseapp.com",
  projectId: "jukebox-web-1adee",
  storageBucket: "jukebox-web-1adee.appspot.com",
  messagingSenderId: "161626671060",
  appId: "1:161626671060:web:5efa8dd1f7108884173841"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addSong(){
  const n=document.getElementById('songInput').value.trim();
  if(!n)return;
  db.collection("songs").add({name:n,timestamp:firebase.firestore.FieldValue.serverTimestamp()});
  document.getElementById('message').innerText="✅ Añadida!";
  setTimeout(()=>document.getElementById('message').innerText="",2000);
}

let songListEl;
if(songListEl=document.getElementById('songList')){
  db.collection("songs").orderBy("timestamp").onSnapshot(s=> {
    songListEl.innerHTML="";
    s.forEach(doc=>{
      const li=document.createElement('li');
      li.textContent=doc.data().name;
      const play=document.createElement('button');
      play.textContent="▶️"; play.onclick=()=>window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(doc.data().name)}`);
      const del=document.createElement('button');
      del.textContent="🗑️"; del.onclick=()=>db.collection("songs").doc(doc.id).delete();
      li.append(play,del);
      songListEl.append(li);
    });
  });
}
