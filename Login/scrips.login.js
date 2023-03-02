var BTN = document.getElementById("btn1")

BTN.addEventListener('click', inicioSesion);


async function inicioSesion() {
  let texto = document.getElementById("pass-user").value;
  
  alert(texto);
  const result = await checkOut(texto);
  if (result == true){
    alert('Ingresando!!!');
    document.location.href = "../index.html"
  }else{
    alert('no se puede mi loco');
  }
    
  
 
}


function checkOut (checkpass){
  const pass = "1234";
  if (checkpass == pass){
    return true
  }else{
    return false
  }

}
