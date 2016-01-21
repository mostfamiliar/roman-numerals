describe("oneDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(oneDigit(9)).to.equal("IX")
  });
});

describe("twoDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(twoDigit(99)).to.equal("XCIX")
  });
});

describe("threeDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(threeDigit(999)).to.equal("CMXCIX")
  })
})
describe("fourDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(fourDigit(3999)).to.equal("MMMCMXCIX")
  })
})
