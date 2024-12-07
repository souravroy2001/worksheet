let arr = [1, 2, 3];

function HOF(arr) {
    return callBack(arr)
}

let callBack = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

console.log(HOF(arr))//Output [ 2, 4, 6 ]
