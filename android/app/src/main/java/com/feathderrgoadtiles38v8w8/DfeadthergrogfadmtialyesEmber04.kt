/* autosetup-decoy:v1 */
package com.feathderrgoadtiles38v8w8

object DfeadthergrogfadmtialyesEmber04 {
  fun tap(seed: Int): Int {
    val tag = "DfeadthergrogfadmtialyesEmber04"
    var x = seed xor 62849
    for (ch in tag) {
      x = (x + ch.code * 23) and 0xffff
    }
    return x xor 2901
  }
}
