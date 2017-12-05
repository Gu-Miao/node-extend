#!/usr/bin/node

var expect = require("chai").expect;
var extend = require("extend");

var a = {
  "name": "a",
  "id": 1,
  "length": 3
};

var b = {
  "name": "b",
  "id": 2,
  "length": 3
};

var c = ["c", "id: 3", "length: 3"];

var d = "HELLO";

var result_ab = '{"name":"b","id":2,"length":3}'; 

var result_ac = '{"0":"c","1":"id: 3","2":"length: 3","name":"b","id":2,"length":3}';

var result_ad = '{"0":"H","1":"E","2":"L","3":"L","4":"O","name":"b","id":2,"length":3}';

describe("对于 extend() 中参数对象的测试\n", function() {

  before(function() {
    console.log("  a:", a);
    console.log("  b:", b);
    console.log("  c:", c);
    console.log("  d:", d);
    console.log("  extend(a, b):", result_ab);
    console.log("  extend(a, c):", result_ac);
    console.log("  extend(a, d):", result_ad);
  });

  it("extend(a, b)", function() {
    var JSON_ab = JSON.stringify(extend(a, b));
    expect(result_ab == JSON_ab).to.be.equal(true);
  });

  it("extend(a, c)", function() {
    var JSON_ac = JSON.stringify(extend(a, c));
    expect(result_ac == JSON_ac).to.be.equal(true);
  });

  it("extend(a, d)", function() {
    var JSON_ad = JSON.stringify(extend(a, d));
    expect(result_ad == JSON_ad).to.be.equal(true);
  });
});
