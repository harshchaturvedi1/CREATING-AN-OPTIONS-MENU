const readline = require('readline');
const Eventemitter = require('events');

const eventEmitter = new Eventemitter();

const { showBooks, addBooks } = require('./books.js');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

eventEmitter.on('showBooks', showBooks);
eventEmitter.on('addBooks', addBooks);

const options = () => {
    console.log("----------------------")
    console.log("1 : Show all books")
    console.log("2 : Add New Book")
    console.log("3 : quit")
    console.log("-----choose an option-----")
}
options();
readline1.question('Enter your Cohice : ', (n) => {

    if (n == 3) {
        readline1.question("Are you sure you want to quit - press Y to quit", (ans) => {
            if (ans == 'Y')
                readline1.close();
            else
                options();
        })
    }
    else {
        if (n == 1) {
            eventEmitter.emit('showBooks')
            options()
        }
        else if (n == 2) {
            readline1.question('enter book name : ', (book) => {
                eventEmitter.emit('addBooks', { book });
                options()
            })
        }
        else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3")
            options()
        }
        readline1.on('line', (u) => {

            if (u == 3) {
                readline1.question("Are you sure you want t2o quit - press Y to quit", (ans) => {
                    if (ans == 'Y')
                        readline1.close();
                    else
                        options()
                })
            }
            else if (u == 1) {
                eventEmitter.emit('showBooks')
                options();
            }
            else if (u == 2) {
                readline1.question('enter book name : ', (book) => {
                    eventEmitter.emit('addBooks', { book });
                    options()
                })
            }
            else {
                console.log("You have selected an invalid entry so please press 1, 2 or 3")
                options()
            }

        })
    }
})

readline1.on('close', () => {
    console.log('bye bye!')
})



// const readline = require('readline')

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'hello'
// })


// let num1 = 3;
// let num2 = 4;
// let ans = 7;
// r1.question(`what is 3 + 4`, (a) => {
//     if (a.trim() == ans) {
//         r1.close()
//     }
//     else {
//         r1.setPrompt('incorrect')
//         r1.prompt();
//         r1.on('line', (a) => {
//             if (a.trim() == ans) {
//                 r1.close()
//             }
//             else {
//                 // r1.setPrompt('incorrect')
//                 r1.prompt();
//             }
//         })
//     }

// })

// r1.on('close', () => {
//     console.log('yes')
// })