////////////////////////////////////////////////////////////
// EDIT PUZZLES
////////////////////////////////////////////////////////////

var stage_arr = [{
        stage: {
            w: 1280,
            h: 768,
            x: 0,
            y: 0
        },
        hub: [{
            x: 264,
            y: 394,
            type: 0,
            lock: [1, 1, 1, 1],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1051,
            y: 393,
            type: 1,
            lock: [1, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 579,
            y: 597,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 578,
            y: 185,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 577,
            y: 393,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }],
        lines: [{
                startHub: 0,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 3,
                array: [{
                    x: 264,
                    y: 598
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 0,
                endHub: 3,
                endHubPos: 3,
                array: [{
                    x: 264,
                    y: 185
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 2,
                endHub: 4,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 0,
                endHub: 4,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 1,
                endHubPos: 3,
                array: []
            }
        ],
    },

    {
        stage: {
            w: 1280,
            h: 768,
            x: 0,
            y: 0
        },
        hub: [{
            x: 626,
            y: 196,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 628,
            y: 597,
            type: 1,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 255,
            y: 314,
            type: 2,
            lock: [1, 0, 0, 0],
            timer: 30000,
            trick: 0,
            rotation: 90
        }, {
            x: 1045,
            y: 307,
            type: 2,
            lock: [1, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 627,
            y: 434,
            type: 5,
            lock: [1, 1, 0, 1],
            timer: 0,
            trick: 1,
            rotation: 270
        }, {
            x: 383,
            y: 592,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 882,
            y: 589,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }],
        lines: [{
                startHub: 0,
                startHubPos: 3,
                endHub: 2,
                endHubPos: 0,
                array: [{
                    x: 256,
                    y: 194
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 1,
                endHub: 3,
                endHubPos: 0,
                array: [{
                    x: 1044,
                    y: 194
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 2,
                endHub: 1,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 0,
                startHubPos: 2,
                endHub: 4,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 2,
                endHub: 5,
                endHubPos: 0,
                array: [{
                    x: 256,
                    y: 434
                }, {
                    x: 382,
                    y: 435
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 2,
                endHub: 6,
                endHubPos: 0,
                array: [{
                    x: 1048,
                    y: 435
                }, {
                    x: 881,
                    y: 435
                }, ]
            },
            {
                startHub: 5,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 3,
                array: [{
                    x: 507,
                    y: 592
                }, {
                    x: 505,
                    y: 435
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 6,
                endHubPos: 3,
                array: [{
                    x: 751,
                    y: 435
                }, {
                    x: 752,
                    y: 590
                }, ]
            }
        ],
    },

    {
        stage: {
            w: 2500,
            h: 768,
            x: -1220,
            y: 0
        },
        hub: [{
            x: 377,
            y: 282,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 890,
            y: 282,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1373,
            y: 336,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 652,
            y: 534,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 2243,
            y: 384,
            type: 1,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 2069,
            y: 387,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1225,
            y: 470,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 1687,
            y: 246,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 1479,
            y: 553,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1825,
            y: 462,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 279,
            y: 495,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }],
        lines: [{
                startHub: 0,
                startHubPos: 1,
                endHub: 1,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 0,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 3,
                array: [{
                    x: 377,
                    y: 421
                }, {
                    x: 1073,
                    y: 419
                }, {
                    x: 1073,
                    y: 339
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 0,
                endHub: 1,
                endHubPos: 2,
                array: [{
                    x: 651,
                    y: 379
                }, {
                    x: 890,
                    y: 380
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 1,
                endHub: 6,
                endHubPos: 3,
                array: [{
                    x: 1006,
                    y: 534
                }, {
                    x: 1003,
                    y: 472
                }, ]
            },
            {
                startHub: 2,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 3,
                array: [{
                    x: 1545,
                    y: 336
                }, {
                    x: 1546,
                    y: 390
                }, ]
            },
            {
                startHub: 8,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 2,
                array: [{
                    x: 2243,
                    y: 553
                }, ]
            },
            {
                startHub: 8,
                startHubPos: 0,
                endHub: 9,
                endHubPos: 0,
                array: [{
                    x: 1478,
                    y: 157
                }, {
                    x: 1821,
                    y: 158
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 2,
                endHub: 9,
                endHubPos: 2,
                array: [{
                    x: 279,
                    y: 607
                }, {
                    x: 1828,
                    y: 608
                }, ]
            },
            {
                startHub: 6,
                startHubPos: 1,
                endHub: 7,
                endHubPos: 2,
                array: [{
                    x: 1690,
                    y: 470
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 1,
                endHub: 7,
                endHubPos: 3,
                array: [{
                    x: 549,
                    y: 495
                }, {
                    x: 546,
                    y: 177
                }, {
                    x: 1184,
                    y: 177
                }, {
                    x: 1184,
                    y: 244
                }, ]
            }
        ],
    },

    {
        stage: {
            w: 1600,
            h: 1400,
            x: -196,
            y: -387
        },
        hub: [{
            x: 641,
            y: 431,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 940,
            y: 429,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 791,
            y: 644,
            type: 4,
            lock: [0, 1, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 396,
            y: 578,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 398,
            y: 232,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1218,
            y: 587,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1210,
            y: 228,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 791,
            y: 825,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 789,
            y: 240,
            type: 1,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 391,
            y: 953,
            type: 3,
            lock: [1, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 270
        }, {
            x: 791,
            y: 1076,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 1217,
            y: 829,
            type: 3,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1020,
            y: 950,
            type: 5,
            lock: [0, 1, 0, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1022,
            y: 715,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 20000,
            trick: 2,
            rotation: 0
        }],
        lines: [{
                startHub: 0,
                startHubPos: 1,
                endHub: 1,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 0,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 3,
                array: [{
                    x: 644,
                    y: 574
                }, ]
            },
            {
                startHub: 1,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 1,
                array: [{
                    x: 941,
                    y: 578
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 0,
                endHub: 4,
                endHubPos: 2,
                array: [{
                    x: 640,
                    y: 340
                }, {
                    x: 398,
                    y: 342
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 3,
                endHub: 3,
                endHubPos: 0,
                array: [{
                    x: 396,
                    y: 431
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 3,
                endHub: 3,
                endHubPos: 3,
                array: [{
                    x: 290,
                    y: 231
                }, {
                    x: 291,
                    y: 579
                }, ]
            },
            {
                startHub: 1,
                startHubPos: 0,
                endHub: 6,
                endHubPos: 2,
                array: [{
                    x: 938,
                    y: 337
                }, {
                    x: 1212,
                    y: 336
                }, ]
            },
            {
                startHub: 1,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 0,
                array: [{
                    x: 1215,
                    y: 426
                }, ]
            },
            {
                startHub: 6,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 1,
                array: [{
                    x: 1321,
                    y: 228
                }, {
                    x: 1323,
                    y: 587
                }, ]
            },
            {
                startHub: 2,
                startHubPos: 0,
                endHub: 8,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 2,
                endHub: 7,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 7,
                startHubPos: 2,
                endHub: 10,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 9,
                startHubPos: 2,
                endHub: 10,
                endHubPos: 3,
                array: [{
                    x: 392,
                    y: 1078
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 1,
                endHub: 11,
                endHubPos: 2,
                array: [{
                    x: 1218,
                    y: 1075
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 13,
                endHubPos: 3,
                array: [{
                    x: 524,
                    y: 232
                }, {
                    x: 524,
                    y: 716
                }, ]
            },
            {
                startHub: 13,
                startHubPos: 0,
                endHub: 6,
                endHubPos: 3,
                array: [{
                    x: 1018,
                    y: 229
                }, ]
            },
            {
                startHub: 7,
                startHubPos: 3,
                endHub: 9,
                endHubPos: 0,
                array: [{
                    x: 391,
                    y: 826
                }, ]
            },
            {
                startHub: 9,
                startHubPos: 1,
                endHub: 12,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 11,
                startHubPos: 3,
                endHub: 12,
                endHubPos: 1,
                array: [{
                    x: 1126,
                    y: 830
                }, {
                    x: 1127,
                    y: 952
                }, ]
            },
            {
                startHub: 12,
                startHubPos: 0,
                endHub: 13,
                endHubPos: 2,
                array: []
            }
        ],
    },

    {
        stage: {
            w: 1280,
            h: 2200,
            x: 0,
            y: -669
        },
        hub: [{
            x: 616,
            y: 500,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 300,
            y: 498,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }, {
            x: 615,
            y: 333,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 451,
            y: 498,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 616,
            y: 188,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 301,
            y: 189,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 617,
            y: 817,
            type: 4,
            lock: [0, 1, 0, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 789,
            y: 497,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 952,
            y: 496,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 617,
            y: 691,
            type: 2,
            lock: [0, 1, 0, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 297,
            y: 818,
            type: 3,
            lock: [1, 0, 0, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 616,
            y: 1041,
            type: 1,
            lock: [1, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 613,
            y: 1276,
            type: 4,
            lock: [0, 1, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 614,
            y: 1408,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 615,
            y: 1566,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 617,
            y: 1723,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 617,
            y: 1855,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 450,
            y: 1564,
            type: 5,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 302,
            y: 1563,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 794,
            y: 1561,
            type: 5,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 90
        }, {
            x: 948,
            y: 1560,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }],
        lines: [{
                startHub: 2,
                startHubPos: 2,
                endHub: 0,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 3,
                endHub: 3,
                endHubPos: 0,
                array: [{
                    x: 452,
                    y: 335
                }, ]
            },
            {
                startHub: 9,
                startHubPos: 1,
                endHub: 7,
                endHubPos: 2,
                array: [{
                    x: 790,
                    y: 691
                }, ]
            },
            {
                startHub: 2,
                startHubPos: 0,
                endHub: 4,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 3,
                startHubPos: 3,
                endHub: 1,
                endHubPos: 1,
                array: []
            },
            {
                startHub: 1,
                startHubPos: 0,
                endHub: 5,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 5,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 7,
                endHubPos: 0,
                array: [{
                    x: 949,
                    y: 187
                }, {
                    x: 951,
                    y: 337
                }, {
                    x: 789,
                    y: 339
                }, ]
            },
            {
                startHub: 7,
                startHubPos: 1,
                endHub: 8,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 6,
                startHubPos: 1,
                endHub: 8,
                endHubPos: 2,
                array: [{
                    x: 951,
                    y: 820
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 1,
                endHub: 6,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 9,
                startHubPos: 2,
                endHub: 6,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 1,
                startHubPos: 2,
                endHub: 10,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 3,
                startHubPos: 2,
                endHub: 9,
                endHubPos: 3,
                array: [{
                    x: 451,
                    y: 691
                }, ]
            },
            {
                startHub: 6,
                startHubPos: 2,
                endHub: 11,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 14,
                startHubPos: 2,
                endHub: 15,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 15,
                startHubPos: 1,
                endHub: 19,
                endHubPos: 2,
                array: [{
                    x: 796,
                    y: 1721
                }, ]
            },
            {
                startHub: 19,
                startHubPos: 0,
                endHub: 13,
                endHubPos: 1,
                array: [{
                    x: 792,
                    y: 1406
                }, ]
            },
            {
                startHub: 13,
                startHubPos: 0,
                endHub: 12,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 12,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 0,
                array: [{
                    x: 945,
                    y: 1275
                }, ]
            },
            {
                startHub: 17,
                startHubPos: 2,
                endHub: 15,
                endHubPos: 3,
                array: [{
                    x: 451,
                    y: 1725
                }, ]
            },
            {
                startHub: 12,
                startHubPos: 0,
                endHub: 11,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 17,
                startHubPos: 3,
                endHub: 18,
                endHubPos: 1,
                array: []
            },
            {
                startHub: 18,
                startHubPos: 2,
                endHub: 16,
                endHubPos: 3,
                array: [{
                    x: 302,
                    y: 1855
                }, ]
            },
            {
                startHub: 16,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 2,
                array: [{
                    x: 952,
                    y: 1854
                }, ]
            },
            {
                startHub: 17,
                startHubPos: 0,
                endHub: 12,
                endHubPos: 3,
                array: [{
                    x: 450,
                    y: 1408
                }, {
                    x: 299,
                    y: 1409
                }, {
                    x: 298,
                    y: 1277
                }, ]
            },
            {
                startHub: 19,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 3,
                array: []
            }
        ],
    },

    {
        stage: {
            w: 2000,
            h: 1500,
            x: 0,
            y: 0
        },
        hub: [{
            x: 1005,
            y: 1270,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1005,
            y: 921,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 30000,
            trick: 2,
            rotation: -1
        }, {
            x: 1625,
            y: 924,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 382,
            y: 918,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1259,
            y: 646,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1465,
            y: 350,
            type: 2,
            lock: [0, 1, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 90
        }, {
            x: 1069,
            y: 220,
            type: 3,
            lock: [0, 1, 1, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 503,
            y: 388,
            type: 1,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 727,
            y: 648,
            type: 5,
            lock: [0, 0, 0, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 725,
            y: 389,
            type: 3,
            lock: [1, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 90
        }],
        lines: [{
                startHub: 0,
                startHubPos: 0,
                endHub: 1,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 3,
                startHubPos: 1,
                endHub: 1,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 1,
                startHubPos: 1,
                endHub: 2,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 2,
                array: [{
                    x: 1465,
                    y: 647
                }, ]
            },
            {
                startHub: 5,
                startHubPos: 1,
                endHub: 2,
                endHubPos: 0,
                array: [{
                    x: 1624,
                    y: 351
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 2,
                array: [{
                    x: 1260,
                    y: 1121
                }, {
                    x: 1627,
                    y: 1124
                }, ]
            },
            {
                startHub: 6,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 0,
                array: [{
                    x: 1465,
                    y: 223
                }, ]
            },
            {
                startHub: 6,
                startHubPos: 2,
                endHub: 4,
                endHubPos: 0,
                array: [{
                    x: 1069,
                    y: 426
                }, {
                    x: 1258,
                    y: 426
                }, ]
            },
            {
                startHub: 8,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 3,
                startHubPos: 0,
                endHub: 8,
                endHubPos: 3,
                array: [{
                    x: 383,
                    y: 645
                }, ]
            },
            {
                startHub: 8,
                startHubPos: 0,
                endHub: 9,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 9,
                startHubPos: 0,
                endHub: 6,
                endHubPos: 3,
                array: [{
                    x: 725,
                    y: 221
                }, ]
            },
            {
                startHub: 7,
                startHubPos: 1,
                endHub: 9,
                endHubPos: 3,
                array: []
            }
        ],
    },

    {
        stage: {
            w: 2500,
            h: 1800,
            x: -619,
            y: -92
        },
        hub: [{
            x: 552,
            y: 264,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 550,
            y: 575,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }, {
            x: 941,
            y: 896,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 40000,
            trick: 2,
            rotation: 0
        }, {
            x: 1117,
            y: 615,
            type: 2,
            lock: [0, 0, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1432,
            y: 614,
            type: 3,
            lock: [0, 1, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1281,
            y: 838,
            type: 3,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1276,
            y: 359,
            type: 1,
            lock: [0, 1, 0, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1121,
            y: 359,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 60000,
            trick: 0,
            rotation: 0
        }, {
            x: 1431,
            y: 358,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 65000,
            trick: 0,
            rotation: 0
        }, {
            x: 1277,
            y: 1427,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1624,
            y: 893,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 40000,
            trick: 2,
            rotation: 180
        }, {
            x: 1899,
            y: 559,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }, {
            x: 1897,
            y: 366,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }],
        lines: [{
                startHub: 0,
                startHubPos: 3,
                endHub: 1,
                endHubPos: 3,
                array: [{
                    x: 318,
                    y: 263
                }, {
                    x: 316,
                    y: 576
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 1,
                endHub: 1,
                endHubPos: 1,
                array: [{
                    x: 782,
                    y: 262
                }, {
                    x: 784,
                    y: 576
                }, ]
            },
            {
                startHub: 1,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 3,
                array: [{
                    x: 548,
                    y: 894
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 0,
                endHub: 3,
                endHubPos: 3,
                array: [{
                    x: 942,
                    y: 614
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 2,
                endHub: 5,
                endHubPos: 3,
                array: [{
                    x: 1119,
                    y: 837
                }, ]
            },
            {
                startHub: 5,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 2,
                array: [{
                    x: 1434,
                    y: 838
                }, ]
            },
            {
                startHub: 7,
                startHubPos: 1,
                endHub: 6,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 6,
                startHubPos: 1,
                endHub: 8,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 7,
                startHubPos: 3,
                endHub: 3,
                endHubPos: 0,
                array: [{
                    x: 1010,
                    y: 359
                }, {
                    x: 1011,
                    y: 519
                }, {
                    x: 1119,
                    y: 519
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 0,
                endHub: 8,
                endHubPos: 1,
                array: [{
                    x: 1431,
                    y: 517
                }, {
                    x: 1555,
                    y: 518
                }, {
                    x: 1554,
                    y: 359
                }, ]
            },
            {
                startHub: 9,
                startHubPos: 0,
                endHub: 5,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 2,
                endHub: 9,
                endHubPos: 3,
                array: [{
                    x: 937,
                    y: 1429
                }, ]
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 10,
                endHubPos: 0,
                array: [{
                    x: 1625,
                    y: 615
                }, ]
            },
            {
                startHub: 9,
                startHubPos: 1,
                endHub: 10,
                endHubPos: 2,
                array: [{
                    x: 1630,
                    y: 1426
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 1,
                endHub: 11,
                endHubPos: 2,
                array: [{
                    x: 1902,
                    y: 894
                }, ]
            },
            {
                startHub: 12,
                startHubPos: 3,
                endHub: 11,
                endHubPos: 3,
                array: [{
                    x: 1732,
                    y: 367
                }, {
                    x: 1734,
                    y: 560
                }, ]
            },
            {
                startHub: 12,
                startHubPos: 1,
                endHub: 11,
                endHubPos: 1,
                array: [{
                    x: 2071,
                    y: 367
                }, {
                    x: 2075,
                    y: 559
                }, ]
            }
        ],
    },

    {
        stage: {
            w: 3000,
            h: 2200,
            x: -768,
            y: -162
        },
        hub: [{
            x: 412,
            y: 580,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 623,
            y: 399,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 628,
            y: 761,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 966,
            y: 579,
            type: 4,
            lock: [1, 0, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 735,
            y: 578,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 966,
            y: 396,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 968,
            y: 761,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 965,
            y: 157,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 970,
            y: 991,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1458,
            y: 581,
            type: 1,
            lock: [1, 0, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1229,
            y: 581,
            type: 3,
            lock: [0, 0, 1, 1],
            timer: 0,
            trick: 1,
            rotation: 90
        }, {
            x: 1458,
            y: 763,
            type: 5,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 180
        }, {
            x: 1703,
            y: 581,
            type: 3,
            lock: [0, 0, 1, 0],
            timer: 0,
            trick: 1,
            rotation: 0
        }, {
            x: 1989,
            y: 581,
            type: 4,
            lock: [1, 1, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1990,
            y: 774,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 1989,
            y: 393,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1988,
            y: 169,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 2192,
            y: 580,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 2349,
            y: 394,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 2360,
            y: 773,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 2612,
            y: 580,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1993,
            y: 1023,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 180
        }, {
            x: 1460,
            y: 1282,
            type: 4,
            lock: [0, 1, 1, 1],
            timer: 0,
            trick: 1,
            rotation: -1
        }, {
            x: 1460,
            y: 988,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 25000,
            trick: 2,
            rotation: 90
        }, {
            x: 1193,
            y: 1283,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1713,
            y: 1282,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 60000,
            trick: 0,
            rotation: 90
        }, {
            x: 1196,
            y: 1578,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1717,
            y: 1583,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 1460,
            y: 1483,
            type: 2,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 90
        }, {
            x: 1461,
            y: 1805,
            type: 0,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: -1
        }, {
            x: 891,
            y: 1284,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }, {
            x: 2057,
            y: 1281,
            type: 3,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 0
        }, {
            x: 1457,
            y: 341,
            type: 5,
            lock: [0, 0, 0, 0],
            timer: 0,
            trick: 0,
            rotation: 270
        }],
        lines: [{
                startHub: 0,
                startHubPos: 0,
                endHub: 1,
                endHubPos: 3,
                array: [{
                    x: 412,
                    y: 400
                }, ]
            },
            {
                startHub: 0,
                startHubPos: 1,
                endHub: 4,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 4,
                startHubPos: 1,
                endHub: 3,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 0,
                startHubPos: 2,
                endHub: 2,
                endHubPos: 3,
                array: [{
                    x: 411,
                    y: 758
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 0,
                endHub: 5,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 3,
                startHubPos: 2,
                endHub: 6,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 1,
                startHubPos: 1,
                endHub: 5,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 7,
                startHubPos: 2,
                endHub: 5,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 7,
                startHubPos: 3,
                endHub: 1,
                endHubPos: 0,
                array: [{
                    x: 622,
                    y: 159
                }, ]
            },
            {
                startHub: 2,
                startHubPos: 1,
                endHub: 6,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 6,
                startHubPos: 2,
                endHub: 8,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 2,
                startHubPos: 2,
                endHub: 8,
                endHubPos: 3,
                array: [{
                    x: 625,
                    y: 992
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 1,
                endHub: 9,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 9,
                startHubPos: 1,
                endHub: 12,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 10,
                startHubPos: 2,
                endHub: 11,
                endHubPos: 3,
                array: [{
                    x: 1229,
                    y: 763
                }, ]
            },
            {
                startHub: 3,
                startHubPos: 1,
                endHub: 10,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 11,
                startHubPos: 1,
                endHub: 12,
                endHubPos: 2,
                array: [{
                    x: 1702,
                    y: 765
                }, ]
            },
            {
                startHub: 9,
                startHubPos: 2,
                endHub: 11,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 12,
                startHubPos: 1,
                endHub: 13,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 13,
                startHubPos: 0,
                endHub: 15,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 14,
                startHubPos: 0,
                endHub: 13,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 14,
                startHubPos: 1,
                endHub: 19,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 16,
                startHubPos: 2,
                endHub: 15,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 17,
                startHubPos: 3,
                endHub: 13,
                endHubPos: 1,
                array: []
            },
            {
                startHub: 15,
                startHubPos: 1,
                endHub: 18,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 16,
                startHubPos: 1,
                endHub: 18,
                endHubPos: 0,
                array: [{
                    x: 2350,
                    y: 168
                }, ]
            },
            {
                startHub: 17,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 18,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 0,
                array: [{
                    x: 2612,
                    y: 396
                }, ]
            },
            {
                startHub: 19,
                startHubPos: 1,
                endHub: 20,
                endHubPos: 2,
                array: [{
                    x: 2615,
                    y: 775
                }, ]
            },
            {
                startHub: 14,
                startHubPos: 2,
                endHub: 21,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 21,
                startHubPos: 1,
                endHub: 19,
                endHubPos: 2,
                array: [{
                    x: 2364,
                    y: 1022
                }, ]
            },
            {
                startHub: 11,
                startHubPos: 2,
                endHub: 23,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 23,
                startHubPos: 2,
                endHub: 22,
                endHubPos: 0,
                array: []
            },
            {
                startHub: 24,
                startHubPos: 1,
                endHub: 22,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 22,
                startHubPos: 1,
                endHub: 25,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 26,
                startHubPos: 0,
                endHub: 24,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 29,
                startHubPos: 0,
                endHub: 28,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 28,
                startHubPos: 0,
                endHub: 22,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 27,
                startHubPos: 0,
                endHub: 25,
                endHubPos: 2,
                array: []
            },
            {
                startHub: 26,
                startHubPos: 2,
                endHub: 29,
                endHubPos: 3,
                array: [{
                    x: 1194,
                    y: 1808
                }, ]
            },
            {
                startHub: 29,
                startHubPos: 1,
                endHub: 27,
                endHubPos: 2,
                array: [{
                    x: 1718,
                    y: 1806
                }, ]
            },
            {
                startHub: 30,
                startHubPos: 1,
                endHub: 24,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 30,
                startHubPos: 2,
                endHub: 26,
                endHubPos: 3,
                array: [{
                    x: 892,
                    y: 1579
                }, ]
            },
            {
                startHub: 25,
                startHubPos: 1,
                endHub: 31,
                endHubPos: 3,
                array: []
            },
            {
                startHub: 27,
                startHubPos: 1,
                endHub: 31,
                endHubPos: 2,
                array: [{
                    x: 2064,
                    y: 1581
                }, ]
            },
            {
                startHub: 10,
                startHubPos: 0,
                endHub: 32,
                endHubPos: 3,
                array: [{
                    x: 1228,
                    y: 343
                }, ]
            },
            {
                startHub: 32,
                startHubPos: 1,
                endHub: 12,
                endHubPos: 0,
                array: [{
                    x: 1704,
                    y: 342
                }, ]
            },
            {
                startHub: 32,
                startHubPos: 2,
                endHub: 9,
                endHubPos: 0,
                array: []
            }
        ],
    },

]