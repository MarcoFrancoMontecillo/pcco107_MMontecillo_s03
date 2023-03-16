// console.log('hi');

/* [Operators]
  Arithmetic Operators
    perfomr calculations:
      - Addition (+)
      - Subtraction (-)
      - Multiplication (*)
      - Division (/) 'divides the first value by the second value'
      - Modulus (%) 'gets the remainder'
      - Exponentiation (**) 'raises the first value to the power of the second value'
*/

// function divideNum(num1, num2){
//   result = num1 / num2;
//   return result;
// }
// let quotientResult = divideNum(50, 5);
// console.log(`The result of the operations is: ${quotientResult}`)

/*
  Assignment Operator
    - Is used to assign value to variable or a property of an object
    - we use equal sign (=)
*/
// let variable = 'initial value';
// addition assignment operator
// the addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable
// let assignNuber = 8;
// assignNumber = assignNuber + 2
// console.log(`The result of the addition assignment operator is ${assignNumber}`)
//
// shorthand for assignment operator
//
// assignNumber += 2;
// console.log(`The result of the addition assignment operator is ${assignNumber}`)

// Subtraction/Multiplication/Division Assignment Operator
// let assignResult = 4;
// assignResult -= 2;
// console.log(`The resulet of assign operator is ${assignResult}`)
// assignResult *= 2;
// console.log(`The resulet of assign operator is ${assignResult}`)
// assignResult /= 2;
// console.log(`The resulet of assign operator is ${assignResult}`)
// assignResult %= 2;
// console.log(`The resulet of assign operator is ${assignResult}`)

// PEMDAS
// let mdas = 1 + 2 - 3 * 4 / 5;
// console.log(`The result of mdas is ${mdas}`)

// the order of operations can be changed by adding parentheses to the logic
// let pemdas = 1 + (2 - 3) * (4 / 5);
// console.log(`The result of mdas is ${pemdas}`)
/*
  By adding parentheses '()', the order of operation are changed  proirotozing operations inside the parenteses first and follow the operations
    - 4/5 = 0.8
    - 2-3 = -1
    - -1*0.8 = -0.8
    - 1+-0.8 = 0.19 or 0.2
*/

// Increment operator is used to increased the value of variable by 1
/*
Two types of increment Operators
- post-increment operator (x++)
- increases the value of x after it has been evaluated
- pre-increment Operator (++x)
- increases the value of x before it is evaluated
*/

// let x = 2;
// console.log(x)
// a = x++
// console.log(a)
// b = ++x
// console.log(b)

/*
  Decrement operator is used to decrease the value of vvariable by 1
  Two types of decrement Operator
    - post-decrement (x--)
    - pre-decrement (--x)
  the value of 'z' is decreases by a value of one before retunring the value and storing it in the variable
*/
// let z = 3;
// the value of z is at 3 before it was decremented
// let decrement = --z;
// console.log(`The result of pre-decrement is ${decrement}`)
// the value of z was decreased reassigning the value to 2
// console.log(`The result of pre-decrement is ${z}`)

// the value of z is returnend and stored in the variable decrement then the value of  is decreased by 1
// decrement = z--;
// the value of z is at 2 before it was deccremented
// console.log(`The result of pre-decrement is ${decrement}`)
// the value of z was decreased reassignin the value to 1
// console.log(`The result of pre-decrement is ${z}`)

/*
  Comparison Operators
    - are used to compare the values of the lft and right operands
    - return a boolean

  Equality and loose equality operator (==)
    - is used to compare two cvalyes for equality. the operator return true if the valyes are equal and false other wise
    - the equaluty operatir perofroms type coercion, which means it cnverts the values being compare to a common tye before performing the Comparison
*/

// console.log(1==1) // true
// console.log(1=='1') // true
// the string 1 is coerced to the number 1 before the comparison is remainder
// console.log(1==2) // false
// console.log(true==1) // true
// the booleann true is coerced to the number 1 before the comparison is made
// console.log(null == undefined) // true
// null and undefined are equal to each other and to no other value

/*
  Strict equality operator (===)
    - is used to compare two values for equality
    - the operator returns true if the valyes are f the same type and have same value and false otherwise
    - the strict equality does not perofrm type coercion, whcih means the values being compared must be of the same type of return true
*/

// console.log(2===2) // true
// console.log(2==='2') // false
// the string '2'is not the same type as the number 2
// console.log(2===1) // false
// console.log(true===1) // false
// the boolean true is not the same type as the numbr 1
// console.log(null === undefined) // false
// null and undefined are not of the same types

// NOTE: As a good practice we have to use the strict equality operator instead of the loose equality to avoid unexpected results due to type coercion

/*
  type coercion is the implicit conversion of values from one data type to another
    - thus happens when operaions are performed on a defferent daya types that would normally not be possible and yield irregular results
    - values are automatically converted from one data type to another data type in order to resolve operations
*/

