
function carregarUsuarios() {
    const userTable = document.getElementById("userTable");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    userTable.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Email</th>
        </tr>
    `;

    if (usuarios.length > 0) {
        usuarios.forEach(usuario => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${usuario.name}</td><td>${usuario.email}</td>`;
            userTable.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="2">Nenhum usuário cadastrado.</td>`;
        userTable.appendChild(row);
    }
}


function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
}


function sair() {
    window.location.href = "index.html";
}


window.onload = carregarUsuarios;
