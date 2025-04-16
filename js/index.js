function Sumar(){
    var num1 = parseFloat(document.getElementById('nums1').value);
    var num2 = parseFloat(document.getElementById('nums2').value);
    var resultado = num1 + num2;
    document.getElementById('resul1').innerHTML = "resultado: " + resultado;
}
function Restar(){
    var num1 = parseFloat(document.getElementById('numr1').value);
    var num2 = parseFloat(document.getElementById('numr2').value);
    var resultado = num1 - num2;
    document.getElementById('resul2').innerHTML = "resultado: " + resultado;
}
function Multiplicar(){
    var num1 = parseFloat(document.getElementById('numm1').value);
    var num2 = parseFloat(document.getElementById('numm2').value);
    var resultado = num1 * num2;
    document.getElementById('resul3').innerHTML = "resultado: " + resultado;
}
function Dividir(){
    var num1 = parseFloat(document.getElementById('numd1').value);
    var num2 = parseFloat(document.getElementById('numd2').value);
    if(num2!= 0){
        var resultado = num1 / num2;
        document.getElementById('resul4').innerHTML = "resultado: " + resultado;
    }else{
        alert("No se puede dividir por cero.");
    }
}
function Factorializar(){
    var num = parseFloat(document.getElementById('numero').value);
    var resul=1;
    if(isNaN(num)){
        alert("Ingrese un número válido.");
        return;
    }
    else{
    for(var i = num; i > 0; i--){
        resul=resul*i;
    }
    document.getElementById('resul5').innerHTML = "resultado: " + resul;
}
}
function Verificar(){
    var num = parseFloat(document.getElementById('numero1').value);
        if(num % 2 == 0){
           document.getElementById("resul6").innerHTML="resultado: par";
        } else{
            document.getElementById("resul6").innerHTML="resultado: impar";
        }
    }

