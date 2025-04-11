document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("Usuario").value;
        const contraseña = document.getElementById("Contraseña").value;

        // Puedes cambiar estos valores por otros si quieres
        const usuarioValido = "admin";
        const contraseñaValida = "1234";

        if (usuario === usuarioValido && contraseña === contraseñaValida) {
            alert("Inicio de sesión exitoso");
            window.location.href = "profile.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});