describe("oneDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(oneDigit(1)).to.equal("I")
  });
});

describe("twoDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(twoDigit(10)).to.equal("X")
  });
});

describe("threeDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(threeDigit(100)).to.equal("C")
  });
});
describe("fourDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(fourDigit(1000)).to.equal("M")
  });
});
describe("masterFunction", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(masterFunction(1)).to.equal("I")
  });
  it("will add the value of the symbols to produce output", function() {
    expect(masterFunction(10)).to.equal("X")
  });
  it("will add the value of the symbols to produce output", function() {
    expect(masterFunction(100)).to.equal("C")
  });
  it("will add the value of the symbols to produce output", function() {
    expect(masterFunction(1000)).to.equal("M")
  })
});
