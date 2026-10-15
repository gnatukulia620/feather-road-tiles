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

object CIntafeadthergrogfadmtialyeskePart01 {
    internal val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    internal val cookieLayout = arrayOf("pad", "network", "pad", "adId", "timezone", "oneLink", "androidId", "session_id", "app_version", "userAgent")
    internal val headerLayout = arrayOf("pushToken", "referer", "pad", "manufacturer", "device_model", "pad")
    internal val dummyBodyKeys = arrayOf("cegecej", "fanaqi", "lumup")
    internal val extraQuery = linkedMapOf("kir" to "lof", "kuja" to "suja", "duf" to "bodet")
    internal val fieldRoutes = linkedMapOf("appId" to "body", "deviceID" to "body", "adId" to "cookie", "pushToken" to "header", "referer" to "header", "oneLink" to "cookie", "naming" to "body", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "cookie", "event" to "body", "device_model" to "header", "manufacturer" to "header", "locale" to "body", "timezone" to "cookie", "network" to "cookie", "screen" to "body", "session_id" to "cookie", "play_integrity_token" to "body")

    fun jibonibefo(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx("hnm") xor CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(intArrayOf(15, 20, 26)) xor CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(60, 62)
    val values = LinkedHashMap<String, String>()
    for (pair in tasuweqelaf(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CIntakePartfeadthergrogfadmtialyes02.dadavozoqixe(cookieLayout, values)
    val header = CIntakePartfeadthergrogfadmtialyes02.dadavozoqixe(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CIntakePartfeadthergrogfadmtialyes02.enc(key) + "=" + CIntakePartfeadthergrogfadmtialyes02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CIntakePartfeadthergrogfadmtialyes02.enc(key) + "=" + CIntakePartfeadthergrogfadmtialyes02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun tasuweqelaf(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx("hnm") xor CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(intArrayOf(15, 20, 26)) xor CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(60, 62)
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun cacoxeculoca(base: String): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(intArrayOf(15, 20, 26)) xor CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(60, 62)
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx("hnm") xor CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(intArrayOf(19, 21, 16))
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/deku" + if (params.isEmpty()) "" else "?" + params
}

    fun sowotarodeqojo(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx("hnm") xor CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(intArrayOf(15, 20, 26)) xor CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(60, 62)
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(35, 16) xor CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(28, 46) xor CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold("8nt") xor CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx("qgkn")
      @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV21 = CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx("hnm") xor CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV20 = CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(intArrayOf(15, 20, 26)) xor CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(60, 62)
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}
/* obfuscation-batch:v20 */
private fun CIntakePart01ObfV20SumOdfeadthergrogfadmtialyesds(nums: IntArray): Int {
  var acc = 17
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 37) % 367
  }
  return acc
}

private fun CInfeadthergrogfadmtialyestakePart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 35) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV20SfeadthergrogfadmtialyeshiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 40) and 29362
}

/* obfuscation-batch:v21 */
private fun CIntakePart01ObfV21HashMifeadthergrogfadmtialyesx(s: String): Int {
  var h = 61
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 600
  return h
}

private fun CIntakePfeadthergrogfadmtialyesart01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 72
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 29) % 293
  }
  return acc
}
/* obfuscation-batch:v22 */
private fun CIntakePart0feadthergrogfadmtialyes1ObfV22ClampMod(n: Int, m: Int): Int {
  val span = (m % 63) + 10
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV22ShiftXfeadthergrogfadmtialyesor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 150) and 58342
}

private fun CIntakePfeadthergrogfadmtialyesart01ObfV22ByteFold(s: String): Int {
  var x = 84
  for (i in s.indices) x = (x + s[i].code * 17) and 65535
  return x
}

private fun CIntakePart01ObfV22HashMifeadthergrogfadmtialyesx(s: String): Int {
  var h = 84
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 700
  return h
}
