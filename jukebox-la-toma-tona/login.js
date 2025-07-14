
function doLogin(){
  const u=document.getElementById('usr').value;
  const p=document.getElementById('pwd').value;
  if(u==="admin"&&p==="1234"){
    document.getElementById('loginDiv').style.display="none";
    document.getElementById('adminDiv').style.display="block";
  } else document.getElementById('loginMsg').innerText="Credenciales inválidas";
}
function logout(){
  document.getElementById('adminDiv').style.display="none";
  document.getElementById('loginDiv').style.display="block";
}
