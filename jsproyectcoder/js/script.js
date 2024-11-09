function calcularSuma() {
    
    let numero = parseInt(prompt("Ingresa un número para calcular la suma desde 1 hasta ese número:"));

  
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor ingresa un número válido mayor a 0.");
        return; 
    }

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    document.getElementById('result').textContent = "La suma es: " + suma;

    if (suma > 5) {
        alert("¡La suma es mayor que 10!");
    } else {
        alert("La suma es menor o igual a 5.");
    }
}
