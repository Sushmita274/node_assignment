// Q4. What will be the value of line1 and line2 ?
function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
typeof a; // line1 => type of a is undefined because type of return is undefined.
typeof b; // line2 => type of b is number.

