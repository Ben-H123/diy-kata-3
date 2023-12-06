function numberToReversedDigits(number) {
return number
.split("")
.map((element) => Number(element))
.reverse()
};

module.exports = numberToReversedDigits;
