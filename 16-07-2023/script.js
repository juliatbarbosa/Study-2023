async function loadPokemons() {
    let listaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
    .then(response => response.json())
    .then(data => data.results)

    console.log(listaPokemon)

    var lista = document.querySelector('.lista')
    var titulo = document.createElement('h1')
    
    titulo.innerHTML = 'Lista Pokedex'
    lista.appendChild(titulo)

    var listaPokedex = document.createElement('ul')

    lista.appendChild(listaPokedex)

    listaPokemon.map((item, index) => {
        let elementos = document.createElement('li')
        let elementosArea = document.createElement('div')

        let pokeName = document.createElement('span')
        pokeName.innerHTML = item.name

        let pokeImage = document.createElement('img')
        pokeImage.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${index+1}.png`)

        elementosArea.appendChild(pokeName)
        elementosArea.appendChild(pokeImage)

        elementos.appendChild(elementosArea)
        
        listaPokedex.appendChild(elementos)
    })

}


