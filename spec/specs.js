describe("oneDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(oneDigit(2)).to.equal("II")
  });
});

describe("twoDigit", function() {
  it("will add the value of the symbols to produce output", function(){
    expect(twoDigit(16)).to.equal("XVI")
  });
});

describe("threeDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(threeDigit(324)).to.equal("CCCXXIV")
  })
})
describe("fourDigit", function() {
  it("will add the value of the symbols to produce output", function() {
    expect(fourDigit(1324)).to.equal("MCCCXXIV")
  })
})
