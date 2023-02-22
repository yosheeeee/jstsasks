// 1)

let unique = arr => Array.from(new Set(arr))

// 2)

let aclean = arr => {
    let map = new Map()

    for (let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('')
        map.set(sorted,word)
    }

    return Array.from(map.values())
}

// 3) т.к. map.keys() - итерируемый объект а не массив