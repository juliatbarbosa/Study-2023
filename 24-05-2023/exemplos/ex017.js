// Função 1

function parimp(n) { // -> n = parâmetro
    if(n%2==0){ // ação
        return 'par' //retorno
    } else {
        return 'ímpar'
    }
}

let res = parimp(256) // -> parimp = chamada
console.log(res)