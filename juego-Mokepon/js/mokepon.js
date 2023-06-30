function iniciarJuego() {
  let botontMascotaJugador = document.getElementById("boton-mascota");
  botontMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  alert("SELECCIONASTE TU MASCOTA");
}

window.addEventListener("load", iniciarJuego);
