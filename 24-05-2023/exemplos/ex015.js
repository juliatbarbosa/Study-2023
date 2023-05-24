let num = [5, 8, 4]
num[3] = 6
num.push(7) //acrescenta sempre na última posição
num.length //coloca a quantidade de elementos do vetor
num.sort() // coloca os elementos em ordem crescente
num.indexOf(7) // analisa se tem a posição 7 no vetor e retorna a posição
console.log(`Vetor: ${num}, ${num.length} elementos, o 7 está na posição ${num.indexOf(7)}.`)