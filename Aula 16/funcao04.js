function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--)/* Enquanto o contador for maior do que 1, o contador perde 1*/{
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120