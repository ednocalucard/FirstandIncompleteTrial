// variavel

let dolar= 5.3
let euro= 6
let button= document.getElementById("button")
let select= document.getElementById("select-moedas")



function convertercoins(){

    let inputReal= Number (document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "Dolar Americano"){
let valordolar = inputReal / dolar
inputMoedas.innerHTML = valordolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    }

    if (select.value === "Euro Europeu"){
      let ValorEmEuros = inputReal / euro
      inputMoedas.innerHTML = ValorEmEuros.toLocaleString("de-DE", {syle: 'currency', currency: 'EUR'})
    }


textoReal.innerHTML = inputReal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

}

function trocaDeMoeda(){
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")
    

if (select.value === "Dolar Americano"){
    textoMoedas.innerHTML = "Dolar"
    bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"

}

if (select.value === "Euro Europeu")
    textoMoedas.innerHTML = "Euro"
    bandeiraMoedas.src = "./img/euro.png"

}



button.addEventListener ("click",  convertercoins)
select.addEventListener ("change", trocaDeMoeda)


