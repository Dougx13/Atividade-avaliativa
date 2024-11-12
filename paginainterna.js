
function logar() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      const loginEmail = document.getElementById("loginEmail").value;
      const loginPassword = document.getElementById("loginPassword").value;

     
      if (loginEmail === "admin@gmail.com" && loginPassword === "1234admin") {
          alert("Bem-vindo, administrador!");
          localStorage.setItem("storedEmail", loginEmail); 
          window.location.replace("main.html");
         
          let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
          const usuarioEncontrado = usuarios.find(user => user.email === loginEmail && user.password === loginPassword);

          if (usuarioEncontrado) {
              alert("Login bem-sucedido!");
              localStorage.setItem("storedEmail", loginEmail); 
              window.location.replace("principal.html"); 
          } else {
              alert("Email ou senha incorretos.");
          }
      }
  });
}


function verificarUsuarioLogado() {
  const emailLogado = localStorage.getItem("storedEmail");
  
  if (!emailLogado) {

      location.href = 'index.html';
  } else {
   
      const msgUsuario = document.getElementById('msgusuario');
      if (msgUsuario) {
          msgUsuario.innerText = emailLogado;
      } else {
          console.error("Elemento 'msgusuario' não encontrado no HTML.");
      }
  }
}


function sair() {
  localStorage.removeItem('storedEmail'); 
  location.href = 'index.html'; 
}


window.onload = verificarUsuarioLogado;
