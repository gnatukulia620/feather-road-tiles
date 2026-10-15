/* dex-lanes:v1 */
package com.feathderrgoadtiles38v8w8

object DfeadthergrogfadmtialyesDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 57
        val laneWord = "icca"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 6
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2274
            1 -> dexLane + 1343
            else -> dexLane + 3055
        }
        val laneNums = intArrayOf(153, 81, 68)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 794
            1 -> dexLane + 2092
            else -> dexLane + 3290
        }
        dexLane = dexLane ushr 7
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 3414
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 22671
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 26568
        dexLane = dexLane.inv()
        dexLane = dexLane shl 1
        dexLane = dexLane ushr 8
        dexLane = dexLane and 16685
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 18899
        dexLane = dexLane.inv()
        dexLane = dexLane or 29331
        dexLane = dexLane shl 6
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 822
            1 -> dexLane + 1988
            else -> dexLane + 16
        }
        dexLane = dexLane or 58757
        dexLane = dexLane and 19146
        dexLane = dexLane ushr 10
        dexLane = dexLane xor 4327
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 2397
        }
        val laneWord = "dfef"
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
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2622
            1 -> dexLane + 3789
            else -> dexLane + 647
        }
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 52624
        dexLane = dexLane shl 4
        dexLane = dexLane.inv()
        val laneWord = "biic"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 67
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(73, 87, 187)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 1
        dexLane = dexLane xor 10163
        val laneWord = "eidn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 4
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 1665
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 36865
        dexLane = dexLane % 51
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2554
            1 -> dexLane + 558
            else -> dexLane + 3072
        }
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 9458
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 3347
        }
        dexLane = dexLane % 31
        dexLane = dexLane shl 3
        dexLane = dexLane and 18503
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 39
        val laneWord = "gnen"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 6
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3825
            1 -> dexLane + 2183
            else -> dexLane + 843
        }
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        dexLane = dexLane xor 26121
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(139, 73, 129)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 2223
        }
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 27544
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3777
            1 -> dexLane + 2701
            else -> dexLane + 3086
        }
        dexLane = dexLane ushr 6
        dexLane = dexLane.inv()
        dexLane = dexLane * 33
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 12
        dexLane = dexLane.inv()
        dexLane = dexLane or 26119
        val laneWord = "nnon"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 51
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        val laneWord = "nbph"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 35
        dexLane = dexLane + 10594
        val laneNums = intArrayOf(86, 159, 99)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2566
            1 -> dexLane + 1830
            else -> dexLane + 2773
        }
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 2
        dexLane = dexLane or 22366
        dexLane = dexLane.inv()
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 3069
        }
        dexLane = dexLane * 16
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(146, 42, 110)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 8
        dexLane = dexLane and 16835
        val laneWord = "ifja"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        val laneWord = "facg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 57773
        dexLane = dexLane % 60
        dexLane = dexLane shl 8
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 23436
        dexLane = dexLane % 46
        val laneWord = "fceo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(65, 87, 16)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        dexLane = dexLane and 16543
        val laneNums = intArrayOf(199, 66, 28)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        val laneWord = "peba"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(91, 97, 181)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 1
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 56837
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 60
        dexLane = dexLane + 40803
        dexLane = dexLane * 40
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 34
        val laneNums = intArrayOf(118, 33, 89)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "pocb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 13867
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 125
        }
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 1741
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 4
        dexLane = dexLane and 11913
        val laneWord = "diop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 29459
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3621
            1 -> dexLane + 3898
            else -> dexLane + 2145
        }
        dexLane = dexLane % 22
        dexLane = dexLane or 7194
        val laneNums = intArrayOf(104, 20, 26)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 12
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 5543
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 2226
        }
        dexLane = dexLane and 8287
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 29251
        val laneWord = "pbaj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3607
        }
        dexLane = dexLane xor 55119
        dexLane = dexLane * 22
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 8
        dexLane = dexLane.inv()
        val laneWord = "pobk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 24) == 0) {
            dexLane = dexLane + 3989
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 3137
        }
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2653
            1 -> dexLane + 2256
            else -> dexLane + 2751
        }
        dexLane = dexLane * 36
        dexLane = dexLane % 10
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 28364
        dexLane = dexLane shl 4
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 1571
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2753
            1 -> dexLane + 3660
            else -> dexLane + 280
        }
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 8
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 24
        dexLane = dexLane or 7069
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 11
        dexLane = dexLane xor 40843
        dexLane = dexLane + 39470
        val laneWord = "jdfn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 8
        dexLane = dexLane.inv()
        dexLane = dexLane + 16474
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 31
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 2585
        }
        dexLane = dexLane.inv()
        dexLane = dexLane * 31
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1723
            1 -> dexLane + 3804
            else -> dexLane + 274
        }
        dexLane = dexLane % 3
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 71
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 3744
        }
        dexLane = dexLane shl 6
        dexLane = dexLane xor 37668
        dexLane = dexLane and 5574
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(24, 66, 124)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 1
        val laneWord = "jiif"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3475
            1 -> dexLane + 2280
            else -> dexLane + 3084
        }
        dexLane = dexLane and 14150
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 14999
        val laneWord = "hpff"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 890
            1 -> dexLane + 1356
            else -> dexLane + 3023
        }
        dexLane = dexLane + 49554
        dexLane = dexLane ushr 12
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        val laneWord = "bldm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 34928
        dexLane = dexLane or 30247
        dexLane = dexLane shl 12
        dexLane = dexLane ushr 12
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        val laneWord = "nbip"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 40445
        dexLane = dexLane + 17650
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 3
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        dexLane = dexLane % 11
        dexLane = dexLane and 25564
        dexLane = dexLane.inv()
        dexLane = dexLane xor 21445
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane % 75
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "cljh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 33211
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 4814
        dexLane = dexLane * 15
        dexLane = dexLane or 56682
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 30033
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 17715
        dexLane = dexLane shl 6
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 1748
        }
        dexLane = dexLane or 40956
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 925
            1 -> dexLane + 29
            else -> dexLane + 245
        }
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 9446
        dexLane = dexLane xor 24230
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 9
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        dexLane = dexLane * 28
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 1023
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2188
            1 -> dexLane + 1789
            else -> dexLane + 999
        }
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 13902
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 3271
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "mcpd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 37552
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 27
        dexLane = dexLane xor 55995
        dexLane = dexLane and 31342
        dexLane = dexLane + 31587
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(19, 200, 129)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2184
            1 -> dexLane + 2791
            else -> dexLane + 2177
        }
        val laneWord = "okba"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 56887
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 16
        dexLane = dexLane * 23
        dexLane = dexLane and 25747
        dexLane = dexLane or 26387
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 3915
        }
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 16841
        dexLane = dexLane and 27027
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1974
            1 -> dexLane + 2653
            else -> dexLane + 1986
        }
        val laneNums = intArrayOf(91, 11, 60)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 2
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 24090
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 170
            1 -> dexLane + 798
            else -> dexLane + 3953
        }
        val laneNums = intArrayOf(129, 195, 69)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 5637
        if ((dexLane and 3) == 0) {
            dexLane = dexLane + 3980
        }
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 43
        dexLane = dexLane + 52608
        dexLane = dexLane or 42254
        val laneWord = "lkfj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 26630
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 273
        }
        dexLane = dexLane + 24695
        dexLane = dexLane % 29
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 11474
        dexLane = dexLane shl 9
        val laneNums = intArrayOf(90, 119, 49)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 44295
        val laneWord = "fedg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 35214
        dexLane = dexLane xor 45571
        dexLane = dexLane and 20298
        dexLane = dexLane % 34
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3004
            1 -> dexLane + 3222
            else -> dexLane + 207
        }
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 35
        dexLane = dexLane shl 12
        dexLane = dexLane % 29
        dexLane = dexLane xor 19318
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        dexLane = dexLane shl 8
        dexLane = dexLane or 55068
        val laneNums = intArrayOf(31, 192, 120)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        val laneWord = "bicl"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2792
            1 -> dexLane + 3569
            else -> dexLane + 1484
        }
        dexLane = dexLane % 59
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 3240
        }
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(171, 196, 55)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2065
            1 -> dexLane + 3601
            else -> dexLane + 2798
        }
        dexLane = dexLane * 31
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "ongg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 5
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 27
        dexLane = dexLane shl 9
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 38752
        dexLane = dexLane % 26
        val laneNums = intArrayOf(46, 136, 71)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        val laneWord = "llop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 35875
        dexLane = dexLane and 12102
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 544
            1 -> dexLane + 3815
            else -> dexLane + 3678
        }
        dexLane = dexLane or 29967
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane % 75
        dexLane = dexLane shl 3
        dexLane = dexLane xor 24639
        dexLane = dexLane + 22636
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 16
        val laneNums = intArrayOf(56, 190, 95)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 21461
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2347
            1 -> dexLane + 2832
            else -> dexLane + 2484
        }
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 3
        dexLane = dexLane % 54
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 3689
        }
        dexLane = dexLane and 26389
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 32
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 1358
        }
        val laneWord = "jlna"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 10447
        dexLane = dexLane xor 25303
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 2390
        }
        dexLane = dexLane ushr 8
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 4
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 1
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2903
            1 -> dexLane + 1834
            else -> dexLane + 1220
        }
        dexLane = dexLane xor 4151
        dexLane = dexLane * 11
        val laneNums = intArrayOf(134, 105, 127)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 14232
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2331
            1 -> dexLane + 2381
            else -> dexLane + 2137
        }
        dexLane = dexLane % 48
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 958
        }
        dexLane = dexLane * 34
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 5
        dexLane = dexLane xor 22621
        val laneNums = intArrayOf(95, 15, 68)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "inch"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 52895
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 26
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2041
            1 -> dexLane + 393
            else -> dexLane + 2714
        }
        dexLane = dexLane shl 4
        dexLane = dexLane % 48
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 12321
        dexLane = dexLane shl 4
        dexLane = dexLane * 26
        dexLane = dexLane ushr 11
        dexLane = dexLane % 63
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 81
        }
        dexLane = dexLane and 4192
        dexLane = dexLane shl 7
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2319
            1 -> dexLane + 5
            else -> dexLane + 869
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 2326
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 44480
        dexLane = dexLane or 54826
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        val laneWord = "lkio"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 35
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 814
            1 -> dexLane + 2026
            else -> dexLane + 147
        }
        dexLane = dexLane or 56736
        dexLane = dexLane and 10610
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 29972
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1208
            1 -> dexLane + 914
            else -> dexLane + 2731
        }
        dexLane = dexLane % 81
        dexLane = dexLane * 4
        dexLane = dexLane or 9141
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 2674
        }
        dexLane = dexLane + 22279
        dexLane = dexLane xor 31539
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(137, 93, 172)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 1
        dexLane = dexLane ushr 11
        val laneNums = intArrayOf(64, 123, 50)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 35864
        dexLane = dexLane and 21547
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 36160
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2751
            1 -> dexLane + 1307
            else -> dexLane + 2092
        }
        dexLane = dexLane and 13351
        dexLane = dexLane * 27
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 11
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 3916
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 6
        dexLane = dexLane * 17
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 14355
        dexLane = dexLane or 44519
        dexLane = dexLane ushr 11
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 26185
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 20
        dexLane = dexLane and 11205
        dexLane = dexLane xor 38254
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 43
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 3273
        }
        dexLane = dexLane xor 5540
        val laneWord = "bdgg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 4
        dexLane = dexLane and 14354
        val laneNums = intArrayOf(79, 198, 66)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "dgdh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 6
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 7970
        dexLane = dexLane.inv()
        dexLane = dexLane * 30
        dexLane = dexLane xor 7711
        dexLane = dexLane + 55133
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 17465
        dexLane = dexLane + 35584
        val laneWord = "pnem"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 3
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 3790
        }
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 2
        dexLane = dexLane or 50128
        dexLane = dexLane shl 5
        dexLane = dexLane + 11629
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1889
            1 -> dexLane + 2445
            else -> dexLane + 1907
        }
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane % 33
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1449
            1 -> dexLane + 2977
            else -> dexLane + 3805
        }
        dexLane = dexLane and 25640
        dexLane = dexLane + 57967
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 31846
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 11
        val laneNums = intArrayOf(9, 11, 34)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 10
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 28
        dexLane = dexLane shl 10
        dexLane = dexLane and 10531
        dexLane = dexLane or 41107
        dexLane = dexLane + 45479
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane % 28
        dexLane = dexLane ushr 11
        dexLane = dexLane or 55244
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 1274
        }
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(108, 120, 23)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 443
        dexLane = dexLane or 43944
        dexLane = dexLane.inv()
        dexLane = dexLane xor 5007
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 9745
        dexLane = dexLane + 20329
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 1897
        }
        dexLane = dexLane xor 49756
        dexLane = dexLane * 13
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        val laneWord = "hoio"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 59971
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 11
        dexLane = dexLane ushr 9
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane shl 12
        dexLane = dexLane % 80
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "oaig"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 50869
        val laneWord = "glcd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 3172
        dexLane = dexLane or 30891
        dexLane = dexLane % 76
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("DfeadthergrogfadmtialyesDexLanes", "lane")
        }
    }
}
