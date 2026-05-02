const Sieve = require("./sieve");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3_581);
    expect(sieve.NthPrime(986)).toBe(7_793);
    expect(sieve.NthPrime(2_000)).toBe(17_393);
    expect(sieve.NthPrime(1_000_000)).toBe(15_485_867);
    expect(sieve.NthPrime(10_000_000)).toBe(179_424_691);
    //expect(sieve.NthPrime(100_000_000)).toBe(2_038_074_751); not required, just a fun challenge
  });

// A couple of extra small primechecks just to confirm basic behavior.
  test("NthPrime handles small known primes", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(1)).toBe(3);
    expect(sieve.NthPrime(2)).toBe(5);
    expect(sieve.NthPrime(3)).toBe(7);
  });
// Quick sanity check for a mid-range value.  
  test("NthPrime handles a mid-range value", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(100)).toBe(547);
  });
});
