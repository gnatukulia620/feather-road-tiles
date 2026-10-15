package com.feathderrgoadtiles38v8w8

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Noputugesi(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Qahebuxul"

    @ReactMethod
    fun pevomojefelave(promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = NoputugesiObffeadthergrogfadmtialyesV22SumOdds(intArrayOf(9, 10, 8)) xor NopufeadthergrogfadmtialyestugesiObfV22ShiftXor(33, 56)
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane or 32934
        val laneWord = "njfg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { firawivaselipe(reactApplicationContext) }.getOrDefault("")
        promise.resolve(dexValue)
    }

    private fun firawivaselipe(context: Context): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = NoputugesiObffeadthergrogfadmtialyesV22SumOdds(intArrayOf(9, 10, 8)) xor NopufeadthergrogfadmtialyestugesiObfV22ShiftXor(33, 56)
        val loaded = WebSettings.getDefaultUserAgent(context)
        return if (loaded.isNullOrEmpty()) "" else loaded
    }
}
/* obfuscation-batch:v22 */
private fun NoputugesiObffeadthergrogfadmtialyesV22SumOdds(nums: IntArray): Int {
  var acc = 44
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 469
  }
  return acc
}

private fun NopufeadthergrogfadmtialyestugesiObfV22ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 145) and 6151
}
