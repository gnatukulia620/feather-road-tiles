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

object KoponafofujidPart01 {
    fun xugeculoqejur(): String {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = KoponafofujidPartfeadthergrogfadmtialyes01ObfV22ClampMod(40, 32) xor KoponafofujidPart01ObfV2feadthergrogfadmtialyes2ShiftXor(33, 61) xor KoponafofujidPart01ObfV22ByteFofeadthergrogfadmtialyesld("4t2")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = KoponafofujidPart01ObfV21ByteFolfeadthergrogfadmtialyesd("7amd") xor KoponafofujidPart01ObfV21HashMfeadthergrogfadmtialyesix("29") xor KoponafofujidPart01ObfeadthergrogfadmtialyesfV21SumOdds(intArrayOf(16, 11, 28)) xor KoponafofujidPart01ObfeadthergrogfadmtialyesfV21ClampMod(25, 39)
        
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = feadthergrogfadmtialyesKoponafofujidPart01ObfV20HashMix("s43") xor feadthergrogfadmtialyesKoponafofujidPart01ObfV20SumOdds(intArrayOf(20, 20, 20)) xor feadthergrogfadmtialyesKoponafofujidPart01ObfV20ClampMod(38, 79)
    val bytes = ByteArray(16)
    java.security.SecureRandom().nextBytes(bytes)
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV19 = KoponafofujidPart02.KoponafofujidObfV19ByteFfeadthergrogfadmtialyesold("gq2z") xor KoponafofujidPart03.KoponafofujidObfVfeadthergrogfadmtialyes19HashMix("tkv")
    return bytes.joinToString("") { byte ->
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = KoponafofujidPartfeadthergrogfadmtialyes01ObfV22ClampMod(40, 32) xor KoponafofujidPart01ObfV2feadthergrogfadmtialyes2ShiftXor(33, 61) xor KoponafofujidPart01ObfV22ByteFofeadthergrogfadmtialyesld("4t2")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = KoponafofujidPart01ObfV21ByteFolfeadthergrogfadmtialyesd("7amd") xor KoponafofujidPart01ObfV21HashMfeadthergrogfadmtialyesix("29") xor KoponafofujidPart01ObfeadthergrogfadmtialyesfV21SumOdds(intArrayOf(16, 11, 28)) xor KoponafofujidPart01ObfeadthergrogfadmtialyesfV21ClampMod(25, 39)
        "%02x".format(byte)
    }
}
}
/* obfuscation-batch:v20 */
private fun feadthergrogfadmtialyesKoponafofujidPart01ObfV20HashMix(s: String): Int {
  var h = 40
  for (i in s.indices) h = (h xor (s[i].code * 10)) % 702
  return h
}

private fun feadthergrogfadmtialyesKoponafofujidPart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 63
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 516
  }
  return acc
}

private fun feadthergrogfadmtialyesKoponafofujidPart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 47) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun KoponafofujidPart01ObfV21ByteFolfeadthergrogfadmtialyesd(s: String): Int {
  var x = 54
  for (i in s.indices) x = (x + s[i].code * 18) and 65535
  return x
}

private fun KoponafofujidPart01ObfV21HashMfeadthergrogfadmtialyesix(s: String): Int {
  var h = 62
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 673
  return h
}

private fun KoponafofujidPart01ObfeadthergrogfadmtialyesfV21SumOdds(nums: IntArray): Int {
  var acc = 24
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 231
  }
  return acc
}

private fun KoponafofujidPart01ObfeadthergrogfadmtialyesfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 56) + 9
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v22 */
private fun KoponafofujidPartfeadthergrogfadmtialyes01ObfV22ClampMod(n: Int, m: Int): Int {
  val span = (m % 25) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KoponafofujidPart01ObfV2feadthergrogfadmtialyes2ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 171) and 16908
}

private fun KoponafofujidPart01ObfV22ByteFofeadthergrogfadmtialyesld(s: String): Int {
  var x = 15
  for (i in s.indices) x = (x + s[i].code * 8) and 65535
  return x
}
