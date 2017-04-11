var FizzBuzz = function() {};

FizzBuzz.prototype.play = function(number){
  if(this._isDivisibleBy(number, 15)) {
    return 'fizzbuzz';
  } else if(this._isDivisibleBy(number, 3)) {
    return 'fizz';
  } else if(this._isDivisibleBy(number, 5)) {
    return 'buzz';
  } else {
    return number
  }
}

FizzBuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0 );
};
