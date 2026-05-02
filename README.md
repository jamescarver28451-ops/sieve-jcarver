# BHE Software Engineer Coding Exercise

## The Sieve of Eratosthenes

Prime numbers have many modern day applications and a long history in
mathematics. Utilizing your own resources, research the sieve of Eratosthenes,
an algorithm for generating prime numbers. Based on your research, implement
an API that allows the caller to retrieve the Nth prime number.
Some stub code and a test suite have been provided as a convenience. However,
you are encouraged to deviate from Eratosthenes's algorithm, modify the
existing functions/methods, or anything else that might showcase your ability;
provided the following requirements are satisfied.

You must author your work in Go, JavaScript/TypeScript, Python, or C# - all
other language submissions will be rejected. Stub code has been provided, so
please choose from one of the provided language stubs that is most
relevant to your skill set and the position you are applying for.

### Requirements

- Click on the "Use this template" button to create a new GitHub repository, in which you may implement your solution
- The library package provides an API for retrieving the Nth prime number using 0-based indexing where the 0th prime number is 2
- Interviewers must be able to execute a suite of tests
  - Go: `go test ./...`
    - Use `go test ./... -fuzz=.` to enable fuzz tests (random, potentially invalid inputs)
  - C#: `dotnet test Sieve.Tests`
  - Javascript: `npm run test`
  - Python: `python -m unittest test_sieve.py`
- Your solution is committed to your project's `main` branch, no uncommitted changes or untracked files please
- Submit the link to your public repo for review

### Considerations

You may add more tests or restructure existing tests, but you may NOT change or remove
the existing test outcomes; eg- f(0)=2, f(19)=71, f(99)=541, ..., f(10000000)=179424691

During the technical interview, your submission will be discussed, and you will be evaluated in the following areas:

- Technical ability
- Communication skills
- Work habits and complementary skills


JavaScript Solution — Nth Prime (Sieve of Eratosthenes)

Overview

This implementation computes the n‑th prime number using a Sieve of Eratosthenes combined with an analytical upper‑bound estimate to size the sieve efficiently. The function uses 0‑based indexing, where:

NthPrime(0) → 2

NthPrime(1) → 3

NthPrime(2) → 5

Approach

To avoid oversizing the sieve, the implementation uses the standard approximation for the n‑th prime:

Code
pₙ < n (ln n + ln ln n)
This ensures the sieve is large enough to contain the n‑th prime without wasting memory.

Algorithm steps:

Convert the 0‑based index to 1‑based for the formula.

Compute the upper‑bound estimate.

Allocate a Uint8Array for efficient marking.

Perform a standard Sieve of Eratosthenes.

Count primes until the n‑th one is found.

Complexity

Time: O(N log log N)

Space: O(N)

Where N is the size of the sieve determined by the upper‑bound estimate.

Testing

The implementation passes the provided Jest test suite:

bash
npm install
npm test

File Location

Code
javascript/Sieve/sieve.js
