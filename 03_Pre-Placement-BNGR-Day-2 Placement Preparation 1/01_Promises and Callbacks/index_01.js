// Error-Based Debugging: Fix the following buggy code:


/*

function fetchUser(callback) {
    setTimeout(() => {
        const user = null; // Should fetch a valid user object
        callback(user.name); // Bug: Cannot read property 'name'
    }, 1000);
}

fetchUser((name) => console.log(name));

*/


function fetchUser(callback) {
    setTimeout(() => {
        const user = {
            "name": "Douglas Adams",
            "email": "douglas@gmail.com",
            "postcode": "pe22 22a",
            "phoneNumber": "07428233312",
            "city": "London",
            "country": "England",
            "favoriteQuote": "The answer is 42"
        }; // Should fetch a valid user object
        callback(user.name); // Bug: Cannot read property 'name'
    }, 1000);
}

fetchUser((name) => console.log(name));
