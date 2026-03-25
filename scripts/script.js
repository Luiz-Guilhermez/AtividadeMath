function calcular(){
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);
    const desconto = parseFloat(document.getElementById('desconto').value);

    const descontado = preco - desconto;
    const valorTaxa = descontado * (taxaPorcentagem/100);
    const lucroBruto = descontado - valorTaxa;

    const lucroArredondado = Math.ceil(lucroBruto);

    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    const lucro = document.getElementById('out-lucro');
    lucro.innerText = "R$" + lucroArredondado.toFixed(2);

    if (lucroArredondado < 50){
        lucro.style.color = "red"
    }else {
        lucro.style.color = "green"
    }
    
    document.getElementById('resultado').classList.remove('hidden');
}