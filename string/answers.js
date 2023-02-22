// 1)
let ucFirst = (str) => str[0].toUpperCase()+str.slice(1)
// 2)
let checkSpam = (str) =>{
    str = str.toLowerCase()
    if (str.includes(['xxx','viagra'])){
        return true
    }
    return false
}

// 3)
let truncate = (str,maxLength) =>{
    if (str.length > maxLength){
        return str.slice(0,maxLength-1)+'…'
    }else{
        return str
    }
}

// 4)
let extraCurrencyValue = (str) => +str.slice(1) 
