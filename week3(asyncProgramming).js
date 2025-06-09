// function first(callback) {
//     const num = Math.floor(Math.random() * 10);
//     if (num === 1) {
//         return callback(new Error("Error in First task"));
//     }
//     setTimeout(() => {
//         console.log("First task done");
//         callback(null);
//     }, 2000);
// }

// function second(callback) {
//     const num = Math.floor(Math.random() * 10);
//     if (num === 1) {                                                              
//         return callback(new Error("Error in Second task"));
//     }
//     setTimeout(() => {
//         console.log("Second task done");
//         callback(null);
//     }, 2000);
// }

// function third(callback) {
//     const num = Math.floor(Math.random() * 10);
//     if (num === 1) {
//         return callback(new Error("Error in Third task"));
//     }
//     setTimeout(() => {
//         console.log("Third task done");
//         callback(null);
//     }, 2000);
// }

// // Callback hell which consists of too much nesting
// first(function (err1) {
//     if (err1) {
//         return console.log(err1.message);
//     }
//     console.log("First task successful");

//     second(function (err2) {
//         if (err2) {
//             return console.log(err2.message);
//         }
//         console.log("Second task successful");

//         third(function (err3) {
//             if (err3) {
//                 return console.log(err3.message);
//             }
//             console.log("Third task successful");
//             console.log("All tasks completed");
//         });
//     });
// });

// to solve callback hell we have Promises+async+await in which we will convert our original functions to Promise returning functions giving them a synchronous ability
function first() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10);
        if (num === 1) {
            return reject(new Error("Error in First task"));
        }
        setTimeout(() => {
            console.log("First task done");
            resolve();
        }, 2000);
    });
}

function second() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10);
        if (num === 1) {
            return reject(new Error("Error in Second task"));
        }
        setTimeout(() => {
            console.log("Second task done");
            resolve();
        }, 2000);
    });
}

function third() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10);
        if (num === 1) {
            return reject(new Error("Error in Third task"));
        }
        setTimeout(() => {
            console.log("Third task done");
            resolve();
        }, 2000);
    });
}

async function runTasks() {
    try {
        await first();
        console.log("First task successful");

        await second();
        console.log("Second task successful");

        await third();
        console.log("Third task successful");

        console.log("All tasks completed");
    } catch (err) {
        console.log(err.message);
    }
}

runTasks();