// let numA = '10';
// let numB = 12;

// adding/concatenating as string and a number and will result string
// numB was coerce to a string
// let coercion = numA + numB;
// console.log(coercion) // 1012
// console.log(typeof coercion)

// let numC = 16;
// let numD = 14;
//
// let nonCoercion = numC + numD;
// console.log(nonCoercion)
// console.log(typeof nonCoercion)

// the result is number
//  the boolean true is associated with the value of 1
// let numE = true + 1
// console.log(numE)
// console.log(typeof numE)

// the boolean false is associated with the value of 0
// let numF = false + 1
// console.log(numF)

/*
  Inequality Operator or loose Inequality operator (!=)
    - is a comparison operator used to check if the two values are not equal to each other
    - will do tpe coerci if the operands have different types
*/

// console.log('1' != 1) // false
// false because bothe values were converted to numbers
// 1 converted into number 1
// 1 converted into number 1
// 1 equals 1 is equals
// not inequal

// console.log('Junkook' != 'Jin') // true
// because both string is not same to eachother

// console.log(1 != true) // false
// with type conversion: true was converted to 1
// 1 is equal to 1 - it it not inequal

// console.log(true != 'true') // true
// with type conversion: true was converted to 1
// true was converted into a number but results to NaN
// 1 is not equal to NaN - it is inequal
// console.log('0' != false) // false
// type conversion: 0 was converted to 0
// false was converted to 0
// 0 is equal to 0 - this is inequal

/*
  String Inequality Operator (!==)
    - it checks if two value are not equal to eachother but also ensures that they are of the same type
    - it is represented with the characters !==, <>, and more
*/

// console.log('5' !== 5) // true
// both values are inequal because they have different types

// console.log('true' !== true) // true

// let name1 = 'Juan'
// let name2 = 'Jimin'
// let name3 = 'JHope'
// let name4 = 'RM'
//
// let number1 = 50
// let number2 = 60
// let numberString1 = '50'
// let numberString2 = '60'
//
// console.log(numberString1 == number1) // ture
// console.log(numberString2 === number2) // false
// console.log(numberString1 != number1) // false
// console.log(name1 == 'juan') // false
// console.log(name2 === 'Jimin') // true
// console.log(name3 !== 'Jhope') // true

// [Relation Comparison Operator]
/*
  - is comparison operator used to compare two values and return a boolean value (either true or false) based on relationship between them
  - to evaluate conditions and make decision based on relation operators:
    - greater than >
    - greater than or equal to  >=
    - less than <
    - less than or equal to <=
*/

// let x = 500
// let y = 700
// let w = 8000
// let numString3 = '5500'

// greater than >
// console.log(x>y) // false
// console.log(w>y) // true

// less than <
// console.log(w < x) // false
// console.log(y < y) // false
// console.log(numString3 < 1000) // false
// forced coercion to chage the numStrung3 to number
// console.log(numString3 < 'Suga') // true
// '5500' < 'Suga' - it means erratic
// lexiographic comparison - means it compare two operance character by character based on their unicode value
// the unicode value of 5500 (1114111) < unicode value of 'Suga' S-83 U-117 G-103 A-97

// console.log(y <= y) // true

// [Logical Operators]
/*
  And Oparator ((&&)
   - is a logical operators is alogical operator that operate on two boolean operands and returns a boolean value of true if both operands are true and false otherwise

*/

// let isAdmin = false
let isRegistered = true
// let isLegalAge = true
//
// let authorization1 = isAdmin && isRegistered;
// console.log(authorization1)
// let authorization2 = isLegalAge && isRegistered;
// console.log(authorization2)
// let authorization3 = isAdmin && isLegalAge;
// console.log(authorization3)
//
let requiredLevel = 95
let requiredAge = 18
//
// let authirization4 = isRegistered && requiredLevel === 25;
// console.log(authirization4)
// let authirization5 = isRegistered && isLegalAge && requiredLevel === 95;
// console.log(authirization5)

// let userName1 = 'gamer2001'
// let userName2 = 'shadow1991'
let userAge1 = 15
// let userAge2 = 30
//
// .legnth is a property of strings which determines the number of characters in the string
// let registration1 = userName1.legth > 8 && userAge1 >= requiredAge
// console.log(registration1)
//
// let registration2 = userName2.legth > 8 && userAge2 >= requiredAge;
// console.log(registration2)

/*
  or Operator || - double pipe
    - it returns true if at least one of the values (operands) is true
*/

let userLevel1 = 100;
let userLevel2 = 65

let guidRequirement = isRegistered || userLevel2 >= requiredLevel || userAge1 >= requiredAge
console.log(guidRequirement)

// short-circuit evaluation is a behavior of logical operators in js where the second opernad is not evaluate if the first operand is sufficient to determine the result of the operation 
