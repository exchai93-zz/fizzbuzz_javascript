describe('fizzbuzz', function() {
  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {
    it("divisible by 3 returns 'fizz'", function() {
      // instantiates new version of FizzBuzz (class) need to put ();
      expect(fizzbuzz.play(3)).toEqual('fizz');
    });
    it("divisible by 5 returns 'buzz'", function() {
      expect(fizzbuzz.play(5)).toEqual('buzz');
    });
    it("divisible by 3 and 5 returns 'fizzbuzz'", function() {
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
    });
  });
  describe('knows when a number is NOT', function() {
    it("divisible by 3", function() {
      expect(fizzbuzz.play(2)).toEqual(2);
    });
    it("divisible by 5", function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });
    it("divisible by 3 or 5", function(){
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });






});
