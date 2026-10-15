/* autosetup-decoy:v1 */
package com.feathderrgoadtiles38v8w8

object DfeadthergrogfadmtialyesFlux06 {
  fun tap(seed: Int): Int {
    var x = seed * 71
    x = x xor 63924
    x %= 280
    if (x < 0) x += 280
    return x
  }
}
