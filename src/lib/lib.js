export function getFilteredArray({prop}){
    return arr && arr.filter(item => item.name === prop)

}

export function getTotals(arr,prop){
    if (prop === undefined){
        return arr.reduce((acc, curr)=> acc + curr.price)
    } else{
        return arr
        .filter((item) => item.name=== name)
        .reduce((acc, curr) => acc +curr.price, 0)
    }
}