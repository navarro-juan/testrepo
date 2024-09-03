let Grocery1;
let Grocery2;
let Grocery3;

function calculatetotal (){
 Grocery1 = parseFloat(document.getElementById('Grocery-1').value);
 Grocery2 = parseFloat(document.getElementById('Grocery-2').value);
 Grocery3 = parseFloat(document.getElementById('Grocery-3').value);
let total = Grocery1 + Grocery2 + Grocery3;

document.getElementById('result').innerText = `The total is: ${total}`;

}
