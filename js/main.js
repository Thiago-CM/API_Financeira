const preencherForm = (conversao,real) =>{
   let euro =  conversao.results.currencies.EUR.buy
   let dolar = conversao.results.currencies.USD.buy
   document.getElementById('dolar').value = (real * dolar).toFixed(2)
   document.getElementById('euro').value = (real * euro).toFixed(2)
}

const cotacao = async() =>{
    
    const real = document.getElementById('real').value
    const url = 'https://api.hgbrasil.com/finance?format=json-cors&key=547db897'
    
    // recebendo os dados
    const dados = await fetch(url)
    // pegando os dados e aplicando a função do json
    const conversao = await dados.json();
    preencherForm(conversao,real)
    
    
}
document.getElementById('pesquisar').addEventListener('click',cotacao)