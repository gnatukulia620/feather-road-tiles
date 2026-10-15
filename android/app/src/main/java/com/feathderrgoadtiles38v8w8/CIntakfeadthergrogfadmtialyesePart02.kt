/* autosetup-split:v1 */
package com.feathderrgoadtiles38v8w8

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

object CIntakfeadthergrogfadmtialyesePart02 {
    fun dadavozoqixe(layout: Array<String>, values: Map<String, String>): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
    if (layout.isEmpty()) return ""
    val out = ArrayList<String>(layout.size)
    var pad = 0
    for (slot in layout) {
        if (slot == "pad") {
            out.add("p" + pad.toString(16) + values.size)
            pad += 1
        } else {
            out.add(values[slot] ?: "")
        }
    }
    return out.joinToString("|")
}

    fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart02ObfeadthergrogfadmtialyesfV21ByteFold("87") xor CIntakePart02ObfeadthergrogfadmtialyesfV21HashMix("5wv") xor CIntakePart02ObffeadthergrogfadmtialyesV21SumOdds(intArrayOf(14, 23, 28))
        return URLEncoder.encode(value, "UTF-8")
    }

private fun cacoxeculoca(base: String): String {
    val root = base.trimEnd('/')
    val params = CIntafeadthergrogfadmtialyeskePart01.extraQuery.entries.joinToString("&") { (key, value) ->
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart02ObfeadthergrogfadmtialyesfV21ByteFold("87") xor CIntakePart02ObfeadthergrogfadmtialyesfV21HashMix("5wv") xor CIntakePart02ObffeadthergrogfadmtialyesV21SumOdds(intArrayOf(14, 23, 28))
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/vusah" + if (params.isEmpty()) "" else "?" + params
}

    fun rifujukaribaca(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart02ObfeadthergrogfadmtialyesfV21ByteFold("87") xor CIntakePart02ObfeadthergrogfadmtialyesfV21HashMix("5wv") xor CIntakePart02ObffeadthergrogfadmtialyesV21SumOdds(intArrayOf(14, 23, 28))
        
    val map = Arguments.createMap()
    CIntafeadthergrogfadmtialyeskePart01.sowotarodeqojo(map, "redirectUrl", pick(obj, "to", "redirectUrl"))
    CIntafeadthergrogfadmtialyeskePart01.sowotarodeqojo(map, "redirectUrlInitial", pick(obj, "nad", "redirectUrlInitial"))
    CIntafeadthergrogfadmtialyeskePart01.sowotarodeqojo(map, "error", pick(obj, "wi", "error"))
    map.putBoolean("blockUser", asBool(CIntafeadthergrogfadmtialyeskePart01.pickRaw(obj, "bo", "blockUser")))
    return map
}

    fun pick(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart02ObfeadthergrogfadmtialyesfV21ByteFold("87") xor CIntakePart02ObfeadthergrogfadmtialyesfV21HashMix("5wv") xor CIntakePart02ObffeadthergrogfadmtialyesV21SumOdds(intArrayOf(14, 23, 28))
        
    val raw = CIntafeadthergrogfadmtialyeskePart01.pickRaw(obj, alias, fallback) ?: return null
    val text = raw.toString()
    return if (text.isEmpty()) null else text
}

    fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(intArrayOf(12, 22, 26)) xor CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold("yv")
        return when (value) {
            null -> false
            is Boolean -> value
            is Number -> value.toDouble() != 0.0
            is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
            else -> true
        }
    }
}

/* obfuscation-batch:v21 */
private fun CIntakePart02ObfeadthergrogfadmtialyesfV21ByteFold(s: String): Int {
  var x = 43
  for (i in s.indices) x = (x + s[i].code * 23) and 65535
  return x
}

private fun CIntakePart02ObfeadthergrogfadmtialyesfV21HashMix(s: String): Int {
  var h = 49
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 776
  return h
}

private fun CIntakePart02ObffeadthergrogfadmtialyesV21SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 39) % 380
  }
  return acc
}
/* obfuscation-batch:v22 */
private fun CIntakePart02ObfVfeadthergrogfadmtialyes22SumOdds(nums: IntArray): Int {
  var acc = 24
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 804
  }
  return acc
}

private fun CInfeadthergrogfadmtialyestakePart02ObfV22ByteFold(s: String): Int {
  var x = 24
  for (i in s.indices) x = (x + s[i].code * 27) and 65535
  return x
}
