
function cadastrar() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push({ name, email, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html"; 
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
}


function logar() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (loginEmail === "admin@gmail.com" && loginPassword === "1234admin") {
        alert("Bem-vindo, administrador!");
        window.location.replace("main.html"); 
    } else {
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert("Login bem-sucedido!");
            window.location.replace("principal.html"); 

        } else {
            alert("Email ou senha incorretos.");
        }
    }
});
}
