//JS Variables & Constants
var x=10;
{
    let x=20;
    console.log("Value of x: "+x);
}
console.log("Value of x: "+x);

/*  OUTPUT:
    Value of x: 20
    Value of x: 10
Let is block scoped and Var can be desclatred and accessed globally
*/

let x; // x is the name of the variable

console.log(x); // undefined

// first javascript program

let x=5;
console.log(x);//5
x=10;
console.log(x);//10

// Variable name can start with letter, _ & $ sign. javacsript is case sensative.
let a;
let _a;
let $b;

/*Data Types-Description	Example
String-	represents textual data	-'hello', "hello world!" etc
Number-	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt-	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean-	Any of two values: true or false
undefined-	a data type whose variable is not initialized-	let a;
null-	denotes a null value-	let a = null;
Symbol-	data type whose instances are unique and immutable-	let value = Symbol('hello');
Object-	key-value pairs of collection of data-	let student = { };*/

/*1.Notice that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.
2.null is not the same as NULL or Null.
3.It is recommended not to explicitly assign undefined to a variable. Usually, null is used to assign 'unknown' or 'empty' value to a variable.
4.A number type can also be +Infinity, -Infinity, and NaN (not a number).
*/
