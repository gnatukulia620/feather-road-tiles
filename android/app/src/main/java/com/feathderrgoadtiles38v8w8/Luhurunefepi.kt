/* cf-intake:v1 */
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

class Luhurunefepi(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Luhurunefepi"

    @ReactMethod
    fun cuxuzajosura(fields: ReadableArray, bodyPlain: String, promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        try {
            promise.resolve(jibonibefo(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun tewatekuqoge(json: String, promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        try {
            promise.resolve(rifujukaribaca(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun xogetinoje(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        Thread {
            try {
                val connection = (URL(cacoxeculoca(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "here" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Ce", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }

    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("naming", "app_version", "pad", "pad", "referer", "oneLink", "pad")
    private val headerLayout = arrayOf("manufacturer", "userAgent", "pushToken", "pad", "adId", "pad", "androidId", "appId", "pad", "event")
    private val dummyBodyKeys = arrayOf("guheco", "bafuceb", "tifaj")
    private val extraQuery = linkedMapOf("vi" to "bejuc")
    private val fieldRoutes = linkedMapOf("appId" to "header", "deviceID" to "body", "adId" to "header", "pushToken" to "header", "referer" to "cookie", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "header", "app_version" to "cookie", "androidId" to "header", "event" to "header", "device_model" to "body", "manufacturer" to "header", "locale" to "body", "timezone" to "body", "network" to "body", "screen" to "body", "session_id" to "body", "play_integrity_token" to "body")

    private fun jibonibefo(fields: ReadableArray, bodyPlain: String): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        val values = LinkedHashMap<String, String>()
        for (pair in tasuweqelaf(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = dadavozoqixe(cookieLayout, values)
        val header = dadavozoqixe(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(pecejefota(key) + "=" + pecejefota(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(pecejefota(key) + "=" + pecejefota((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    private fun dadavozoqixe(layout: Array<String>, values: Map<String, String>): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
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

    private fun tasuweqelaf(plain: String): List<Pair<String, String>> {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    private fun pecejefota(value: String): String = URLEncoder.encode(value, "UTF-8")

    private fun cacoxeculoca(base: String): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/geko" + if (params.isEmpty()) "" else "?" + params
    }

    private fun rifujukaribaca(obj: JSONObject): com.facebook.react.bridge.WritableMap {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        val map = Arguments.createMap()
        sowotarodeqojo(map, "redirectUrl", jupojinawe(obj, "gip", "redirectUrl"))
        sowotarodeqojo(map, "redirectUrlInitial", jupojinawe(obj, "qadu", "redirectUrlInitial"))
        sowotarodeqojo(map, "error", jupojinawe(obj, "zoh", "error"))
        map.putBoolean("blockUser", judugorogowu(samesanojac(obj, "wi", "blockUser")))
        return map
    }

    private fun sowotarodeqojo(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    private fun jupojinawe(obj: JSONObject, alias: String, fallback: String): String? {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        val raw = samesanojac(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    private fun samesanojac(obj: JSONObject, alias: String, fallback: String): Any? {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }

    private fun judugorogowu(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix("26ev") xor LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(intArrayOf(16, 29, 7)) xor LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold("bg")
        return when (value) {
            null -> false
            is Boolean -> value
            is Number -> value.toDouble() != 0.0
            is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
            else -> true
        }
    }

}
/* obfuscation-batch:v22 */
private fun LuhuruneffeadthergrogfadmtialyesepiObfV22HashMix(s: String): Int {
  var h = 35
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 293
  return h
}

private fun LuhurunefepiObfV22SumOddfeadthergrogfadmtialyess(nums: IntArray): Int {
  var acc = 35
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 293
  }
  return acc
}

private fun LuhurunfeadthergrogfadmtialyesefepiObfV22ByteFold(s: String): Int {
  var x = 35
  for (i in s.indices) x = (x + s[i].code * 28) and 65535
  return x
}
