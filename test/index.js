/* eslint-env mocha */

var
  expect = require('chai').expect;

var
  b = require('../bjorklund');

var
  t = function (a) {
    return a.concat(a).join('');
  };

describe('bjorklund', function () {
  it('E(2,5)', function () { expect(t(b(5, 2))).to.contain('10100'); });
  it('E(3,4)', function () { expect(t(b(4, 3))).to.contain('1011'); });
  it('E(3,5)', function () { expect(t(b(5, 3))).to.contain('10101'); });
  it('E(3,7)', function () { expect(t(b(7, 3))).to.contain('1010100'); });
  it('E(3,8)', function () { expect(t(b(8, 3))).to.contain('10010010'); });
  it('E(4,7)', function () { expect(t(b(7, 4))).to.contain('1010101'); });
  it('E(4,9)', function () { expect(t(b(9, 4))).to.contain('101010100'); });
  it('E(4,11)', function () { expect(t(b(11, 4))).to.contain('10010010010'); });
  it('E(5,6)', function () { expect(t(b(6, 5))).to.contain('101111'); });
  it('E(5,7)', function () { expect(t(b(7, 5))).to.contain('1011011'); });
  it('E(5,8)', function () { expect(t(b(8, 5))).to.contain('10110110'); });
  it('E(5,9)', function () { expect(t(b(9, 5))).to.contain('101010101'); });
  it('E(5,11)', function () { expect(t(b(11, 5))).to.contain('10101010100'); });
  it('E(5,12)', function () { expect(t(b(12, 5))).to.contain('100101001010'); });
  it('E(5,16)', function () { expect(t(b(16, 5))).to.contain('1001001001001000'); });
  it('E(7,8)', function () { expect(t(b(8, 7))).to.contain('10111111'); });
  it('E(7,12)', function () { expect(t(b(12, 7))).to.contain('101101011010'); });
  it('E(7,16)', function () { expect(t(b(16, 7))).to.contain('1001010100101010'); });
  it('E(9,16)', function () { expect(t(b(16, 9))).to.contain('1011010101101010'); });
  it('E(11,24)', function () { expect(t(b(24, 11))).to.contain('100101010101001010101010'); });
  it('E(13,24)', function () { expect(t(b(24, 13))).to.contain('101101010101011010101010'); });
  it('E(4,4)', function () { expect(t(b(4, 4))).to.contain('1111'); })
  it('E(5,5)', function () { expect(t(b(5, 5))).to.contain('11111'); })
  it('E(1,1)', function () { expect(t(b(1, 1))).to.contain('1'); })
  it('E(4,8)', function () { expect(t(b(8, 4))).to.contain('10101010'); })
  it('E(5,10)', function () { expect(t(b(10, 5))).to.contain('1010101010'); })
  it('E(4,6)', function () { expect(t(b(6, 4))).to.contain('110110'); })
});
