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
