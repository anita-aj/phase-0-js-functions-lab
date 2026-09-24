




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount){
    const taxValue = amount*10/100;
    return taxValue;
}

console.log(calculateTax(100));

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximum(5, 20));

function isPalindrome(word){
    if(word === word.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
    return discountedPrice;
}
console.log(calculateDiscountedPrice(100, 20));