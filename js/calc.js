/* DATOS DEL USUARIO */
let userHeight = 170;
let userWeight = 65;
let userIMC = 0;
let userActivity = 1.2;
let userGender = '';
let userAge = 25;
let userName = '';

/* VARIABLES PARA CÁLCULO DEL IMC */
let resultCalcIMC = 0;
let resultIMC = '';

/* VARIABLES PARA CÁLCULO DEL PESO IDEAL */
let idealWeight = 0;

/* VARIABLES PARA CÁLCULO DEL METABOLISMO */
let resultMetabolic = 0;

/* FUNCIÓN PARA CALCULAR EL IMC */
function calcIMC(height, weight) {

  resultCalcIMC = weight / ((height / 100) * (height / 100));
  userIMC = resultCalcIMC - (resultCalcIMC % .01);

  //console.log(`Valor IMC: ${userIMC}`)

}

/* ejecutar CÁLCULO DEL IMC */
//calcIMC(userHeight, userWeight);

/* FUNCIÓN PARA VALIDAR EL IMC */
function validateIMC(imc) {

  if (imc < 18.50) {
    resultIMC = 'Bajo peso';
  } else if (imc >= 18.50 && imc <= 24.99) {
    resultIMC = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.99) {
    resultIMC = 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.99) {
    resultIMC = 'Obesidad grado 1';
  } else if (imc >= 35 && imc <= 39.99) {
    resultIMC = 'Obesidad grado 2';
  } else {
    resultIMC = 'Obesidad grado 3';
  }

  //console.log(`Tipo IMC: ${resultIMC}`)

}

/* ejecutar VALIDACIÓN DEL IMC */
//validateIMC(userIMC);

/* FUNCIÓN PARA CALCULAR EL PESO IDEAL */
function calcWeight(height, gender) {

  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MASCULINO') {
    idealWeight = (height - 100) * 0.90;
  } else {
    idealWeight = (height - 100) * 0.85;
  }

  //console.log(`Peso ideal: ${idealWeight}kg`)

}

/* ejecutar CÁLCULO DEL PESO IDEAL */
//calcWeight(userHeight, userGender);

/* FUNCIÓN PARA CALCULAR EL METABOLISMO */
function calcMetabolic(height, weight, activity, gender, age) {

  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MASCULINO') {
    resultMetabolic = parseInt(((13.75 * weight) + (5 * height) - (6.76 * age) + 66.5) * activity);
  } else {
    resultMetabolic = parseInt(((9.56 * weight) + (1.85 * height) - (4.68 * age) + 665) * activity);
  }

  //console.log(`Gasto calórico: ${resultMetabolic} calorías`)

}

/* ejecutar CÁLCULO DEL METABOLISMO */
//calcMetabolic(userHeight, userWeight, userActivity, userGender, userAge);

/* EJECUTAR CÁLCULOS DESPUÉS DE QUE EL USUARIO ENVÍE LOS DATOS */
function calcAll() {

  /* ejecutar CÁLCULO DEL IMC */
  calcIMC(userHeight, userWeight);

  /* ejecutar VALIDACIÓN DEL IMC */
  validateIMC(userIMC);

  /* ejecutar CÁLCULO DEL PESO IDEAL */
  calcWeight(userHeight, userGender);

  /* ejecutar CÁLCULO DEL METABOLISMO */
  calcMetabolic(userHeight, userWeight, userActivity, userGender, userAge);

}
