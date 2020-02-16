export default function gcd (a: bigint, b: bigint): bigint {
  if (b === BigInt(0)) {
    return a
  }

  return gcd(b, a % b)
}
