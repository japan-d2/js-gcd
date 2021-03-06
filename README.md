# gcd

Compute the greatest common divisor using
[Euclid's algorithm](https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm).

# install

```bash
npm install @japan-d2/gcd
```

or

```bash
yarn add @japan-d2/gcd
```

# how to use

## example

```ts
import gcd from '@japan-d2/gcd'
console.log(gcd(721, 161))
```

### Output

```
7
```

## methods

### gcd(a: number, b: number): number

Return the greatest common divisor of the integers `a` and `b` using Euclid's algorithm.

# BigInt support

## example

```ts
import gcd from '@japan-d2/gcd/lib/bigint'
console.log(gcd(721n, 161n))
```

### Output

```
7n
```

## methods

### gcd(a: bigint, b: bigint): bigint

Return the greatest common divisor of the integers `a` and `b` using Euclid's algorithm.

# license

MIT
