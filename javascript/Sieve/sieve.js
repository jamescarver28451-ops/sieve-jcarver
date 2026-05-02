class Sieve {
  // Return the Nth prime number using 0-based indexing (0 -> 2)
  NthPrime(n) {
    if (n < 0) {
      throw new Error("n must be non-negative");
    }

    // Handle very small n directly
    if (n === 0) return 2;
    if (n === 1) return 3;

    // --- Upper bound estimate for the nth prime ---
    // For n >= 6, p_n < n (ln n + ln ln n)
    const nn = n + 1; // convert 0-based to 1-based for the formula
    const estimate = Math.ceil(nn * (Math.log(nn) + Math.log(Math.log(nn))));

    // Boolean array for sieve
    const limit = Math.max(estimate, 15);
    const sieve = new Uint8Array(limit + 1);

    let count = 0;
    let prime = 2;

    for (let i = 2; i <= limit; i++) {
      if (sieve[i] === 0) {
        // i is prime
        if (count === n) {
          prime = i;
          break;
        }
        count++;

        // Mark multiples
        for (let j = i * 2; j <= limit; j += i) {
          sieve[j] = 1;
        }
      }
    }
    return prime;
  }
}

module.exports = Sieve;
