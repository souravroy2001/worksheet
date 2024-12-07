/*

Explanation Task:

Explain the difference between using Promise.all and Promise.race with an example.

(Expected Duration: 5 minutes, share screen and explain on a code editor or whiteboard.)

*/

// Promise.all


let promise1 = new Promise((res, rej)=>{

    setTimeout(() => {
        res("OK To Go 1")
    }, 1000);

})
let promise2 = new Promise((res, rej)=>{

    setTimeout(() => {
        res("OK To Go 2")
    }, 1000);

})
let promise3 = new Promise((res, rej)=>{

    setTimeout(() => {
        rej("OK To Go 3")
    }, 1000);

})
let promise4 = new Promise((res, rej)=>{

    setTimeout(() => {
        res("OK To Go 4")
    }, 1000);

})

let  final = new Promise.race( [promise1, promise2, promise3, promise4] ) //Reject
