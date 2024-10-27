document.getElementById("btnSortear").addEventListener("click", function(event){
    event.preventDefault();

    //Apaga os números sorteados anteriores caso tenha e substituindo para os novos valores
    document.getElementById("caixaSorteados").innerHTML = "";

    
    //Guardando os numeros e convertendo para inteiros
    let qntdNumeros = parseInt(document.getElementById("qntdNumeros").value);
    let max = parseInt(document.getElementById("numMax").value);
    let min = parseInt(document.getElementById("numMin").value);
    
    let arrayNumSorteados = []; //Criação de um array com a quantidade definida

    //Fazendo algumas verificações para o programa funcionar
     if (isNaN(max) || isNaN(min) || isNaN(qntdNumeros)){
        alert("Preencha todos os campos!");
    }
    else if (qntdNumeros > max){
        alert("Quantidade deve ser MENOR que o 'Número máximo'!!");
    }
    else  if (qntdNumeros < min){
        alert("Quantidade deve ser MAIOR ou IGUAL ao 'Número mínimo'!!");
    }
    else{
        gerarNumAleatorio(qntdNumeros, max, min, arrayNumSorteados);
        mostrarNumeros(arrayNumSorteados);
    }
});

//FUNÇÃO PARA GERAR NÚMEROS ALEARÓTIOS
function gerarNumAleatorio(qntdNumeros, max, min, arrayNumSorteados){
    for (let i = 0; i < qntdNumeros; i ++){
        let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min; // Faz o sorteio de numero aleatorio
        
        //IF para ver se já existe no array
        if(arrayNumSorteados.includes(numSorteado)){
            i--;
            continue; // retorna para o início do FOR
        }
        arrayNumSorteados[i] = numSorteado;
    }
    
}

//FUNÇÃO PARA MOSTRAR OS NÚMEROS NA TELA DO USUÁRIO
function mostrarNumeros(arrayNumSorteados){
    let arrayOrganizado = arrayNumSorteados.sort(function(a,b){return a-b});  //Organiza a posição dos numeros
    
    //Percorre o array para exibir um por um na tela 
    for (let i = 0; i < arrayOrganizado.length; i ++){
        
        let novaDiv = document.createElement("div"); //Criando uma div nova
        novaDiv.classList.add("numSorteados"); //Adicionando a classe para a div 
        
        novaDiv.textContent = arrayOrganizado[i]; // Adiciona o número sorteado ao conteúdo da div
        console.log("[" + i +"]nova div: " + novaDiv);
        
        document.getElementById("caixaSorteados").append(novaDiv); // Adiciona a nova div ao contêiner
    }
}



