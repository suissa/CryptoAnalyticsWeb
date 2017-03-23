const realValue = function(venda, btc, porcento){
    // Porcento ser colocado a porcentagem dividida por 100
    totalSemRetencao = btc*venda
    totalComRetencao = totalSemRetencao
    totalComRetencao -= totalComRetencao*porcento
    totalComRetencao = totalComRetencao.toFixed(2)
    totalSemRetencao = totalSemRetencao.toFixed(2)
    
    console.log("Vendeu um total de: " + totalSemRetencao +
                "\nCom a retenção do site o valor total foi de: " + totalComRetencao)
    
    return totalComRetencao
}

module.exports = realValue