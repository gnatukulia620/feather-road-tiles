/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.squareup.moshi.JsonReader
import okio.Buffer

object WiwatigedPart01 {
    fun zavizukem(body: String): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = WiwatigedPart01ObfeadthergrogfadmtialyesfV22ByteFold("xgp")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = WiwatigedPart01ObfeadthergrogfadmtialyesfV21ByteFold("fwhn") xor WiwatigedPart01ObfV21HashfeadthergrogfadmtialyesMix("8va") xor WfeadthergrogfadmtialyesiwatigedPart01ObfV21SumOdds(intArrayOf(16, 8, 23))
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = WiwatigedPart02.feadthergrogfadmtialyesWiwatigedObfV20HashMix("t6s") xor WiwatigedPart03.feadthergrogfadmtialyesWiwatigedObfV20SumOdds(intArrayOf(16, 8, 28)) xor feadthergrogfadmtialyesWiwatigedObfV20ClampMod(17, 47)
    val count = JsonReader.of(Buffer().writeUtf8(body)).use { reader ->
        var tokens = 0
        while (reader.peek() != JsonReader.Token.END_DOCUMENT) {
            when (reader.peek()) {
                JsonReader.Token.BEGIN_OBJECT -> {
                    reader.beginObject()
                    tokens += 1
                }
                JsonReader.Token.END_OBJECT -> {
                    reader.endObject()
                    tokens += 1
                }
                JsonReader.Token.BEGIN_ARRAY -> {
                    reader.beginArray()
                    tokens += 1
                }
                JsonReader.Token.END_ARRAY -> {
                    reader.endArray()
                    tokens += 1
                }
                JsonReader.Token.NAME -> {
                    reader.nextName()
                    tokens += 1
                }
                JsonReader.Token.STRING -> {
                    reader.nextString()
                    tokens += 1
                }
                JsonReader.Token.NUMBER -> {
                    reader.nextDouble()
                    tokens += 1
                }
                JsonReader.Token.BOOLEAN -> {
                    reader.nextBoolean()
                    tokens += 1
                }
                JsonReader.Token.NULL -> {
                    reader.nextNull<Any>()
                    tokens += 1
                }
                else -> {
                    reader.skipValue()
                    tokens += 1
                }
            }
        }
        tokens
    }
    return count.toString()
}

    fun feadthergrogfadmtialyesWiwatigedObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 22) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v21 */
private fun WiwatigedPart01ObfeadthergrogfadmtialyesfV21ByteFold(s: String): Int {
  var x = 48
  for (i in s.indices) x = (x + s[i].code * 16) and 65535
  return x
}

private fun WiwatigedPart01ObfV21HashfeadthergrogfadmtialyesMix(s: String): Int {
  var h = 84
  for (i in s.indices) h = (h xor (s[i].code * 20)) % 313
  return h
}

private fun WfeadthergrogfadmtialyesiwatigedPart01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 37
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 32) % 369
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val feadthergrogfadmtialyesWiwatigedPart01SinkV21Boot = WiwatigedPart01ObfeadthergrogfadmtialyesfV21ByteFold("fwhn") xor WiwatigedPart01ObfV21HashfeadthergrogfadmtialyesMix("8va") xor WfeadthergrogfadmtialyesiwatigedPart01ObfV21SumOdds(intArrayOf(16, 8, 23))
/* obfuscation-batch:v22 */
private fun WiwatigedPart01ObfeadthergrogfadmtialyesfV22ByteFold(s: String): Int {
  var x = 55
  for (i in s.indices) x = (x + s[i].code * 14) and 65535
  return x
}
