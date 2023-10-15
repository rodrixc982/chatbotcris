/* VARIABLES */

let userData = [];
let userDataControl = [];
let isTyping = false;

const areaMessages = document.getElementById('area-messages');

const inputMessage = document.getElementById('message');
const sendMessage = document.getElementById('send');

/* CONTROL DE ESCRITURA DEL BOT */
function controlTyping() {
  if (isTyping) {
    document.getElementById('typing').classList.remove('no-typing');
    document.getElementById('typing').classList.add('is-typing');
  } else {
    document.getElementById('typing').classList.remove('is-typing');
    document.getElementById('typing').classList.add('no-typing');
  }
}

/* ESCRIBIR */

inputMessage.addEventListener("input", _ => {
  if (inputMessage.value.length > 0) {
    sendMessage.style.background = '#63E2DB'
  } else {
    sendMessage.style.background = '#181E2A'
  }
});

inputMessage.addEventListener("keyup", event => {
  if (event.code === 'Enter') {
    event.preventDefault();
    obtenerDatos();
  }
});

/* DESPLAZAMIENTO */

function autoDesplazamiento() {
  const alturaPagina = document.body.scrollHeight;
  window.scrollTo(0, alturaPagina);
}

function desplazarDiv() {
  areaMessages.scrollTo(0, 10000);
}

/* OBTENER DATOS DEL USUARIO */

function obtenerDatos() {

  if (inputMessage.value != '' && inputMessage.value != undefined && inputMessage.value != null) {
    userData.push(inputMessage.value);
    userDataControl.push(inputMessage.value);
    inputMessage.value = '';
    sendMessage.style.background = '#181E2A'
    controlInteraccion();
  }
}

/* CONFIGURAR DATOS DEL USUARIO */

function configurarDatos() {
  let nivelActividad = userData[5];
  let comparar = nivelActividad.toUpperCase();
  switch (comparar) {
    case 'Ninguna':
      userData[5] = 1.2;
      break;
    case 'Leve':
      userData[5] = 1.375;
      break;
    case 'Moderada':
      userData[5] = 1.55;
      break;
    case 'Intensa':
      userData[5] = 1.725;
      break;
  }
}

function cargarDatos() {
  userName = userData[0];
  userGender = userData[1];
  userWeight = parseInt(userData[2]);
  userHeight = parseInt(userData[3]);
  userAge = parseInt(userData[4]);
  userActivity = userData[5];
  calcularTodo();
}

/* INICIAR INTERACCIÓN */
function iniciarInteraccion() {

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">Hola, soy CrisIA y estoy aquí para ayudarte a calcular tu IMC, peso ideal y gasto calórico. &#128170&#128526</p><br>`;
    isTyping = true;
    controlTyping();
  }, 1000);

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">¿Cómo puedo llamarte?</p>`;
    isTyping = false;
    controlTyping();
    autoDesplazamiento();
  }, 2000);

}

iniciarInteraccion();

/* CONTROL DE INTERACCIÓN */

