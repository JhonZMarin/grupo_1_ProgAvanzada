let numeros = [0,1,2,3,4,5,6,7,8,9,10];
console.log (numeros);
numeros.push(11);
console.log (numeros);
numeros.unshift(12);
console.log (numeros);
const lista = numeros.concat([13,14,15]);
console.log (lista);
lista.splice(0,5);
console.log (lista);
lista.shift();
console.log (numeros);
//const posicion = lista.findIndex ((item)=>{
  //  return item === 5;
//});
const posicion = lista.findIndex ((item)=> item === 5);
lista.splice(posicion, 1);
console.log(lista);

const par = lista.find((value)=>(value % 2)===0);
console.log(par);

const numersPares = lista.filter((value)=>(value % 2)===0);
console.log(numersPares);

const listaOrden =lista.sort((a,b)=>{
    return b-a;
});
console.log(listaOrden);
const transPares = numersPares.map((value, index)=>{
    return 'El numero par ' + index+ ' es: '+ value;
});
console.log(transPares);

function mostrarMsg(){
   // alert('Hola Mundo!!');
   const titulo = document.getElementById('tituloH1');
   titulo.style.color = '#00f2f8';
   document.getElementById('tituloH1').innerHTML = 'Hola<i>Mundo<i>!!'
}
