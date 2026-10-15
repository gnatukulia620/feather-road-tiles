/* autosetup-decoy:v1 */
package com.feathderrgoadtiles38v8w8

object DfeadthergrogfadmtialyesGrove02 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 63102
    x = (x ushr 5) xor 3094
    x = (x * 51) and 0xffff
    return x
  }
}
