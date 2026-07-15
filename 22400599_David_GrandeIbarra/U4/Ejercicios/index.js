//1
let n1=Math.floor(Math.random()*100)+1;
let n2=Math.floor(Math.random()*100)+1;

console.log("Numero1: ",n1);
console.log("Numero2: ",n2);

if(n1===n2){
    console.log("Los numeros son iguales");
}else{
    if(n1>n2){
        console.log("el numero",n1,"es mayor que",n2);
    }else if(n2>n1){
        console.log("el numero",n2,"es mayor que",n1);
    }
}

//2.
var estado=true; 
while(estado){
    let n6 = Math.floor(Math.random()*(5-0+1))+0;
    console.log(n6);
    if(n6==0){
        estado=false;
    }
}




//3.
let n3=Math.floor(Math.random()*(10-2+1))+2;
console.log("El numero generado es:",n3);
for(let i=1; i<=10; i++){
    console.log(`${n3} x ${i} = ${n3*i}`);
}


//4.
var i =0;
var pares=0;
var impares=0;
while(i<10){
    var n4 = prompt("Ingrese un numero entre 1 y 100: ");

    if(n4>=1 && n4<=100){
        if(n4%2==0){
            pares++;
        }else{
            impares++;
        }
    }

    i++;
}

console.log("Cantidad de Numeros pares: ",pares);
console.log("Cantidad de Numeros impares: ",impares);


//5.
var estado=true;
var n5=0;
var comision=0;
while(estado){
     n5=parseInt(prompt("Ingrese numeros entre 5,000 y 30,000"));
    if(n5>=5000 && n5<=30000){
        estado=false;     
    }else{
        console.log("Ingresa un numero valido!!");
    }
}

if(n5<10000){
    comision=(n5*10)/100;
}else if(n5>=10000){
    comision=(n5*15)/100;
}

console.log("la comision por: ",n5," es de: ",comision);

