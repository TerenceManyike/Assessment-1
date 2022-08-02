const app = Vue.createApp({
    data(){
        return {
            keys: [
              {colour: "aqua", name: "Total Confirmed Cases"},
              {colour: "rgb(96, 163, 163)", name: "Total Deaths"},
              {colour: "rgb(28, 83, 83)", name: "TotalRecovered"},
              {colour: "rgb(6, 41, 41)", name: "Active Cases"},
              {colour: "rgb(0, 82, 82)", name: "Daily Confirmed Cases"},
              {colour: "rgb(0, 160, 160)", name: "Daily Confirmed Cases"}
            ],
            covid_stats: [
                {
                  "Date": "2020/03/05",
                  "TotalConfirmedCases": 1,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 1,
                  "DailyConfirmedCases": 0,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/06",
                  "TotalConfirmedCases": 1,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 1,
                  "DailyConfirmedCases": 0,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/07",
                  "TotalConfirmedCases": 2,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 2,
                  "DailyConfirmedCases": 1,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/08",
                  "TotalConfirmedCases": 3,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 3,
                  "DailyConfirmedCases": 1,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/09",
                  "TotalConfirmedCases": 7,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 7,
                  "DailyConfirmedCases": 4,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/10",
                  "TotalConfirmedCases": 7,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 7,
                  "DailyConfirmedCases": 0,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/11",
                  "TotalConfirmedCases": 13,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 13,
                  "DailyConfirmedCases": 6,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/12",
                  "TotalConfirmedCases": 17,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 17,
                  "DailyConfirmedCases": 4,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/13",
                  "TotalConfirmedCases": 25,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 25,
                  "DailyConfirmedCases": 8,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/14",
                  "TotalConfirmedCases": 39,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 39,
                  "DailyConfirmedCases": 14,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/15",
                  "TotalConfirmedCases": 52,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 52,
                  "DailyConfirmedCases": 13,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/16",
                  "TotalConfirmedCases": 63,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 63,
                  "DailyConfirmedCases": 11,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/17",
                  "TotalConfirmedCases": 86,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 86,
                  "DailyConfirmedCases": 23,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/18",
                  "TotalConfirmedCases": 117,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 117,
                  "DailyConfirmedCases": 31,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/19",
                  "TotalConfirmedCases": 151,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 151,
                  "DailyConfirmed Cases": 34,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/20",
                  "TotalConfirmedCases": 203,
                  "TotalDeaths": 0,
                  "TotalRecovered": 0,
                  "ActiveCases": 203,
                  "DailyConfirmedCases": 52,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/21",
                  "TotalConfirmedCases": 241,
                  "TotalDeaths": 0,
                  "TotalRecovered": 2,
                  "ActiveCases": 239,
                  "DailyConfirmedCases": 38,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/22",
                  "TotalConfirmedCases": 275,
                  "TotalDeaths": 0,
                  "TotalRecovered": 2,
                  "ActiveCases": 273,
                  "DailyConfirmedCases": 34,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/23",
                  "TotalConfirmedCases": 403,
                  "TotalDeaths": 0,
                  "TotalRecovered": 4,
                  "ActiveCases": 399,
                  "DailyConfirmedCases": 128,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/24",
                  "TotalConfirmedCases": 555,
                  "TotalDeaths": 0,
                  "TotalRecovered": 4,
                  "ActiveCases": 551,
                  "DailyConfirmedCases": 152,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/25",
                  "TotalConfirmedCases": 710,
                  "TotalDeaths": 0,
                  "TotalRecovered": 4,
                  "ActiveCases": 706,
                  "DailyConfirmedCases": 155,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/26",
                  "TotalConfirmedCases": 928,
                  "TotalDeaths": 0,
                  "TotalRecovered": 4,
                  "ActiveCases": 924,
                  "DailyConfirmedCases": 218,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/27",
                  "TotalConfirmedCases": 1171,
                  "TotalDeaths": 1,
                  "TotalRecovered": 31,
                  "ActiveCases": "1 139",
                  "DailyConfirmedCases": 243,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/03/28",
                  "TotalConfirmedCases": 1188,
                  "TotalDeaths": 1,
                  "TotalRecovered": 31,
                  "ActiveCases": "1 156",
                  "DailyConfirmed Cases": 17,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/03/29",
                  "TotalConfirmedCases": 1281,
                  "TotalDeaths": 2,
                  "TotalRecovered": 31,
                  "ActiveCases": "1 248",
                  "DailyConfirmedCases": 93,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/03/30",
                  "TotalConfirmedCases": 1326,
                  "TotalDeaths": 3,
                  "TotalRecovered": 31,
                  "ActiveCases": 1292,
                  "DailyConfirmedCases": 45,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/03/31",
                  "TotalConfirmedCases": 1353,
                  "TotalDeaths": 5,
                  "TotalRecovered": 31,
                  "ActiveCases": "1 317",
                  "DailyConfirmedCases": 27,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/01",
                  "TotalConfirmedCases": 1380,
                  "TotalDeaths": 5,
                  "TotalRecovered": 31,
                  "ActiveCases": "1 344",
                  "DailyConfirmedCases": 27,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/02",
                  "TotalConfirmedCases": 1462,
                  "TotalDeaths": 7,
                  "TotalRecovered": 45,
                  "ActiveCases": "1 410",
                  "DailyConfirmed Cases": 82,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/03",
                  "TotalConfirmedCases": 1505,
                  "TotalDeaths": 9,
                  "TotalRecovered": 45,
                  "ActiveCases": "1 451",
                  "DailyConfirmedCases": 43,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/04",
                  "TotalConfirmedCases": 1585,
                  "TotalDeaths": 9,
                  "TotalRecovered": 45,
                  "ActiveCases": 1531,
                  "DailyConfirmedCases": 80,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/05",
                  "TotalConfirmedCases": 1655,
                  "TotalDeaths": 11,
                  "TotalRecovered": 45,
                  "ActiveCases": "1 599",
                  "DailyConfirmedCases": 70,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/06",
                  "TotalConfirmedCases": 1686,
                  "TotalDeaths": 12,
                  "TotalRecovered": 45,
                  "ActiveCases": 1629,
                  "DailyConfirmedCases": 31,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/04/07",
                  "TotalConfirmedCases": 1749,
                  "TotalDeaths": 13,
                  "TotalRecovered": 45,
                  "ActiveCases": 1691,
                  "DailyConfirmed Cases": 63,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/04/08",
                  "TotalConfirmedCases": 1845,
                  "TotalDeaths": 18,
                  "TotalRecovered": 45,
                  "ActiveCases": 1782,
                  "DailyConfirmedCases": 96,
                  "Dailydeaths": 5
                },
                {
                  "Date": "2020/04/09",
                  "TotalConfirmedCases": 1934,
                  "TotalDeaths": 18,
                  "TotalRecovered": 45,
                  "ActiveCases": 1871,
                  "DailyConfirmedCases": 89,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/10",
                  "TotalConfirmedCases": 2003,
                  "TotalDeaths": 24,
                  "TotalRecovered": 410,
                  "ActiveCases": 1569,
                  "DailyConfirmedCases": 69,
                  "Dailydeaths": 6
                },
                {
                  "Date": "2020/04/11",
                  "TotalConfirmedCases": 2028,
                  "TotalDeaths": 25,
                  "TotalRecovered": 410,
                  "ActiveCases": 1593,
                  "DailyConfirmedCases": 25,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/04/12",
                  "TotalConfirmedCases": 2173,
                  "TotalDeaths": 25,
                  "TotalRecovered": 410,
                  "ActiveCases": 1738,
                  "DailyConfirmedCases": 145,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/13",
                  "TotalConfirmedCases": 2272,
                  "TotalDeaths": 27,
                  "TotalRecovered": 410,
                  "ActiveCases": 1835,
                  "DailyConfirmedCases": 99,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/14",
                  "TotalConfirmedCases": 2415,
                  "TotalDeaths": 27,
                  "TotalRecovered": 410,
                  "ActiveCases": 1978,
                  "DailyConfirmedCases": 143,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/15",
                  "TotalConfirmedCases": 2506,
                  "TotalDeaths": 34,
                  "TotalRecovered": 410,
                  "ActiveCases": 2062,
                  "DailyConfirmedCases": 91,
                  "Dailydeaths": 7
                },
                {
                  "Date": "2020/04/16",
                  "TotalConfirmedCases": 2605,
                  "TotalDeaths": 48,
                  "TotalRecovered": 903,
                  "ActiveCases": 1654,
                  "DailyConfirmedCases": 99,
                  "Dailydeaths": 14
                },
                {
                  "Date": "2020/04/17",
                  "TotalConfirmedCases": 2783,
                  "TotalDeaths": 50,
                  "TotalRecovered": 903,
                  "ActiveCases": 1830,
                  "DailyConfirmedCases": 178,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/18",
                  "TotalConfirmedCases": 3034,
                  "TotalDeaths": 52,
                  "TotalRecovered": 903,
                  "ActiveCases": 2079,
                  "DailyConfirmedCases": 251,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/19",
                  "TotalConfirmedCases": 3158,
                  "TotalDeaths": 54,
                  "TotalRecovered": 903,
                  "ActiveCases": 2201,
                  "DailyConfirmedCases": 124,
                  "Dailydeaths": 2
                },
                {
                  "Date": "2020/04/20",
                  "TotalConfirmedCases": 3300,
                  "TotalDeaths": 58,
                  "TotalRecovered": 1055,
                  "ActiveCases": 2187,
                  "DailyConfirmedCases": 142,
                  "Dailydeaths": 4
                },
                {
                  "Date": "2020/04/21",
                  "TotalConfirmedCases": 3465,
                  "TotalDeaths": 58,
                  "TotalRecovered": 1055,
                  "ActiveCases": 2352,
                  "DailyConfirmedCases": 165,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/04/22",
                  "TotalConfirmedCases": 3635,
                  "TotalDeaths": 65,
                  "TotalRecovered": 1055,
                  "ActiveCases": 2515,
                  "DailyConfirmedCases": 170,
                  "Dailydeaths": 7
                },
                {
                  "Date": "2020/04/23",
                  "TotalConfirmedCases": 3953,
                  "TotalDeaths": 75,
                  "TotalRecovered": 1473,
                  "ActiveCases": 2405,
                  "DailyConfirmedCases": 318,
                  "Dailydeaths": 10
                },
                {
                  "Date": "2020/04/24",
                  "TotalConfirmedCases": 4220,
                  "TotalDeaths": 79,
                  "TotalRecovered": 1473,
                  "ActiveCases": 2668,
                  "DailyConfirmed Cases": 267,
                  "Dailydeaths": 4
                },
                {
                  "Date": "2020/04/25",
                  "TotalConfirmedCases": 4361,
                  "TotalDeaths": 86,
                  "TotalRecovered": 1473,
                  "ActiveCases": 2802,
                  "DailyConfirmedCases": 141,
                  "Dailydeaths": 7
                },
                {
                  "Date": "2020/04/26",
                  "TotalConfirmedCases": 4546,
                  "TotalDeaths": 87,
                  "TotalRecovered": 1473,
                  "ActiveCases": 2986,
                  "DailyConfirmedCases": 185,
                  "Dailydeaths": 1
                },
                {
                  "Date": "2020/04/27",
                  "TotalConfirmedCases": 4793,
                  "TotalDeaths": 90,
                  "TotalRecovered": 1473,
                  "ActiveCases": 3230,
                  "DailyConfirmedCases": 247,
                  "Dailydeaths": 3
                },
                {
                  "Date": "2020/04/28",
                  "TotalConfirmedCases": 4996,
                  "TotalDeaths": 93,
                  "TotalRecovered": 2073,
                  "ActiveCases": 2830,
                  "DailyConfirmedCases": 203,
                  "Dailydeaths": 3
                },
                {
                  "Date": "2020/04/29",
                  "TotalConfirmedCases": 5350,
                  "TotalDeaths": 103,
                  "TotalRecovered": 2073,
                  "ActiveCases": 3174,
                  "DailyConfirmedCases": 354,
                  "Dailydeaths": 10
                },
                {
                  "Date": "2020/04/30",
                  "TotalConfirmedCases": 5647,
                  "TotalDeaths": 103,
                  "TotalRecovered": 2073,
                  "ActiveCases": 3471,
                  "DailyConfirmedCases": 297,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/05/01",
                  "TotalConfirmedCases": 5951,
                  "TotalDeaths": 116,
                  "TotalRecovered": 2382,
                  "ActiveCases": 3453,
                  "DailyConfirmedCases": 304,
                  "Dailydeaths": 13
                },
                {
                  "Date": "2020/05/02",
                  "TotalConfirmedCases": 6336,
                  "TotalDeaths": 123,
                  "TotalRecovered": 2549,
                  "ActiveCases": 3664,
                  "DailyConfirmedCases": 385,
                  "Dailydeaths": 7
                },
                {
                  "Date": "2020/05/03",
                  "TotalConfirmedCases": 6783,
                  "TotalDeaths": 131,
                  "TotalRecovered": 2549,
                  "ActiveCases": 4103,
                  "DailyConfirmedCases": 447,
                  "Dailydeaths": 8
                },
                {
                  "Date": "2020/05/04",
                  "TotalConfirmedCases": 7220,
                  "TotalDeaths": 138,
                  "TotalRecovered": 2746,
                  "ActiveCases": 4336,
                  "DailyConfirmedCases": 437,
                  "Dailydeaths": 7
                },
                {
                  "Date": "2020/05/05",
                  "TotalConfirmedCases": 7572,
                  "TotalDeaths": 148,
                  "TotalRecovered": 2746,
                  "ActiveCases": 4678,
                  "DailyConfirmedCases": 352,
                  "Dailydeaths": 10
                },
                {
                  "Date": "2020/05/06",
                  "TotalConfirmedCases": 7808,
                  "TotalDeaths": 153,
                  "TotalRecovered": 3153,
                  "ActiveCases": 4502,
                  "DailyConfirmedCases": 236,
                  "Dailydeaths": 5
                },
                {
                  "Date": "2020/05/07",
                  "TotalConfirmedCases": 8232,
                  "TotalDeaths": 161,
                  "TotalRecovered": 3153,
                  "ActiveCases": 4918,
                  "DailyConfirmedCases": 424,
                  "Dailydeaths": 8
                },
                {
                  "Date": "2020/05/08",
                  "TotalConfirmedCases": 8895,
                  "TotalDeaths": 178,
                  "TotalRecovered": 3153,
                  "ActiveCases": 5564,
                  "DailyConfirmedCases": 663,
                  "Dailydeaths": 17
                },
                {
                  "Date": "2020/05/09",
                  "TotalConfirmedCases": 9420,
                  "TotalDeaths": 186,
                  "TotalRecovered": 3983,
                  "ActiveCases": "5 251",
                  "DailyConfirmedCases": 525,
                  "Dailydeaths": 8
                },
                {
                  "Date": "2020/05/10",
                  "TotalConfirmedCases": 10015,
                  "TotalDeaths": 194,
                  "TotalRecovered": 4173,
                  "ActiveCases": 5648,
                  "DailyConfirmedCases": 595,
                  "Dailydeaths": 8
                },
                {
                  "Date": "2020/05/11",
                  "TotalConfirmedCases": 10652,
                  "TotalDeaths": 206,
                  "TotalRecovered": 4357,
                  "ActiveCases": 6089,
                  "DailyConfirmedCases": 637,
                  "Dailydeaths": 12
                },
                {
                  "Date": "2020/05/12",
                  "TotalConfirmedCases": 11350,
                  "TotalDeaths": 206,
                  "TotalRecovered": 4357,
                  "ActiveCases": 6787,
                  "DailyConfirmedCases": 698,
                  "Dailydeaths": 0
                },
                {
                  "Date": "2020/05/13",
                  "TotalConfirmedCases": 12074,
                  "TotalDeaths": 219,
                  "TotalRecovered": 4745,
                  "ActiveCases": 7110,
                  "DailyConfirmedCases": 724,
                  "Dailydeaths": 13
                },
                {
                  "Date": "2020/05/14",
                  "TotalConfirmedCases": 12739,
                  "TotalDeaths": 238,
                  "TotalRecovered": 5676,
                  "ActiveCases": 6825,
                  "DailyConfirmedCases": 665,
                  "Dailydeaths": 19
                },
                {
                  "Date": "2020/05/15",
                  "TotalConfirmedCases": 13524,
                  "TotalDeaths": 247,
                  "TotalRecovered": 6083,
                  "ActiveCases": 7194,
                  "DailyConfirmedCases": 785,
                  "Dailydeaths": 9
                },
                {
                  "Date": "2020/05/16",
                  "TotalConfirmedCases": 14355,
                  "TotalDeaths": 261,
                  "TotalRecovered": 6478,
                  "ActiveCases": 7616,
                  "DailyConfirmedCases": 831,
                  "Dailydeaths": 14
                },
                {
                  "Date": "2020/05/17",
                  "TotalConfirmedCases": 15515,
                  "TotalDeaths": 264,
                  "TotalRecovered": 7006,
                  "ActiveCases": 8245,
                  "DailyConfirmedCases": 1160,
                  "Dailydeaths": 3
                },
                {
                  "Date": "2020/05/18",
                  "TotalConfirmedCases": 16433,
                  "TotalDeaths": 286,
                  "TotalRecovered": 7298,
                  "ActiveCases": 8849,
                  "DailyConfirmedCases": 918,
                  "Dailydeaths": 22
                },
                {
                  "Date": "2020/05/19",
                  "TotalConfirmedCases": 17200,
                  "TotalDeaths": 312,
                  "TotalRecovered": 7960,
                  "ActiveCases": 8928,
                  "DailyConfirmedCases": 767,
                  "Dailydeaths": 26
                },
                {
                  "Date": "2020/05/20",
                  "TotalConfirmedCases": 18003,
                  "TotalDeaths": 339,
                  "TotalRecovered": 8950,
                  "ActiveCases": 8714,
                  "DailyConfirmedCases": 803,
                  "Dailydeaths": 27
                },
                {
                  "Date": "2020/05/21",
                  "TotalConfirmedCases": 19137,
                  "TotalDeaths": 369,
                  "TotalRecovered": 8950,
                  "ActiveCases": 9818,
                  "DailyConfirmedCases": 1134,
                  "Dailydeaths": 30
                },
                {
                  "Date": "2020/05/22",
                  "TotalConfirmedCases": 20125,
                  "TotalDeaths": 397,
                  "TotalRecovered": 10104,
                  "ActiveCases": 9624,
                  "DailyConfirmedCases": 988,
                  "Dailydeaths": 28
                },
                {
                  "Date": "2020/05/23",
                  "TotalConfirmedCases": 21343,
                  "TotalDeaths": 407,
                  "TotalRecovered": 10104,
                  "ActiveCases": 10832,
                  "DailyConfirmedCases": 1218,
                  "Dailydeaths": 10
                },
                {
                  "Date": "2020/05/24",
                  "TotalConfirmedCases": 22583,
                  "TotalDeaths": 429,
                  "TotalRecovered": 11100,
                  "ActiveCases": 11054,
                  "DailyConfirmedCases": 1240,
                  "Dailydeaths": 22
                },
                {
                  "Date": "2020/05/25",
                  "TotalConfirmedCases": 23615,
                  "TotalDeaths": 481,
                  "TotalRecovered": 11917,
                  "ActiveCases": 11217,
                  "DailyConfirmedCases": 1032,
                  "Dailydeaths": 52
                },
                {
                  "Date": "2020/05/26",
                  "TotalConfirmedCases": 24264,
                  "TotalDeaths": 524,
                  "TotalRecovered": 12741,
                  "ActiveCases": 10999,
                  "DailyConfirmedCases": 649,
                  "Dailydeaths": 43
                },
                {
                  "Date": "2020/05/27",
                  "TotalConfirmedCases": 25937,
                  "TotalDeaths": 552,
                  "TotalRecovered": 13451,
                  "ActiveCases": 11934,
                  "DailyConfirmedCases": 1673,
                  "Dailydeaths": 28
                },
                {
                  "Date": "2020/05/28",
                  "TotalConfirmedCases": 27403,
                  "TotalDeaths": 577,
                  "TotalRecovered": 14370,
                  "ActiveCases": 12456,
                  "DailyConfirmedCases": 1466,
                  "Dailydeaths": 25
                },
                {
                  "Date": "2020/05/29",
                  "TotalConfirmedCases": 29240,
                  "TotalDeaths": 611,
                  "TotalRecovered": 15093,
                  "ActiveCases": 13536,
                  "DailyConfirmedCases": 1837,
                  "Dailydeaths": 34
                },
                {
                  "Date": "2020/05/30",
                  "TotalConfirmedCases": 30967,
                  "TotalDeaths": 643,
                  "TotalRecovered": 16116,
                  "ActiveCases": 14208,
                  "DailyConfirmedCases": 1727,
                  "Dailydeaths": 32
                },
                {
                  "Date": "2020/05/31",
                  "TotalConfirmedCases": 32683,
                  "TotalDeaths": 683,
                  "TotalRecovered": 16809,
                  "ActiveCases": 15191,
                  "DailyConfirmedCases": 1716,
                  "Dailydeaths": 40
                },
                {
                  "Date": "2020/06/01",
                  "TotalConfirmedCases": 34357,
                  "TotalDeaths": 705,
                  "TotalRecovered": 17291,
                  "ActiveCases": 16361,
                  "DailyConfirmedCases": 1674,
                  "Dailydeaths": 22
                },
                {
                  "Date": "2020/06/02",
                  "TotalConfirmedCases": 35812,
                  "TotalDeaths": 755,
                  "TotalRecovered": 18313,
                  "ActiveCases": 16744,
                  "DailyConfirmedCases": 1455,
                  "Dailydeaths": 50
                },
                {
                  "Date": "2020/06/03",
                  "TotalConfirmedCases": 37525,
                  "TotalDeaths": 792,
                  "TotalRecovered": 19682,
                  "ActiveCases": 17051,
                  "DailyConfirmedCases": 1713,
                  "Dailydeaths": 37
                },
                {
                  "Date": "2020/06/04",
                  "TotalConfirmedCases": 40792,
                  "TotalDeaths": 848,
                  "TotalRecovered": 21311,
                  "ActiveCases": 18633,
                  "DailyConfirmedCases": 3267,
                  "Dailydeaths": 56
                },
                {
                  "Date": "2020/06/05",
                  "TotalConfirmedCases": 43434,
                  "TotalDeaths": 908,
                  "TotalRecovered": 23088,
                  "ActiveCases": 19438,
                  "DailyConfirmedCases": 2642,
                  "Dailydeaths": 60
                },
                {
                  "Date": "2020/06/06",
                  "TotalConfirmedCases": 45973,
                  "TotalDeaths": 952,
                  "TotalRecovered": 24258,
                  "ActiveCases": 20763,
                  "DailyConfirmedCases": 2539,
                  "Dailydeaths": 44
                },
                {
                  "Date": "2020/06/07",
                  "TotalConfirmedCases": 48285,
                  "TotalDeaths": 998,
                  "TotalRecovered": 24364,
                  "ActiveCases": 22923,
                  "DailyConfirmedCases": 2312,
                  "Dailydeaths": 46
                },
                {
                  "Date": "2020/06/08",
                  "TotalConfirmedCases": 50879,
                  "TotalDeaths": 1080,
                  "TotalRecovered": 26099,
                  "ActiveCases": 23700,
                  "DailyConfirmedCases": 2594,
                  "Dailydeaths": 82
                },
                {
                  "Date": "2020/06/09",
                  "TotalConfirmedCases": 52991,
                  "TotalDeaths": 1162,
                  "TotalRecovered": 29006,
                  "ActiveCases": 22823,
                  "DailyConfirmedCases": 2112,
                  "Daily  deaths": 82
                },
                {
                  "Date": "2020/06/10",
                  "TotalConfirmedCases": 55421,
                  "TotalDeaths": 1210,
                  "TotalRecovered": 31505,
                  "ActiveCases": 22706,
                  "DailyConfirmedCases": 2430,
                  "Dailydeaths": 48
                },
                {
                  "Date": "2020/06/11",
                  "TotalConfirmedCases": 58568,
                  "TotalDeaths": 1284,
                  "TotalRecovered": 33252,
                  "ActiveCases": 24032,
                  "DailyConfirmedCases": 3147,
                  "Dailydeaths": 74
                },
                {
                  "Date": "2020/06/12",
                  "TotalConfirmedCases": 61927,
                  "TotalDeaths": 1354,
                  "TotalRecovered": 35008,
                  "ActiveCases": 25565,
                  "DailyConfirmedCases": 3359,
                  "Dailydeaths": 70
                }
            ]
        }
    }
})