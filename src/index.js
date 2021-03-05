module.exports = function toReadable (number) {
	if (number === 0) {
		return 'zero';
	}
	var zero_to_nineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    var twenty_to_ninety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
    if (number < 20) {
    	return zero_to_nineteen[number];
    }
	if (number > 19 && number < 91 && number % 10 === 0) {
    	return twenty_to_ninety[number/10]; 
    } 
	if (number > 20 && number < 100 && number % 10 !== 0) {
    	return `${twenty_to_ninety[Math.floor(number/10)]} ${zero_to_nineteen[number%10]}`;
    } 
	if (number > 99 && number % 100 > 19 && number % 100 !== 0) {
    	return `${zero_to_nineteen[Math.floor(number/100)]} hundred ${twenty_to_ninety[Math.floor(number%100/10)]} ${zero_to_nineteen[number%10]}`.trim();
    }
    if (number > 99 && number % 100 < 20 && number % 100 !== 0) {
        return `${zero_to_nineteen[Math.floor(number/100)]} hundred ${zero_to_nineteen[number%100]}`;
    }
    if (number % 100 === 0) {
        return `${zero_to_nineteen[Math.floor(number/100)]} hundred`
    }
}
