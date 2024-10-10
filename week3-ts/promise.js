// Creating a new promise
let conditionalPromise = new Promise((resolve, reject) => {
    let number=Math.random()
      
    if(!number>0.5) {
        resolve("It is greater than 0.5");
        console.log(number);
        
    } else {
        reject("It is less than 0.5");
        console.log(number);
    }
});

// Consuming the promise
conditionalPromise.then(
    (message) => {
        console.log(message); 
    }
    
)
.catch((error) => {
    console.log(error); 
})
