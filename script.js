var calcular = function() { 
    let deslocamento = document.getElementById('deslocamento')
    let tempo = document.getElementById('tempo')
    let vm = document.getElementById('velocidadeMedia')
    console.log(deslocamento.value, tempo.value);

    vm.value = deslocamento.value / tempo.value
    alert('Cálculo realizado com sucesso!')
}

var limpar = function(){
    document.getElementById('deslocamento').value = ""
    document.getElementById('tempo').value = ""
    document.getElementById('velocidadeMedia').value = ""
}

