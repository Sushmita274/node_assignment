// Q3. What is the output of following:
var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
obj.method(fn, 1)

// output: fn = undefined because function name is fn it dosen't have any value.
            
