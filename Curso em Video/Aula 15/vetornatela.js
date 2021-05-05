let valores = [9, 2, 4, 10, 12, 34, 6, 6, 7]
valores.sort()

/* for (let pos=0; pos <valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for(let pos in valores) {
    /*Para cada posição em valores(variável composta) mostro um num[pos]*/
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}