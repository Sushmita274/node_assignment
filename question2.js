// Q2. What is output of following code:
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v); //value of v is 2
    return v * 2;
})
    .then(v => {
        console.log(v); //value of v is 4
        return v * 2;
    })
    .finally(v => {
        console.log(v); //value of v is undefined because promise works with .then not .finally
        return v * 2;
    })
    .then(v => {
        console.log(v);//value of v is 8 because last value returns 8
    });