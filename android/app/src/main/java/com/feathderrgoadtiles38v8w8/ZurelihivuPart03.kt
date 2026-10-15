/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object ZurelihivuPart03 {
    fun feadthergrogfadmtialyesZurelihivuObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 64) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v19 */
private fun ZurelihivuPart03ObfV19ClampModfeadthergrogfadmtialyes(n: Int, m: Int): Int {
  val span = (m % 49) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun ZurelihivuPart03ObfV19ShiftXofeadthergrogfadmtialyesr(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 207) and 25251
}
/* obfuscation-batch:v20 */
private fun feadthergrogfadmtialyesZurelihivuPart03ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 100) and 1892
}

/* obfuscation-batch:v21 */
private fun ZurelihivuPart03ObfV21SfeadthergrogfadmtialyeshiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 158) and 57037
}

private fun ZurelihfeadthergrogfadmtialyesivuPart03ObfV21ByteFold(s: String): Int {
  var x = 33
  for (i in s.indices) x = (x + s[i].code * 33) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val feadthergrogfadmtialyesZurelihivuPart03SinkV21Boot = ZurelihivuPart03ObfV21SfeadthergrogfadmtialyeshiftXor(45, 57) xor ZurelihfeadthergrogfadmtialyesivuPart03ObfV21ByteFold("gs8")
/* obfuscation-batch:v22 */
private fun ZurelihivuPart03ObfV2feadthergrogfadmtialyes2SumOdds(nums: IntArray): Int {
  var acc = 80
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 43) % 329
  }
  return acc
}

private fun ZurelihivuPart03ObfV22ShiftXfeadthergrogfadmtialyesor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 110) and 60267
}
@Suppress("UNUSED_VARIABLE") private val ZurelihivuPart0feadthergrogfadmtialyes3SinkV22Boot = ZurelihivuPart03ObfV2feadthergrogfadmtialyes2SumOdds(intArrayOf(21, 10, 25)) xor ZurelihivuPart03ObfV22ShiftXfeadthergrogfadmtialyesor(37, 66)
