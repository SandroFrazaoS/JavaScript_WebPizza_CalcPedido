/*
--  no console 
document.getElementById(“quantidade”) 
document.getElementById(“quantidade”).value = 1

-- no script
 var input = document.getElementById(“quantidade”); 
 input.value = 2;
 
 console.log(inputQuantidade)
 console.dir(inputQuantidade)
 document.getElementById(“quantidade”).style.backgroundColor = “red”;
 var meuInput = document.getElementById(“quantidade”);
 meuInput.style.backgroundColor = “pink”;
 meuInput.style.color = “red”;
 document.getElementById(“quantidade”).style.backgroundColor = “pink”;
 document.getElementById(“quantidade”).style.color = “red”;

 -- no script
 var input = document.getElementById(“quantidade”); 
 input.value = 1 + Number(input.value);
 ou
 input.value++




 var item = botaoIncrementa.closest(".item");  pegou a class item
var elementoPreco = item.querySelector(".preco-item"); pegou o preco
console.log(elementoPreco);
var precoItem = Number(elementoPreco.textContent);
console.log(precoItem);
var elementoTotal = document.querySelector("#total");
elementoTotal.textContent = Number(elementoTotal.textContent)
 + precoItem;
 */

//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

for(let botao of botoesIncrementa)
{
    botao.addEventListener('click', incrementa);

    function incrementa()
    {
        var item = botao.closest('.item');  // procura o elemento acima

        var input = item.querySelector('.quantidade');
        input.value++;

        var preco = pegaPrecoItem(item);
        adicionaAoTotal(preco);

    }
}



//decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

for(let botao of botoesDecrementa)
{
    botao.addEventListener('click', decrementa);
    
    function decrementa(){
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');

        if(input.value > 0 ){
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);
        }
        else
        {
            console.log(input.value);
        }


    }
}

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function (event){

    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    for(let input of inputs)
    {
        if(input.value > 0 )
        {
            contador++;
        }
    }

    if (contador == 0)
    {
        alert("Deve ter pelo menos 1 pizza no pedido");
        event.preventDefault();
    }
});

//funções auxiliares
function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor){
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}