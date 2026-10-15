/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object CujabejivePart01 {
    fun qononemuwaqeh(): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CujabejivePart01ObfV22SumfeadthergrogfadmtialyesOdds(intArrayOf(24, 14, 12)) xor CujabejivefeadthergrogfadmtialyesPart01ObfV22ClampMod(53, 37) xor CujabejivePart01feadthergrogfadmtialyesObfV22ShiftXor(46, 67)
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = feadthergrogfadmtialyesCujabejivePart01ObfV20HashMix("8vf") xor feadthergrogfadmtialyesCujabejivePart01ObfV20SumOdds(intArrayOf(28, 5, 3)) xor feadthergrogfadmtialyesCujabejivePart01ObfV20ClampMod(56, 17) xor feadthergrogfadmtialyesCujabejivePart01ObfV20ShiftXor(22, 69)
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV19 = CujabejivePart01ObfV19ClampfeadthergrogfadmtialyesMod(18, 10) xor CujabejivePart01ObfV19ShfeadthergrogfadmtialyesiftXor(35, 9) xor CujabejivePart01ObfV19BfeadthergrogfadmtialyesyteFold("aex9")
        @Suppress("Qafirirehimec") val feadthergrogfadmtialyesSinkV18 = feadthergrogfadmtialyesCujabejivePart01ObfV18ClampMod(21, 55) xor feadthergrogfadmtialyesCujabejivePart01ObfV18ShiftXor(33, 25) xor feadthergrogfadmtialyesCujabejivePart01ObfV18ByteFold("gs53")
    @Suppress("Zovuwebaxa") val feadthergrogfadmtialyesSinkV17 = CujabejivePart02.feadthergrogfadmtialyesCujabejiveObfV17ByteFold("pf") xor feadthergrogfadmtialyesCujabejiveObfV17HashMix("288n") xor CujabejivePart02.feadthergrogfadmtialyesCujabejiveObfV17SumOdds(intArrayOf(15, 18, 8)) xor feadthergrogfadmtialyesCujabejiveObfV17ClampMod(14, 70)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun feadthergrogfadmtialyesCujabejiveObfV17HashMix(s: String): Int {
  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 17)) % 724
  return h
}

    fun feadthergrogfadmtialyesCujabejiveObfV17ClampMod(n: Int, m: Int): Int {
  val span = (m % 62) + 1
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v18 */
private fun feadthergrogfadmtialyesCujabejivePart01ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 51) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun feadthergrogfadmtialyesCujabejivePart01ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 25) and 54752
}

private fun feadthergrogfadmtialyesCujabejivePart01ObfV18ByteFold(s: String): Int {
  var x = 10
  for (i in s.indices) x = (x + s[i].code * 17) xor 224
  return x and 16049
}
/* obfuscation-batch:v19 */
private fun CujabejivePart01ObfV19ClampfeadthergrogfadmtialyesMod(n: Int, m: Int): Int {
  val span = (m % 15) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CujabejivePart01ObfV19ShfeadthergrogfadmtialyesiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 176) and 45965
}

private fun CujabejivePart01ObfV19BfeadthergrogfadmtialyesyteFold(s: String): Int {
  var x = 81
  for (i in s.indices) x = (x + s[i].code * 8) xor 186
  return x and 45970
}
/* obfuscation-batch:v20 */
private fun feadthergrogfadmtialyesCujabejivePart01ObfV20HashMix(s: String): Int {
  var h = 89
  for (i in s.indices) h = (h xor (s[i].code * 43)) % 208
  return h
}

private fun feadthergrogfadmtialyesCujabejivePart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 4
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 350
  }
  return acc
}

private fun feadthergrogfadmtialyesCujabejivePart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 43) + 5
  val x = n % span
  return if (x < 0) x + span else x
}

private fun feadthergrogfadmtialyesCujabejivePart01ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 37) and 61108
}

/* obfuscation-batch:v21 */
private fun CujabejivfeadthergrogfadmtialyesePart01ObfV21HashMix(s: String): Int {
  var h = 76
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 728
  return h
}

private fun CujabejivePafeadthergrogfadmtialyesrt01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 70
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 209
  }
  return acc
}

private fun CujabejivePart01ObfeadthergrogfadmtialyesfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 55) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CujabefeadthergrogfadmtialyesjivePart01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 230) and 37507
}
@Suppress("UNUSED_VARIABLE") private val feadthergrogfadmtialyesCujabejivePart01SinkV21Boot = CujabejivfeadthergrogfadmtialyesePart01ObfV21HashMix("8h") xor CujabejivePafeadthergrogfadmtialyesrt01ObfV21SumOdds(intArrayOf(17, 22, 16)) xor CujabejivePart01ObfeadthergrogfadmtialyesfV21ClampMod(67, 40) xor CujabefeadthergrogfadmtialyesjivePart01ObfV21ShiftXor(79, 9)
/* obfuscation-batch:v22 */
private fun CujabejivePart01ObfV22SumfeadthergrogfadmtialyesOdds(nums: IntArray): Int {
  var acc = 45
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 26) % 669
  }
  return acc
}

private fun CujabejivefeadthergrogfadmtialyesPart01ObfV22ClampMod(n: Int, m: Int): Int {
  val span = (m % 56) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CujabejivePart01feadthergrogfadmtialyesObfV22ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 135) and 40154
}
