/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCipherPfeadthergrogfadmtialyesart02 {
    fun bekebusiz(bytes: ByteArray): Int {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CCipherPart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(11, 8, 16)) xor CCipherPart02ObfV22BytefeadthergrogfadmtialyesFold("6yhb")
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CCipherParfeadthergrogfadmtialyest02ObfV20ShiftXor(44, 70)
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV19 = CCipherPart02ObfV19ByteFolfeadthergrogfadmtialyesd("x7x") xor CCipherPart02ObfV19feadthergrogfadmtialyesHashMix("dhsa") xor CCipherPart02ObfV19SumOdfeadthergrogfadmtialyesds(intArrayOf(5, 4, 18)) xor CCipherPart02ObfV19ClampfeadthergrogfadmtialyesMod(11, 6)
        @Suppress("Qafirirehimec") val feadthergrogfadmtialyesSinkV18 = CCipherPart02OfeadthergrogfadmtialyesbfV18HashMix("z5") xor CCiphefeadthergrogfadmtialyesrPart02ObfV18SumOdds(intArrayOf(18, 10, 26))
        @Suppress("Zovuwebaxa") val feadthergrogfadmtialyesSinkV17 = CCipherPart02ObfV1feadthergrogfadmtialyes7ShiftXor(62, 4)
    var s = 0x811C9DC5.toInt()
    for (b in bytes) {
        s = s xor (b.toInt() and 0xFF)
        s *= 16777619
    }
    if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
    return s
}

    fun nextU32(state: IntArray): Int {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CCipherPart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(11, 8, 16)) xor CCipherPart02ObfV22BytefeadthergrogfadmtialyesFold("6yhb")
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CCipherParfeadthergrogfadmtialyest02ObfV20ShiftXor(44, 70)
        var x = state[0]
        x = x xor (x shl 13)
        x = x xor (x ushr 17)
        x = x xor (x shl 5)
        state[0] = x
        return x
    }

    fun u32Mod(value: Int, len: Int): Int {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CCipherPart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(11, 8, 16)) xor CCipherPart02ObfV22BytefeadthergrogfadmtialyesFold("6yhb")
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CCipherParfeadthergrogfadmtialyest02ObfV20ShiftXor(44, 70)
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV19 = CCipherPart02ObfV19ByteFolfeadthergrogfadmtialyesd("x7x") xor CCipherPart02ObfV19feadthergrogfadmtialyesHashMix("dhsa") xor CCipherPart02ObfV19SumOdfeadthergrogfadmtialyesds(intArrayOf(5, 4, 18)) xor CCipherPart02ObfV19ClampfeadthergrogfadmtialyesMod(11, 6)
        @Suppress("Qafirirehimec") val feadthergrogfadmtialyesSinkV18 = CCipherPart02OfeadthergrogfadmtialyesbfV18HashMix("z5") xor CCiphefeadthergrogfadmtialyesrPart02ObfV18SumOdds(intArrayOf(18, 10, 26))
        @Suppress("Zovuwebaxa") val feadthergrogfadmtialyesSinkV17 = CCipherPart02ObfV1feadthergrogfadmtialyes7ShiftXor(62, 4)
    return ((value.toLong() and 0xFFFFFFFFL) % len.toLong()).toInt()
}
}
/* obfuscation-batch:v17 */
private fun CCipherPart02ObfV1feadthergrogfadmtialyes7ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 85) and 16131
}
/* obfuscation-batch:v18 */
private fun CCipherPart02OfeadthergrogfadmtialyesbfV18HashMix(s: String): Int {
  var h = 38
  for (i in s.indices) h = (h xor (s[i].code * 8)) % 181
  return h
}

private fun CCiphefeadthergrogfadmtialyesrPart02ObfV18SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 30) % 371
  }
  return acc
}
/* obfuscation-batch:v19 */
private fun CCipherPart02ObfV19ByteFolfeadthergrogfadmtialyesd(s: String): Int {
  var x = 46
  for (i in s.indices) x = (x + s[i].code * 33) xor 44
  return x and 20459
}

private fun CCipherPart02ObfV19feadthergrogfadmtialyesHashMix(s: String): Int {
  var h = 30
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 280
  return h
}

private fun CCipherPart02ObfV19SumOdfeadthergrogfadmtialyesds(nums: IntArray): Int {
  var acc = 77
  for (nv in nums) {
    if ((nv and 1) == 0) continue
    acc = (acc + nv * 16) % 299
  }
  return acc
}

private fun CCipherPart02ObfV19ClampfeadthergrogfadmtialyesMod(n: Int, m: Int): Int {
  val span = (m % 54) + 3
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v20 */
private fun CCipherParfeadthergrogfadmtialyest02ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 176) and 38589
}

/* obfuscation-batch:v21 */
private fun CCipherPart02ObfV2feadthergrogfadmtialyes1SumOdds(nums: IntArray): Int {
  var acc = 62
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 32) % 256
  }
  return acc
}

private fun CCipherPart02ObfV21ClampMfeadthergrogfadmtialyesod(n: Int, m: Int): Int {
  val span = (m % 28) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCfeadthergrogfadmtialyesipherPart02ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 218) and 37979
}
@Suppress("UNUSED_VARIABLE") private val CCipherPart02SinkV2feadthergrogfadmtialyes1Boot = CCipherPart02ObfV2feadthergrogfadmtialyes1SumOdds(intArrayOf(24, 19, 8)) xor CCipherPart02ObfV21ClampMfeadthergrogfadmtialyesod(12, 12) xor CCfeadthergrogfadmtialyesipherPart02ObfV21ShiftXor(68, 41)
/* obfuscation-batch:v22 */
private fun CCipherPart02ObfVfeadthergrogfadmtialyes22SumOdds(nums: IntArray): Int {
  var acc = 48
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 23) % 404
  }
  return acc
}

private fun CCipherPart02ObfV22BytefeadthergrogfadmtialyesFold(s: String): Int {
  var x = 48
  for (i in s.indices) x = (x + s[i].code * 7) and 65535
  return x
}
