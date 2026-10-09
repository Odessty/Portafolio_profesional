// Animar barras de habilidad al bajar la página (scroll)
window.addEventListener('scroll', function() {
  const barras = document.querySelectorAll('#listaSkills .progress-bar');
  
  barras.forEach(function(barra) {
    // Detecta si la barra ya apareció en la pantalla
    const posicion = barra.getBoundingClientRect().top;
    const altoPantalla = window.innerHeight;

    if (posicion < altoPantalla - 50) {
      barra.style.width = barra.dataset.valor + '%';
    }
  });
});

// Enviar formulario por correo
const miCorreo = 'medinasebas038@gmail.com';

document.getElementById('formContacto').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener los valores de los inputs directamente por su id o name
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  const cuerpo = mensaje + '\n\nDe: ' + nombre + ' (' + email + ')';

  // Abrir la aplicación de correo
  window.location.href = 'mailto:' + miCorreo + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
});