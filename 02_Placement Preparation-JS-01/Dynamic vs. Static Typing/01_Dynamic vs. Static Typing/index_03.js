let arr = ["10", 20, "30"];

function convertNumber(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += +arr[i] //Number(arr[i])
    }

    return sum;

}

console.log(convertNumber(arr))// output 60
