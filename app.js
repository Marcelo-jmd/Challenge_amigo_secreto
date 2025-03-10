//Código JS del challenge
let amigos =[];

//Función para agregar amigos a la lista
function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;
    let listaMostrar = document.getElementById("listaAmigos");
    listaMostrar.innerHTML="";
    if (amigoIngresado ==""){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(amigoIngresado);
        console.log(amigos);
        for (i=0;i<amigos.length;i++){
            let nuevoAmigo = document.createElement("li"); //Crea nuevo <li>
            nuevoAmigo.textContent = amigos[i]; // Se le asigna valor
            listaMostrar.appendChild(nuevoAmigo); //Se agrega el nuevo elemento a la <ul>
            
        }
        
        document.getElementById("amigo").value="";
    }
}

//Función para sortear de manera aleatoria de la lista de amigos
function sortearAmigo(){
    let resultadoMostrar = document.getElementById("resultado");
    resultadoMostrar.innerHTML="";
    let tamañoArreglo = amigos.length;
    console.log(tamañoArreglo);
    let numAleatorio =Math.floor(Math.random()*tamañoArreglo);
    console.log(numAleatorio);
    let amigoSecreto = document.createElement("li");

    if (tamañoArreglo === 0){
        alert("No ingreso ningún nombre.")
    }else{
        amigoSecreto.textContent = amigos[numAleatorio];
        console.log(amigoSecreto)
        resultadoMostrar.appendChild(amigoSecreto);
    }
}
