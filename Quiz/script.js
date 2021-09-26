  
const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. en que contenedor van los plasticos",
    respuestas: {
      a: "  azul",
      b: " verde",
      c: " gris",
      
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. como cuidar el agua",
    respuestas: {
      a: " colocarle ozono al agua",
      b: " cerrar el grifo",
      c: " echarle acido desoxirribonucleico",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "3. como cuidar el gasto de electricidad?",
    respuestas: {
      a: " apagar la luz cuando no se este utilizando ",
      b: " utilizar la luz natural",
      c: " utilizar velas",
      d: " Dejar las luces prendidas aun cuando no se utilizan",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4.  en que contenedor va el papel",
    respuestas: {
      a: " verde",
      b: " azul",
      c: " gris",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "5. en que contenedor van los alimentos organicos",
    respuestas: {
      a: " rojo",
      b: " azul",
      c: " verde",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. que hacer cuando tienes una basura en la calle y no tienes donde tirarla",
    respuestas: {
      a: " tenerla en el bolsillo hasta encontrar un contenedor",
      b: " tirar a la calle",
      c: " colocarsela en el bolso de alguien mas",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "7. para ir de compras que deberias llevar?",
    respuestas: {
      a: " bolsas plasticas",
      b: " bolsa reutilizable",
      c: " llevar un bolso",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. como evitar la contaminacion auditiva",
    respuestas: {
      a: " dejar de gritar",
      b: " no utilizar auriculares",
      c: " vivir lejos de la ciudad",
      d: "desconectar dispositvos electronicos",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "9. Cuales son los problemas del medio ambiente",
    respuestas: {
      a: " cambio climatico",
      b: " congelamiento mundial",
      c: " animales salvajes",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. como se puede extinguir la raza humana?",
    respuestas: {
      a: " muerte de las abejas",
      b: " animales salvajes",
      c: " jugar videojuegos",
       },
    respuestaCorrecta: "a",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);