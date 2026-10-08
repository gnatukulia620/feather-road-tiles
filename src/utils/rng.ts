/** Deterministic 32-bit LCG — same board for the same level on every launch. */
export function makeRng(seed: number) {
  let s = (seed >>> 0) || 1;
  return {
    next(): number {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      return s / 4294967296;
    },
    int(max: number): number {
      return Math.floor(this.next() * max);
    },
  };
}
