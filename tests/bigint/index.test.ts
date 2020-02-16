import gcd from '../../src/bigint'

test('small number', () => {
  expect(gcd(BigInt(341), BigInt(581))).toBe(BigInt(1))
  expect(gcd(BigInt(650), BigInt(102))).toBe(BigInt(2))
  expect(gcd(BigInt(474), BigInt(309))).toBe(BigInt(3))
  expect(gcd(BigInt(452), BigInt(460))).toBe(BigInt(4))
  expect(gcd(BigInt(830), BigInt(935))).toBe(BigInt(5))
  expect(gcd(BigInt(114), BigInt(558))).toBe(BigInt(6))
  expect(gcd(BigInt(721), BigInt(161))).toBe(BigInt(7))
})

test('medium number', () => {
  expect(gcd(BigInt(530007), BigInt(820313))).toBe(BigInt(1))
  expect(gcd(BigInt(30282), BigInt(863228))).toBe(BigInt(2))
  expect(gcd(BigInt(769029), BigInt(52749))).toBe(BigInt(3))
  expect(gcd(BigInt(293780), BigInt(265648))).toBe(BigInt(4))
  expect(gcd(BigInt(678275), BigInt(449205))).toBe(BigInt(5))
  expect(gcd(BigInt(603180), BigInt(430242))).toBe(BigInt(6))
  expect(gcd(BigInt(466655), BigInt(991137))).toBe(BigInt(7))
})

test('big number', () => {
  expect(gcd(BigInt(8551873860065), BigInt(1983275093212))).toBe(BigInt(1))
  expect(gcd(BigInt(8990995724062), BigInt(9316472154064))).toBe(BigInt(2))
  expect(gcd(BigInt(3009114589722), BigInt(74092906089))).toBe(BigInt(3))
  expect(gcd(BigInt(524094122396), BigInt(186568375648))).toBe(BigInt(4))
  expect(gcd(BigInt(9913066736675), BigInt(8547446816170))).toBe(BigInt(5))
  expect(gcd(BigInt(3036077240646), BigInt(2753171823882))).toBe(BigInt(6))
  expect(gcd(BigInt(4363681464534), BigInt(2735431897429))).toBe(BigInt(7))
})
