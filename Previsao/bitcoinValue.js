const bitcoinValue  = function(compra, porcento, real){
    // Porcento ser colocado a porcentagem dividida por 100
    totalSemRetencao = compra/real
    totalComRetencao = totalSemRetencao
    totalComRetencao -= totalComRetencao*porcento
    totalComRetencao = totalComRetencao.toFixed(8)
    totalSemRetencao = totalSemRetencao.toFixed(8)
    console.log("Comprou um total de: " + totalSemRetencao +
                "\nCom a retenção do site o valor total foi de: " + totalComRetencao)

    return totalComRetencao
}
console.log(bitcoinValue(500, 0.005, 3601.02))
module.exports = bitcoinValue
