/* net-stack:v1 okhttp+moshi */
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

class Tahuqufosapa(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Vasetijaf"

    @ReactMethod
    fun nozerunubebehe(url: String, promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = TahuqufosapaOfeadthergrogfadmtialyesbfV22HashMix("2h") xor TahuqufosapafeadthergrogfadmtialyesObfV22SumOdds(intArrayOf(5, 9, 18)) xor TahuqufosapaObfV2feadthergrogfadmtialyes2ByteFold("mm")
        val client = OkHttpClient.Builder()
            .callTimeout(8, TimeUnit.SECONDS)
            .build()
        var short = ""
        try {
            client.newCall(Request.Builder().url(url).get().build()).execute().use { response ->
                val text = response.body?.string() ?: ""
                short = coxecumunita(text)
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            client.dispatcher.executorService.shutdown()
            client.connectionPool.evictAll()
        }
        promise.resolve(short)
    }

    private fun coxecumunita(body: String): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = TahuqufosapaOfeadthergrogfadmtialyesbfV22HashMix("2h") xor TahuqufosapafeadthergrogfadmtialyesObfV22SumOdds(intArrayOf(5, 9, 18)) xor TahuqufosapaObfV2feadthergrogfadmtialyes2ByteFold("mm")
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
}
/* obfuscation-batch:v22 */
private fun TahuqufosapaOfeadthergrogfadmtialyesbfV22HashMix(s: String): Int {
  var h = 46
  for (i in s.indices) h = (h xor (s[i].code * 33)) % 753
  return h
}

private fun TahuqufosapafeadthergrogfadmtialyesObfV22SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 33) % 753
  }
  return acc
}

private fun TahuqufosapaObfV2feadthergrogfadmtialyes2ByteFold(s: String): Int {
  var x = 46
  for (i in s.indices) x = (x + s[i].code * 24) and 65535
  return x
}
