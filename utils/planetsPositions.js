const planetsPositions = [
  //planet of index 0 is Super Earth
    // {
    //   "index": 0,
    //   "position": {
    //     "x": 0,
    //     "y": 0
    //   },
    //   "sector": 0
    // },
    {
      "index": 1,
      "position": {
        "x": 0.05373042,
        "y": 0.10565466
      },
      "sector": 1
    },
    {
      "index": 2,
      "position": {
        "x": 0.04664221,
        "y": 0.16758725
      },
      "sector": 1
    },
    {
      "index": 3,
      "position": {
        "x": 0.12536779,
        "y": 0.11821219
      },
      "sector": 1
    },
    {
      "index": 4,
      "position": {
        "x": 0.10280278,
        "y": 0.05765711
      },
      "sector": 1
    },
    {
      "index": 5,
      "position": {
        "x": 0.15988354,
        "y": 0.043583166
      },
      "sector": 1
    },
    {
      "index": 6,
      "position": {
        "x": 0.13535836,
        "y": -0.03378948
      },
      "sector": 2
    },
    {
      "index": 7,
      "position": {
        "x": 0.36159223,
        "y": -0.52270126
      },
      "sector": 2
    },
    {
      "index": 8,
      "position": {
        "x": 0.09485684,
        "y": -0.08101245
      },
      "sector": 2
    },
    {
      "index": 9,
      "position": {
        "x": 0.15801243,
        "y": -0.09685686
      },
      "sector": 2
    },
    {
      "index": 10,
      "position": {
        "x": 0.06770126,
        "y": -0.1448935
      },
      "sector": 2
    },
    {
      "index": 11,
      "position": {
        "x": 0.001789452,
        "y": -0.18935835
      },
      "sector": 3
    },
    {
      "index": 12,
      "position": {
        "x": -0.001789474,
        "y": -0.12535837
      },
      "sector": 3
    },
    {
      "index": 13,
      "position": {
        "x": -0.06158319,
        "y": -0.16488354
      },
      "sector": 4
    },
    {
      "index": 14,
      "position": {
        "x": -0.099012464,
        "y": -0.11185683
      },
      "sector": 5
    },
    {
      "index": 15,
      "position": {
        "x": -0.17010404,
        "y": -0.08865711
      },
      "sector": 5
    },
    {
      "index": 16,
      "position": {
        "x": 0.27240774,
        "y": 0.20429876
      },
      "sector": 5
    },
    {
      "index": 17,
      "position": {
        "x": -0.14765465,
        "y": -0.030730395
      },
      "sector": 5
    },
    {
      "index": 18,
      "position": {
        "x": -0.15065464,
        "y": 0.015730456
      },
      "sector": 6
    },
    {
      "index": 19,
      "position": {
        "x": -0.1728935,
        "y": 0.06970126
      },
      "sector": 7
    },
    {
      "index": 20,
      "position": {
        "x": -0.12621213,
        "y": 0.11136782
      },
      "sector": 7
    },
    {
      "index": 21,
      "position": {
        "x": -0.07801243,
        "y": 0.10585686
      },
      "sector": 7
    },
    {
      "index": 22,
      "position": {
        "x": -0.039789412,
        "y": 0.14535835
      },
      "sector": 7
    },
    {
      "index": 23,
      "position": {
        "x": 0.030315775,
        "y": 0.2269306
      },
      "sector": 8
    },
    {
      "index": 24,
      "position": {
        "x": 0.09383544,
        "y": 0.25608748
      },
      "sector": 8
    },
    {
      "index": 25,
      "position": {
        "x": 0.17009519,
        "y": 0.1877717
      },
      "sector": 9
    },
    {
      "index": 26,
      "position": {
        "x": 0.2117717,
        "y": 0.12409518
      },
      "sector": 9
    },
    {
      "index": 27,
      "position": {
        "x": 0.2540875,
        "y": 0.05583542
      },
      "sector": 9
    },
    {
      "index": 28,
      "position": {
        "x": 0.2939306,
        "y": -0.033684243
      },
      "sector": 9
    },
    {
      "index": 29,
      "position": {
        "x": 0.22952318,
        "y": -0.029197697
      },
      "sector": 10
    },
    {
      "index": 30,
      "position": {
        "x": 0.23037383,
        "y": -0.0976583
      },
      "sector": 2
    },
    {
      "index": 31,
      "position": {
        "x": 0.2007717,
        "y": -0.1490952
      },
      "sector": 2
    },
    {
      "index": 32,
      "position": {
        "x": 0.15409517,
        "y": -0.210073
      },
      "sector": 3
    },
    {
      "index": 33,
      "position": {
        "x": 0.0977173,
        "y": -0.22407754
      },
      "sector": 3
    },
    {
      "index": 34,
      "position": {
        "x": 0.5111386,
        "y": 0.3511805
      },
      "sector": 3
    },
    {
      "index": 35,
      "position": {
        "x": -0.023138678,
        "y": -0.24981944
      },
      "sector": 3
    },
    {
      "index": 36,
      "position": {
        "x": -0.09065833,
        "y": -0.2413738
      },
      "sector": 4
    },
    {
      "index": 37,
      "position": {
        "x": -0.1440952,
        "y": -0.2027717
      },
      "sector": 4
    },
    {
      "index": 38,
      "position": {
        "x": -0.19187985,
        "y": -0.14480585
      },
      "sector": 5
    },
    {
      "index": 39,
      "position": {
        "x": -0.24438877,
        "y": -0.10283538
      },
      "sector": 5
    },
    {
      "index": 40,
      "position": {
        "x": -0.2415232,
        "y": -0.033197638
      },
      "sector": 6
    },
    {
      "index": 41,
      "position": {
        "x": -0.25681943,
        "y": 0.030138722
      },
      "sector": 6
    },
    {
      "index": 42,
      "position": {
        "x": -0.2473738,
        "y": 0.09965837
      },
      "sector": 7
    },
    {
      "index": 43,
      "position": {
        "x": -0.1857717,
        "y": 0.13809519
      },
      "sector": 18
    },
    {
      "index": 44,
      "position": {
        "x": -0.16809516,
        "y": 0.19577172
      },
      "sector": 18
    },
    {
      "index": 45,
      "position": {
        "x": -0.13065825,
        "y": 0.30637383
      },
      "sector": 19
    },
    {
      "index": 46,
      "position": {
        "x": -0.061315693,
        "y": 0.2489306
      },
      "sector": 19
    },
    {
      "index": 47,
      "position": {
        "x": 0.037842084,
        "y": 0.32250285
      },
      "sector": 8
    },
    {
      "index": 48,
      "position": {
        "x": 0.1129696,
        "y": 0.3345827
      },
      "sector": 8
    },
    {
      "index": 49,
      "position": {
        "x": 0.2219546,
        "y": 0.2772582
      },
      "sector": 20
    },
    {
      "index": 50,
      "position": {
        "x": 0.87390286,
        "y": 0.35359928
      },
      "sector": 20
    },
    {
      "index": 51,
      "position": {
        "x": 0.287884,
        "y": 0.1099696
      },
      "sector": 9
    },
    {
      "index": 52,
      "position": {
        "x": 0.338688,
        "y": 0.05460588
      },
      "sector": 9
    },
    {
      "index": 53,
      "position": {
        "x": 0.32650283,
        "y": -0.12384212
      },
      "sector": 10
    },
    {
      "index": 54,
      "position": {
        "x": 0.26874065,
        "y": -0.21253327
      },
      "sector": 11
    },
    {
      "index": 55,
      "position": {
        "x": 0.19353323,
        "y": -0.28004193
      },
      "sector": 12
    },
    {
      "index": 56,
      "position": {
        "x": 0.12696959,
        "y": -0.30758274
      },
      "sector": 12
    },
    {
      "index": 57,
      "position": {
        "x": 0.04284205,
        "y": -0.33550286
      },
      "sector": 13
    },
    {
      "index": 58,
      "position": {
        "x": -0.038842108,
        "y": -0.32750285
      },
      "sector": 13
    },
    {
      "index": 59,
      "position": {
        "x": -0.11379249,
        "y": -0.3215678
      },
      "sector": 14
    },
    {
      "index": 60,
      "position": {
        "x": -0.19953328,
        "y": -0.2830419
      },
      "sector": 14
    },
    {
      "index": 61,
      "position": {
        "x": -0.26690286,
        "y": -0.23559926
      },
      "sector": 15
    },
    {
      "index": 62,
      "position": {
        "x": -0.28988406,
        "y": -0.16096954
      },
      "sector": 15
    },
    {
      "index": 63,
      "position": {
        "x": -0.33550286,
        "y": -0.05084203
      },
      "sector": 6
    },
    {
      "index": 64,
      "position": {
        "x": 0.5134972,
        "y": 0.20684212
      },
      "sector": 17
    },
    {
      "index": 65,
      "position": {
        "x": -0.31756774,
        "y": 0.13179255
      },
      "sector": 17
    },
    {
      "index": 66,
      "position": {
        "x": -0.24490279,
        "y": 0.21259932
      },
      "sector": 18
    },
    {
      "index": 67,
      "position": {
        "x": -0.20995454,
        "y": 0.28325823
      },
      "sector": 18
    },
    {
      "index": 68,
      "position": {
        "x": -0.05373336,
        "y": 0.3648641
      },
      "sector": 18
    },
    {
      "index": 69,
      "position": {
        "x": -0.060664836,
        "y": 0.44539174
      },
      "sector": 19
    },
    {
      "index": 70,
      "position": {
        "x": -0.1716316,
        "y": 0.8050751
      },
      "sector": 8
    },
    {
      "index": 71,
      "position": {
        "x": 0.0441322,
        "y": 0.42626023
      },
      "sector": 8
    },
    {
      "index": 72,
      "position": {
        "x": -0.52319145,
        "y": 0.14335436
      },
      "sector": 8
    },
    {
      "index": 73,
      "position": {
        "x": 0.1661038,
        "y": 0.40307793
      },
      "sector": 8
    },
    {
      "index": 74,
      "position": {
        "x": 0.2559713,
        "y": 0.5260108
      },
      "sector": 20
    },
    {
      "index": 75,
      "position": {
        "x": 0.372748,
        "y": 0.5082812
      },
      "sector": 20
    },
    {
      "index": 76,
      "position": {
        "x": 0.26528117,
        "y": 0.347748
      },
      "sector": 20
    },
    {
      "index": 77,
      "position": {
        "x": 0.32492584,
        "y": 0.25839266
      },
      "sector": 20
    },
    {
      "index": 78,
      "position": {
        "x": 0.6113544,
        "y": 0.22880854
      },
      "sector": 21
    },
    {
      "index": 79,
      "position": {
        "x": 0.39437926,
        "y": 0.27310377
      },
      "sector": 21
    },
    {
      "index": 80,
      "position": {
        "x": 0.43926024,
        "y": 0.0731322
      },
      "sector": 22
    },
    {
      "index": 81,
      "position": {
        "x": 0.3660751,
        "y": -0.04763163
      },
      "sector": 22
    },
    {
      "index": 82,
      "position": {
        "x": 0.5340751,
        "y": -0.090368435
      },
      "sector": 10
    },
    {
      "index": 83,
      "position": {
        "x": 0.44555652,
        "y": -0.06207318
      },
      "sector": 10
    },
    {
      "index": 84,
      "position": {
        "x": 0.41835436,
        "y": -0.17080852
      },
      "sector": 24
    },
    {
      "index": 85,
      "position": {
        "x": 0.33707795,
        "y": 0.1548962
      },
      "sector": 24
    },
    {
      "index": 86,
      "position": {
        "x": 0.39501083,
        "y": -0.26197135
      },
      "sector": 11
    },
    {
      "index": 87,
      "position": {
        "x": 0.32492584,
        "y": -0.26339266
      },
      "sector": 11
    },
    {
      "index": 88,
      "position": {
        "x": 0.24639264,
        "y": -0.3159259
      },
      "sector": 12
    },
    {
      "index": 89,
      "position": {
        "x": 0.29074797,
        "y": -0.35328123
      },
      "sector": 12
    },
    {
      "index": 90,
      "position": {
        "x": 0.18610376,
        "y": -0.381078
      },
      "sector": 13
    },
    {
      "index": 91,
      "position": {
        "x": 0.15380847,
        "y": -0.4373544
      },
      "sector": 13
    },
    {
      "index": 92,
      "position": {
        "x": 0.06113215,
        "y": -0.40526026
      },
      "sector": 13
    },
    {
      "index": 93,
      "position": {
        "x": 0.1470731,
        "y": -0.5095566
      },
      "sector": 13
    },
    {
      "index": 94,
      "position": {
        "x": 0.00063157,
        "y": -0.4440751
      },
      "sector": 13
    },
    {
      "index": 95,
      "position": {
        "x": -0.07607324,
        "y": -0.44355652
      },
      "sector": 13
    },
    {
      "index": 96,
      "position": {
        "x": -0.13786763,
        "y": -0.40105802
      },
      "sector": 14
    },
    {
      "index": 97,
      "position": {
        "x": -0.21110377,
        "y": -0.42437923
      },
      "sector": 14
    },
    {
      "index": 98,
      "position": {
        "x": -0.25539273,
        "y": -0.3439258
      },
      "sector": 28
    },
    {
      "index": 99,
      "position": {
        "x": -0.31297135,
        "y": -0.39101082
      },
      "sector": 28
    },
    {
      "index": 100,
      "position": {
        "x": 0.9189892,
        "y": -0.1249713
      },
      "sector": 29
    },
    {
      "index": 101,
      "position": {
        "x": -0.3422812,
        "y": -0.302748
      },
      "sector": 29
    },
    {
      "index": 102,
      "position": {
        "x": -0.4123793,
        "y": -0.17510368
      },
      "sector": 15
    },
    {
      "index": 103,
      "position": {
        "x": -0.353078,
        "y": -0.13310368
      },
      "sector": 15
    },
    {
      "index": 104,
      "position": {
        "x": -0.42307508,
        "y": -0.029368328
      },
      "sector": 16
    },
    {
      "index": 105,
      "position": {
        "x": -0.46455657,
        "y": -0.09407307
      },
      "sector": 16
    },
    {
      "index": 106,
      "position": {
        "x": -0.4232602,
        "y": 0.05013234
      },
      "sector": 17
    },
    {
      "index": 107,
      "position": {
        "x": -0.6355565,
        "y": 0.0490733
      },
      "sector": 17
    },
    {
      "index": 108,
      "position": {
        "x": -0.349058,
        "y": 0.0568677
      },
      "sector": 31
    },
    {
      "index": 109,
      "position": {
        "x": -0.531078,
        "y": 0.05410378
      },
      "sector": 31
    },
    {
      "index": 110,
      "position": {
        "x": -0.48401085,
        "y": 0.21397132
      },
      "sector": 32
    },
    {
      "index": 111,
      "position": {
        "x": -0.40970957,
        "y": 0.15897132
      },
      "sector": 32
    },
    {
      "index": 112,
      "position": {
        "x": -0.26997122,
        "y": 0.3760109
      },
      "sector": 32
    },
    {
      "index": 113,
      "position": {
        "x": -0.34874794,
        "y": 0.28628126
      },
      "sector": 32
    },
    {
      "index": 114,
      "position": {
        "x": -0.44310373,
        "y": 0.599078
      },
      "sector": 19
    },
    {
      "index": 115,
      "position": {
        "x": -0.27880847,
        "y": 0.58735436
      },
      "sector": 19
    },
    {
      "index": 116,
      "position": {
        "x": -0.16213205,
        "y": 0.4142603
      },
      "sector": 19
    },
    {
      "index": 117,
      "position": {
        "x": -0.122073,
        "y": 0.5435566
      },
      "sector": 19
    },
    {
      "index": 118,
      "position": {
        "x": 0.12954043,
        "y": 0.52342516
      },
      "sector": 36
    },
    {
      "index": 119,
      "position": {
        "x": 0.033894707,
        "y": 0.5456473
      },
      "sector": 36
    },
    {
      "index": 120,
      "position": {
        "x": 0.1969427,
        "y": 0.5865483
      },
      "sector": 36
    },
    {
      "index": 121,
      "position": {
        "x": 0.28023794,
        "y": 0.6415732
      },
      "sector": 36
    },
    {
      "index": 122,
      "position": {
        "x": 0.46854144,
        "y": 0.5513042
      },
      "sector": 37
    },
    {
      "index": 123,
      "position": {
        "x": 0.3994094,
        "y": 0.6009798
      },
      "sector": 37
    },
    {
      "index": 124,
      "position": {
        "x": 0.3259798,
        "y": 0.4174094
      },
      "sector": 20
    },
    {
      "index": 125,
      "position": {
        "x": 0.46994886,
        "y": 0.27418607
      },
      "sector": 20
    },
    {
      "index": 126,
      "position": {
        "x": 0.5348745,
        "y": 0.11823793
      },
      "sector": 21
    },
    {
      "index": 127,
      "position": {
        "x": 0.4448446,
        "y": 0.1618837
      },
      "sector": 21
    },
    {
      "index": 128,
      "position": {
        "x": 0.6416474,
        "y": -0.034105327
      },
      "sector": 22
    },
    {
      "index": 129,
      "position": {
        "x": 0.6244252,
        "y": 0.10954041
      },
      "sector": 22
    },
    {
      "index": 130,
      "position": {
        "x": 0.6394251,
        "y": -0.11354046
      },
      "sector": 23
    },
    {
      "index": 131,
      "position": {
        "x": 0.5706473,
        "y": -0.035894755
      },
      "sector": 23
    },
    {
      "index": 132,
      "position": {
        "x": 0.4985732,
        "y": -0.21423799
      },
      "sector": 24
    },
    {
      "index": 133,
      "position": {
        "x": 0.5715483,
        "y": -0.19894274
      },
      "sector": 24
    },
    {
      "index": 134,
      "position": {
        "x": 0.39494884,
        "y": -0.34418607
      },
      "sector": 11
    },
    {
      "index": 135,
      "position": {
        "x": 0.3655414,
        "y": -0.40630427
      },
      "sector": 11
    },
    {
      "index": 136,
      "position": {
        "x": 0.30818605,
        "y": -0.4349489
      },
      "sector": 11
    },
    {
      "index": 137,
      "position": {
        "x": 0.21723792,
        "y": -0.49157324
      },
      "sector": 26
    },
    {
      "index": 138,
      "position": {
        "x": 0.11354035,
        "y": -0.5914251
      },
      "sector": 26
    },
    {
      "index": 139,
      "position": {
        "x": 0.06359941,
        "y": -0.5271288
      },
      "sector": 26
    },
    {
      "index": 140,
      "position": {
        "x": -0.03489475,
        "y": -0.54864734
      },
      "sector": 27
    },
    {
      "index": 141,
      "position": {
        "x": -0.12159955,
        "y": -0.5161287
      },
      "sector": 27
    },
    {
      "index": 142,
      "position": {
        "x": -0.20094277,
        "y": -0.4955483
      },
      "sector": 27
    },
    {
      "index": 143,
      "position": {
        "x": -0.23688374,
        "y": -0.5768446
      },
      "sector": 27
    },
    {
      "index": 144,
      "position": {
        "x": -0.30640945,
        "y": -0.4626785
      },
      "sector": 28
    },
    {
      "index": 145,
      "position": {
        "x": -0.3871862,
        "y": -0.43394879
      },
      "sector": 28
    },
    {
      "index": 146,
      "position": {
        "x": -0.47797978,
        "y": -0.3174094
      },
      "sector": 29
    },
    {
      "index": 147,
      "position": {
        "x": -0.4116785,
        "y": -0.3474094
      },
      "sector": 29
    },
    {
      "index": 148,
      "position": {
        "x": -0.5268447,
        "y": -0.18688355
      },
      "sector": 29
    },
    {
      "index": 149,
      "position": {
        "x": -0.47057328,
        "y": -0.23023784
      },
      "sector": 29
    },
    {
      "index": 150,
      "position": {
        "x": -0.5226474,
        "y": -0.035894625
      },
      "sector": 16
    },
    {
      "index": 151,
      "position": {
        "x": -0.56242514,
        "y": -0.11354032
      },
      "sector": 16
    },
    {
      "index": 152,
      "position": {
        "x": -0.9146473,
        "y": -0.17310524
      },
      "sector": 31
    },
    {
      "index": 153,
      "position": {
        "x": -0.745425,
        "y": -0.1314594
      },
      "sector": 31
    },
    {
      "index": 154,
      "position": {
        "x": -0.6788745,
        "y": 0.117238
      },
      "sector": 31
    },
    {
      "index": 155,
      "position": {
        "x": -0.73154825,
        "y": 0.05294286
      },
      "sector": 31
    },
    {
      "index": 156,
      "position": {
        "x": -0.6009798,
        "y": 0.2024094
      },
      "sector": 33
    },
    {
      "index": 157,
      "position": {
        "x": -0.575186,
        "y": 0.26594892
      },
      "sector": 32
    },
    {
      "index": 158,
      "position": {
        "x": -0.7044093,
        "y": 0.25667855
      },
      "sector": 32
    },
    {
      "index": 159,
      "position": {
        "x": -0.3992379,
        "y": 0.5128745
      },
      "sector": 34
    },
    {
      "index": 160,
      "position": {
        "x": -0.3412379,
        "y": 0.5515733
      },
      "sector": 34
    },
    {
      "index": 161,
      "position": {
        "x": -0.04959929,
        "y": 0.5291288
      },
      "sector": 35
    },
    {
      "index": 162,
      "position": {
        "x": -0.07354023,
        "y": 0.6374251
      },
      "sector": 35
    },
    {
      "index": 163,
      "position": {
        "x": 0.061421014,
        "y": 0.6512196
      },
      "sector": 35
    },
    {
      "index": 164,
      "position": {
        "x": 0.09195879,
        "y": 0.7373349
      },
      "sector": 36
    },
    {
      "index": 165,
      "position": {
        "x": 0.2163721,
        "y": 0.7093697
      },
      "sector": 36
    },
    {
      "index": 166,
      "position": {
        "x": 0.47584745,
        "y": 0.6789487
      },
      "sector": 37
    },
    {
      "index": 167,
      "position": {
        "x": 0.5693348,
        "y": 0.6043272
      },
      "sector": 37
    },
    {
      "index": 168,
      "position": {
        "x": 0.4243272,
        "y": 0.34833485
      },
      "sector": 38
    },
    {
      "index": 169,
      "position": {
        "x": 0.5803697,
        "y": 0.29137206
      },
      "sector": 21
    },
    {
      "index": 170,
      "position": {
        "x": 0.6880386,
        "y": 0.30101782
      },
      "sector": 21
    },
    {
      "index": 171,
      "position": {
        "x": 0.7302936,
        "y": 0.14800768
      },
      "sector": 39
    },
    {
      "index": 172,
      "position": {
        "x": 0.7312195,
        "y": -0.12242107
      },
      "sector": 23
    },
    {
      "index": 173,
      "position": {
        "x": 0.8252936,
        "y": -0.13200772
      },
      "sector": 23
    },
    {
      "index": 174,
      "position": {
        "x": 0.5600685,
        "y": -0.27437216
      },
      "sector": 24
    },
    {
      "index": 175,
      "position": {
        "x": 0.6873349,
        "y": -0.2439588
      },
      "sector": 24
    },
    {
      "index": 176,
      "position": {
        "x": 0.51897186,
        "y": -0.3859795
      },
      "sector": 25
    },
    {
      "index": 177,
      "position": {
        "x": 0.5813272,
        "y": -0.45833483
      },
      "sector": 25
    },
    {
      "index": 178,
      "position": {
        "x": 0.45897943,
        "y": -0.45897192
      },
      "sector": 25
    },
    {
      "index": 179,
      "position": {
        "x": 0.4808474,
        "y": -0.5826475
      },
      "sector": 25
    },
    {
      "index": 180,
      "position": {
        "x": 0.27001774,
        "y": -0.5880387
      },
      "sector": 25
    },
    {
      "index": 181,
      "position": {
        "x": 0.3589587,
        "y": -0.73933494
      },
      "sector": 25
    },
    {
      "index": 182,
      "position": {
        "x": 0.04742095,
        "y": -0.64221954
      },
      "sector": 26
    },
    {
      "index": 183,
      "position": {
        "x": 0.2510076,
        "y": -0.69129366
      },
      "sector": 26
    },
    {
      "index": 184,
      "position": {
        "x": -0.04842106,
        "y": -0.70721954
      },
      "sector": 43
    },
    {
      "index": 185,
      "position": {
        "x": -0.1330078,
        "y": -0.6602936
      },
      "sector": 43
    },
    {
      "index": 186,
      "position": {
        "x": -0.2649589,
        "y": -0.6723349
      },
      "sector": 27
    },
    {
      "index": 187,
      "position": {
        "x": -0.37284753,
        "y": -0.5306474
      },
      "sector": 28
    },
    {
      "index": 188,
      "position": {
        "x": -0.5559487,
        "y": -0.31584743
      },
      "sector": 30
    },
    {
      "index": 189,
      "position": {
        "x": -0.4953272,
        "y": -0.4213348
      },
      "sector": 30
    },
    {
      "index": 190,
      "position": {
        "x": -0.6140685,
        "y": -0.20337197
      },
      "sector": 30
    },
    {
      "index": 191,
      "position": {
        "x": 0.03396134,
        "y": 0.9259823
      },
      "sector": 30
    },
    {
      "index": 192,
      "position": {
        "x": -0.62221956,
        "y": -0.042420916
      },
      "sector": 16
    },
    {
      "index": 193,
      "position": {
        "x": -0.6862936,
        "y": -0.25600755
      },
      "sector": 16
    },
    {
      "index": 194,
      "position": {
        "x": -0.22899726,
        "y": 0.49906695
      },
      "sector": 46
    },
    {
      "index": 195,
      "position": {
        "x": -0.9272936,
        "y": -0.04299212
      },
      "sector": 46
    },
    {
      "index": 196,
      "position": {
        "x": -0.8473348,
        "y": -0.096041
      },
      "sector": 33
    },
    {
      "index": 197,
      "position": {
        "x": -0.74603856,
        "y": -0.03198197
      },
      "sector": 33
    },
    {
      "index": 198,
      "position": {
        "x": -0.43697178,
        "y": 0.3259796
      },
      "sector": 33
    },
    {
      "index": 199,
      "position": {
        "x": -0.5379487,
        "y": 0.3338475
      },
      "sector": 33
    },
    {
      "index": 200,
      "position": {
        "x": -0.4909794,
        "y": 0.4139719
      },
      "sector": 34
    },
    {
      "index": 201,
      "position": {
        "x": -0.5683347,
        "y": 0.4903273
      },
      "sector": 34
    },
    {
      "index": 202,
      "position": {
        "x": -0.53437203,
        "y": 0.6510685
      },
      "sector": 34
    },
    {
      "index": 203,
      "position": {
        "x": -0.31501773,
        "y": 0.4560387
      },
      "sector": 34
    },
    {
      "index": 204,
      "position": {
        "x": -0.35206652,
        "y": 0.64499736
      },
      "sector": 35
    },
    {
      "index": 205,
      "position": {
        "x": -0.32600746,
        "y": 0.7472937
      },
      "sector": 35
    },
    {
      "index": 206,
      "position": {
        "x": 0.084947325,
        "y": 0.8337918
      },
      "sector": 36
    },
    {
      "index": 207,
      "position": {
        "x": -0.06005267,
        "y": 0.84179187
      },
      "sector": 36
    },
    {
      "index": 208,
      "position": {
        "x": 0.3105063,
        "y": 0.77156365
      },
      "sector": 36
    },
    {
      "index": 209,
      "position": {
        "x": 0.7657729,
        "y": 0.5369948
      },
      "sector": 37
    },
    {
      "index": 210,
      "position": {
        "x": 0.77812827,
        "y": 0.3443502
      },
      "sector": 37
    },
    {
      "index": 211,
      "position": {
        "x": 0.4889177,
        "y": 0.43328553
      },
      "sector": 38
    },
    {
      "index": 212,
      "position": {
        "x": 0.633865,
        "y": 0.3955063
      },
      "sector": 38
    },
    {
      "index": 213,
      "position": {
        "x": 0.9115288,
        "y": 0.18509296
      },
      "sector": 38
    },
    {
      "index": 214,
      "position": {
        "x": 0.7147919,
        "y": 0.06394728
      },
      "sector": 39
    },
    {
      "index": 215,
      "position": {
        "x": 0.8417918,
        "y": 0.10094728
      },
      "sector": 39
    },
    {
      "index": 216,
      "position": {
        "x": 0.93316215,
        "y": 0.004525
      },
      "sector": 39
    },
    {
      "index": 217,
      "position": {
        "x": 0.7587918,
        "y": -0.019947395
      },
      "sector": 39
    },
    {
      "index": 218,
      "position": {
        "x": 0.8658252,
        "y": -0.30003393
      },
      "sector": 40
    },
    {
      "index": 219,
      "position": {
        "x": 0.7575288,
        "y": -0.351093
      },
      "sector": 40
    },
    {
      "index": 220,
      "position": {
        "x": 0.7659177,
        "y": -0.48228556
      },
      "sector": 41
    },
    {
      "index": 221,
      "position": {
        "x": 0.66399485,
        "y": -0.5727729
      },
      "sector": 41
    },
    {
      "index": 222,
      "position": {
        "x": 0.58777285,
        "y": -0.676995
      },
      "sector": 41
    },
    {
      "index": 223,
      "position": {
        "x": 0.49028546,
        "y": -0.71661645
      },
      "sector": 41
    },
    {
      "index": 224,
      "position": {
        "x": 0.29350623,
        "y": -0.8715637
      },
      "sector": 42
    },
    {
      "index": 225,
      "position": {
        "x": 0.14809287,
        "y": -0.91152894
      },
      "sector": 42
    },
    {
      "index": 226,
      "position": {
        "x": 0.09694725,
        "y": -0.7277918
      },
      "sector": 42
    },
    {
      "index": 227,
      "position": {
        "x": 0.104947254,
        "y": -0.82979184
      },
      "sector": 42
    },
    {
      "index": 228,
      "position": {
        "x": -0.037947383,
        "y": -0.8437918
      },
      "sector": 43
    },
    {
      "index": 229,
      "position": {
        "x": -0.16047508,
        "y": -0.85416216
      },
      "sector": 43
    },
    {
      "index": 230,
      "position": {
        "x": -0.31250626,
        "y": -0.83086497
      },
      "sector": 27
    },
    {
      "index": 231,
      "position": {
        "x": -0.44250628,
        "y": -0.76256365
      },
      "sector": 27
    },
    {
      "index": 232,
      "position": {
        "x": -0.5732856,
        "y": -0.6689176
      },
      "sector": 44
    },
    {
      "index": 233,
      "position": {
        "x": -0.48777303,
        "y": -0.5639948
      },
      "sector": 44
    },
    {
      "index": 234,
      "position": {
        "x": -0.6169949,
        "y": -0.5607729
      },
      "sector": 45
    },
    {
      "index": 235,
      "position": {
        "x": -0.75561637,
        "y": -0.5062855
      },
      "sector": 45
    },
    {
      "index": 236,
      "position": {
        "x": -0.6258253,
        "y": -0.40203378
      },
      "sector": 45
    },
    {
      "index": 237,
      "position": {
        "x": -0.8608651,
        "y": -0.36050615
      },
      "sector": 45
    },
    {
      "index": 238,
      "position": {
        "x": -0.7807918,
        "y": -0.3289472
      },
      "sector": 46
    },
    {
      "index": 239,
      "position": {
        "x": -0.6268659,
        "y": -0.12653387
      },
      "sector": 46
    },
    {
      "index": 240,
      "position": {
        "x": -0.9021621,
        "y": 0.15547518
      },
      "sector": 46
    },
    {
      "index": 241,
      "position": {
        "x": -0.8157918,
        "y": -0.2170526
      },
      "sector": 46
    },
    {
      "index": 242,
      "position": {
        "x": -0.806865,
        "y": 0.20750636
      },
      "sector": 48
    },
    {
      "index": 243,
      "position": {
        "x": -0.840825,
        "y": 0.06103413
      },
      "sector": 48
    },
    {
      "index": 244,
      "position": {
        "x": -0.74635,
        "y": 0.3441284
      },
      "sector": 49
    },
    {
      "index": 245,
      "position": {
        "x": -0.6519177,
        "y": 0.45428553
      },
      "sector": 49
    },
    {
      "index": 246,
      "position": {
        "x": -0.7952854,
        "y": 0.4969178
      },
      "sector": 50
    },
    {
      "index": 247,
      "position": {
        "x": -0.8741281,
        "y": 0.3473503
      },
      "sector": 50
    },
    {
      "index": 248,
      "position": {
        "x": -0.56103384,
        "y": 0.77082515
      },
      "sector": 50
    },
    {
      "index": 249,
      "position": {
        "x": -0.6895062,
        "y": 0.5908651
      },
      "sector": 50
    },
    {
      "index": 250,
      "position": {
        "x": -0.13953374,
        "y": 0.7098659
      },
      "sector": 35
    },
    {
      "index": 251,
      "position": {
        "x": -0.048947096,
        "y": 0.72179186
      },
      "sector": 35
    },
    {
      "index": 252,
      "position": {
        "x": -0.35552636,
        "y": 0.8833641
      },
      "sector": 51
    },
    {
      "index": 253,
      "position": {
        "x": -0.19952635,
        "y": 0.9263641
      },
      "sector": 51
    },
    {
      "index": 254,
      "position": {
        "x": 0.14810903,
        "y": 0.9233154
      },
      "sector": 52
    },
    {
      "index": 255,
      "position": {
        "x": 0.3191681,
        "y": 0.8730191
      },
      "sector": 52
    },
    {
      "index": 256,
      "position": {
        "x": 0.5267236,
        "y": 0.7475853
      },
      "sector": 53
    },
    {
      "index": 257,
      "position": {
        "x": 0.6665664,
        "y": 0.6070179
      },
      "sector": 53
    },
    {
      "index": 258,
      "position": {
        "x": 0.55758536,
        "y": 0.4887236
      },
      "sector": 53
    },
    {
      "index": 259,
      "position": {
        "x": 0.6838866,
        "y": 0.48672357
      },
      "sector": 53
    },
    {
      "index": 260,
      "position": {
        "x": -0.438396,
        "y": 0.6977152
      },
      "sector": 49
    }
  ];

export default planetsPositions;