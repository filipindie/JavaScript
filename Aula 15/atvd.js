var arr = [1, 2, 4, 5, 9, 11, 18, 2, 9, 12]

for(let max in arr) {
    max = arr.reduce(function(a, b) {
        return Math.max(a,b)
    })
    console.log(max)
    break
}