function controlInteraccion() {

  /* NOMBRE DE USUARIO */
  if (userDataControl[0] != null) {
    areaMessages.innerHTML += `<p class="user-message>Puedes llamarme ${userData[0]}</p>`;
    userDataControl[0] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">De acuerdo, ${userData[0]}, necesito algunas informaciones para hacer los cálculos.</p><br>`;
      desplazarDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">¿Cuál es tu género? Para ser más preciso en los cálculos, necesito esta información. Por favor, escribe "<span class="info">Masculino</span>" o "<span class="info">Femenino</span>".</p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
    }, 6000);
  }

  /* GÉNERO DEL USUARIO */
  if (userDataControl[1] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[1]}</p>`;
    userDataControl[1] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Bien, ¿cuántos kilogramos pesas? <span class="example">Ejemplo: 65</span></p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
    }, 3000);
  }

  /* PESO DEL USUARIO */
  if (userDataControl[2] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[2]} Kg</p>`;
    userDataControl[2] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Y ¿cuál es tu altura en centímetros? <span class="example">Ejemplo: 170</span></p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
    }, 3000);
  }

  /* ALTURA DEL USUARIO */
  if (userDataControl[3] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[3]} cm</p>`;
    userDataControl[3] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Bien, falta poco. ¿Cuántos años tienes? <span class="example">Ejemplo: 25</span></p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
    }, 3000);
  }

  /* EDAD DEL USUARIO */
  if (userDataControl[4] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[4]} años</p>`;
    userDataControl[4] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">¡Genial! Por último, necesito saber cuál es tu nivel de actividad física. Por favor, escribe una de las siguientes opciones:</p><br>`;
      desplazarDiv();
    }, 4000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">Ninguna, Leve, Moderada, Intensa</span></p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
    }, 6000);
  }

  /* NIVEL DE ACTIVIDAD DEL USUARIO */
  if (userDataControl[5] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[5]}</p>`;
    configurarDatos();
    userDataControl[5] = null;
    isTyping = true;
    controlTyping();
    desplazarDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Perfecto, ya tengo toda la información necesaria para hacer los cálculos.</p><br>`;
      cargarDatos();
      desplazarDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Pero antes, una información muy importante, ${userName}:</p><br>`;
      desplazarDiv();
    }, 5000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Los resultados que te mostraré <span class="info">son solo promedios obtenidos a través de fórmulas</span>, así que no debes tomarlos al pie de la letra.</p><br>`;
      desplazarDiv();
    }, 10000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Por lo tanto, ¡es fundamental que consultes a un nutricionista para que te pueda orientar con mayor precisión!</p><br>`;
      desplazarDiv();
    }, 16000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Pero vamos allá, mientras hablaba contigo ya realicé los cálculos aquí... &#128540</p><br>`;
      desplazarDiv();
    }, 19000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Tu IMC es de <span class="info">${userIMC} kg/m² - ${resultIMC}</span></p><br>`;
      desplazarDiv();
    }, 22000);

    setTimeout(function () {
      switch (resultIMC) {
        case 'Bajo peso':
          areaMessages.innerHTML += `<p class="bot-message">Lamentablemente estás por debajo de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          desplazarDiv();
          break;
        case 'Peso normal':
          areaMessages.innerHTML += `<p class="bot-message">¡Felicitaciones, estás dentro de los límites de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128516</span></p><br>`;
          desplazarDiv();
          break;
        case 'Sobrepeso':
          areaMessages.innerHTML += `<p class="bot-message">Lamentablemente estás un poco por encima de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          desplazarDiv();
          break;
        case 'Obesidad de grado 1':
          areaMessages.innerHTML += `<p class="bot-message">Lamentablemente estás por encima de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          desplazarDiv();
          break;
        case 'Obesidad de grado 2':
          areaMessages.innerHTML += `<p class="bot-message">Lamentablemente estás por encima de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          desplazarDiv();
          break;
        case 'Obesidad de grado 3':
          areaMessages.innerHTML += `<p class="bot-message">Lamentablemente estás por encima de tu peso ideal, donde el promedio es de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          desplazarDiv();
          break;
      }
    }, 24000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Si consumes una cantidad estimada de <span class="info">${resultMetabolic} calorías</span> diariamente, mantendrás tu peso actual de <span class="info">${userWeight} Kg</span> (manteniendo también la misma rutina de actividad física).</p><br>`;
      desplazarDiv();
    }, 33000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Si tienes la intención de cambiar tu peso actual, busca a un nutricionista para que pueda elaborar un plan de alimentación con las calorías necesarias para ti.</p><br>`;
      desplazarDiv();
    }, 41000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Bueno, esta es la información que puedo proporcionarte hasta el momento. ¡Espero haber ayudado, ${userName}! &#128521</p><br>`;
      desplazarDiv();
    }, 46000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">¡Muchas gracias por usar CrisIA!</span></p>`;
      isTyping = false;
      controlTyping();
      desplazarDiv();
      //console.log(`Solo para controlar el análisis: ${userGender}`)
    }, 49000);

    setTimeout(function () {
      document.getElementById('area-interaction').innerHTML = '<p class="example">Chat finalizado.</p>'
    }, 50000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="credits">CrisIA fue desarrollado por Cristian Rodriguez. Síguelo en:<br><br><a class="social" href="https://www.linkedin.com/in/rodrixc-tianz-tv-oficial-8a9577204/"><i class="fab fa-linkedin"></i></a><a class="social" href="https://github.com/rodrixc982"><i class="fab fa-github"></i></a><a class="social" href="https://www.instagram.com/rodrixc_tianz_vlog_24/"><i class="fab fa-instagram"></i></a></p>`;
      desplazarDiv();
    }, 51000);
  }

}
