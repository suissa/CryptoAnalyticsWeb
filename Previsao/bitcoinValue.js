const calcTotalComRetencao = (totalComRetencao, porcento) => 
  (totalComRetencao*porcento).toFixed(8)

const bitcoinValue  = (compra, porcento, real) => {
    // Porcento ser colocado a porcentagem dividida por 100
    const totalSemRetencao = compra/real
    const totalComRetencao = totalSemRetencao
    const totalComRetencaoFinal = calcTotalComRetencao(totalComRetencao, porcento)
    const totalSemRetencaoFinal = totalSemRetencao.toFixed(8)
    console.log("Comprou um total de: " + totalSemRetencao +
                "\nCom a retenção do site o valor total foi de: " + totalComRetencao)

    return totalComRetencaoFinal
}
console.log(bitcoinValue(500, 0.005, 3601.02))
module.exports = bitcoinValue
