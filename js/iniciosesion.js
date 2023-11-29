
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

            function iniciarSesion() {
                var sUsuario = document.querySelector('#txtUsuario').value;
                var sContrasenna = document.querySelector('#txtContrasenna').value;
                var bAcceso = validarCredenciales(sUsuario, sContrasenna);

                if (bAcceso) {
                    // Redirige a index.html
                    window.location.href = 'cafe.html';
                } else {
                    alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
                }
            }

            function validarCredenciales(pUsuario, pContrasenna) {
                // Aquí deberías tener la lógica para validar las credenciales.
                // Por ejemplo, puedes comparar con un conjunto de credenciales predefinido.
                return pUsuario === 'usuario' && pContrasenna === '123';
            }
        });

