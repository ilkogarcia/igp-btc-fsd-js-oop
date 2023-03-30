// método para calcular el perímetro
const perimetro = (form) => {
    console.log(form.inputbox.value);
    let p = 2 * Math.pi * parseInt(form.inputbox.value);
    alert ("El perímetro del círculo es", p);
}

// método para calcular el área
// const area = (r) => {
//     let a = Math.pi * (r ** 2);
//     document.write(`El área del círculo es ${a}`);
//     return a;
// }
