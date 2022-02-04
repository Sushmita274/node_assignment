/* Q1. Write a function to execute two tasks one after the other. Task B will execute Task A
 after 10 min. using a promise */

 function Task(){

    let a = "Task a";
    let b = "Task b";

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },2000)
    })

    promise.then(()=>{
        console.log(a);
    }).catch(()=>{
        {"Error"};
    })

    console.log(b);
 }

 Task();
