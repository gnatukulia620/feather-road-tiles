/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart01 {
    fun feadthergrogfadmtialyesHefokoroseneObfV17HashMix(s: String): Int {
  var h = 83
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 636
  return h
}

    fun feadthergrogfadmtialyesHefokoroseneObfV17ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 172) and 24159
}
}
/* obfuscation-batch:v18 */
private fun feadthergrogfadmtialyesHefokorosenePart01ObfV18HashMix(s: String): Int {
  var h = 75
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 303
  return h
}

private fun feadthergrogfadmtialyesHefokorosenePart01ObfV18SumOdds(nums: IntArray): Int {
  var acc = 7
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 233
  }
  return acc
}

private fun feadthergrogfadmtialyesHefokorosenePart01ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 7) + 2
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v19 */
private fun HefokorosenePart01ObfV1feadthergrogfadmtialyes9ByteFold(s: String): Int {
  var x = 48
  for (i in s.indices) x = (x + s[i].code * 9) xor 171
  return x and 55823
}
/* obfuscation-batch:v20 */
private fun feadthergrogfadmtialyesHefokorosenePart01ObfV20ByteFold(s: String): Int {
  var x = 68
  for (i in s.indices) x = (x + s[i].code * 25) xor 209
  return x and 47798
}

private fun feadthergrogfadmtialyesHefokorosenePart01ObfV20HashMix(s: String): Int {
  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 333
  return h
}

private fun feadthergrogfadmtialyesHefokorosenePart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 15) % 786
  }
  return acc
}

private fun feadthergrogfadmtialyesHefokorosenePart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 33) + 1
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun HefokorosenefeadthergrogfadmtialyesPart01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 157) and 18262
}

private fun HefokoroseneParfeadthergrogfadmtialyest01ObfV21ByteFold(s: String): Int {
  var x = 55
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val feadthergrogfadmtialyesHefokorosenePart01SinkV21Boot = HefokorosenefeadthergrogfadmtialyesPart01ObfV21ShiftXor(41, 60) xor HefokoroseneParfeadthergrogfadmtialyest01ObfV21ByteFold("wh2")
/* obfuscation-batch:v22 */
private fun HefokorosenePart01OfeadthergrogfadmtialyesbfV22ByteFold(s: String): Int {
  var x = 73
  for (i in s.indices) x = (x + s[i].code * 15) and 65535
  return x
}

private fun HefokofeadthergrogfadmtialyesrosenePart01ObfV22HashMix(s: String): Int {
  var h = 73
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 657
  return h
}
@Suppress("UNUSED_VARIABLE") private val HefokorosenePfeadthergrogfadmtialyesart01SinkV22Boot = HefokorosenePart01OfeadthergrogfadmtialyesbfV22ByteFold("c7dv") xor HefokofeadthergrogfadmtialyesrosenePart01ObfV22HashMix("z7dg")
