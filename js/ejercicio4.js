const obtenerFecha = () => {
  const parrafoFecha = document.querySelector(".parrafoFecha");

  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const fecha = new Date();
  let dia = dias[fecha.getDay()];
  let numDia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();

  parrafoFecha.innerHTML = `${dia} ${numDia} de ${mes} del ${anio}`;
};

const obtenerHora = () => {
  const parrafoHora = document.querySelector(".parrafoHora");

  const hora = new Date();
  let horaHoy = hora.getHours();
  let minHoy = hora.getMinutes();
  let segHoy = hora.getSeconds();

  if (horaHoy < 10) {
    horaHoy = "0" + horaHoy;
  }
  if (minHoy < 10) {
    minHoy = "0" + minHoy;
  }
  if (segHoy < 10) {
    segHoy = "0" + segHoy;
  }

  if (horaHoy > 0 && horaHoy < 12) {
    parrafoHora.innerHTML = `${horaHoy} : ${minHoy} : ${segHoy} AM`;
  } else if (horaHoy > 12 && horaHoy < 24) {
    parrafoHora.innerHTML = `${horaHoy} : ${minHoy} : ${segHoy} PM`;
  }
};

setTimeout(obtenerFecha, 1000);
setInterval(obtenerHora, 1000);
