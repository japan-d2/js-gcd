import gcd from '../src/index'

test('small number', () => {
  expect(gcd(341, 581)).toBe(1)
  expect(gcd(650, 102)).toBe(2)
  expect(gcd(474, 309)).toBe(3)
  expect(gcd(452, 460)).toBe(4)
  expect(gcd(830, 935)).toBe(5)
  expect(gcd(114, 558)).toBe(6)
  expect(gcd(721, 161)).toBe(7)
})

test('medium number', () => {
  expect(gcd(530007, 820313)).toBe(1)
  expect(gcd(30282, 863228)).toBe(2)
  expect(gcd(769029, 52749)).toBe(3)
  expect(gcd(293780, 265648)).toBe(4)
  expect(gcd(678275, 449205)).toBe(5)
  expect(gcd(603180, 430242)).toBe(6)
  expect(gcd(466655, 991137)).toBe(7)
})

test('big number', () => {
  expect(gcd(8551873860065, 1983275093212)).toBe(1)
  expect(gcd(8990995724062, 9316472154064)).toBe(2)
  expect(gcd(3009114589722, 74092906089)).toBe(3)
  expect(gcd(524094122396, 186568375648)).toBe(4)
  expect(gcd(9913066736675, 8547446816170)).toBe(5)
  expect(gcd(3036077240646, 2753171823882)).toBe(6)
  expect(gcd(4363681464534, 2735431897429)).toBe(7)
})
