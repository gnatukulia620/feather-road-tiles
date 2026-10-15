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

class Fezavuhed(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Hacitagifexuv"

    @ReactMethod
    fun rigenugopemu(promise: Promise) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = FezavuhefeadthergrogfadmtialyesdObfV22HashMix("zgh") xor FezavfeadthergrogfadmtialyesuhedObfV22SumOdds(intArrayOf(4, 11, 25)) xor FezavuhedObfV22feadthergrogfadmtialyesClampMod(80, 39) xor FezavuhedObfV2feadthergrogfadmtialyes2ShiftXor(9, 25)
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane * 37
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 571
            1 -> dexLane + 3124
            else -> dexLane + 209
        }
        dexLane = dexLane % 8
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = FezavuhefeadthergrogfadmtialyesdObfV22HashMix("zgh") xor FezavfeadthergrogfadmtialyesuhedObfV22SumOdds(intArrayOf(4, 11, 25)) xor FezavuhedObfV22feadthergrogfadmtialyesClampMod(80, 39) xor FezavuhedObfV2feadthergrogfadmtialyes2ShiftXor(9, 25)
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = runCatching { norirobidowe { value -> finish(value) } }
        if (started.isFailure) finish("")
    }

    private fun norirobidowe(finish: (String) -> Unit) {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = FezavuhefeadthergrogfadmtialyesdObfV22HashMix("zgh") xor FezavfeadthergrogfadmtialyesuhedObfV22SumOdds(intArrayOf(4, 11, 25)) xor FezavuhedObfV22feadthergrogfadmtialyesClampMod(80, 39) xor FezavuhedObfV2feadthergrogfadmtialyes2ShiftXor(9, 25)
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(sokacibaz())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun sokacibaz(): String {
    @Suppress("UNUSED_VARIABLE") val feadthergrogfadmtialyesSinkV22 = FezavuhefeadthergrogfadmtialyesdObfV22HashMix("zgh") xor FezavfeadthergrogfadmtialyesuhedObfV22SumOdds(intArrayOf(4, 11, 25)) xor FezavuhedObfV22feadthergrogfadmtialyesClampMod(80, 39) xor FezavuhedObfV2feadthergrogfadmtialyes2ShiftXor(9, 25)
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        return bytes.joinToString("") { byte -> "%02x".format(byte) }
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}
/* obfuscation-batch:v22 */
private fun FezavuhefeadthergrogfadmtialyesdObfV22HashMix(s: String): Int {
  var h = 72
  for (i in s.indices) h = (h xor (s[i].code * 36)) % 323
  return h
}

private fun FezavfeadthergrogfadmtialyesuhedObfV22SumOdds(nums: IntArray): Int {
  var acc = 72
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 36) % 323
  }
  return acc
}

private fun FezavuhedObfV22feadthergrogfadmtialyesClampMod(n: Int, m: Int): Int {
  val span = (m % 44) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun FezavuhedObfV2feadthergrogfadmtialyes2ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 69) and 7502
}
