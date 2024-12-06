let arr = ["Hello", 42, true]

    function makeString(arr) {
        let ans = '';
        for(let i = 0; i < arr.length; i++){
            ans += arr[i]
        }
        return ans
    }

console.log(makeString(arr))//Output Hello42true
