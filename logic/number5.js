// tentukan user yang eyeColor nya blue dan ada berapa jumlah nya

// 1. buat function getEyeColor
function getEyeColor(data){
    // 2. buat variable result berupa array kosong yg nantinya utk menyimpan data yang sudah difilter
    let result = []
    // 3. looping cek semua data 1 1
    for(let i = 0; i < data.length; i++){
        // 4. buat filter untuk user eyeColor blue
        if(data[i].eyeColor === "blue"){
            // 5. push datanya ke variable result
            result.push(data[i])
        }
    }

    // 6. mengembalikan data
    return result
}

const users = [
    {
        "_id": "64f0873bd80eb663848b6dcf",
        "name": "Terra Briggs",
        "eyeColor": "green",
        "age": 35,
        "balance": "$3,105.86",
        "gender": "female",
        "company": "MAXIMIND",
        "email": "terrabriggs@maximind.com",
        "phone": "+1 (932) 480-3039",
        "address": "435 Livonia Avenue, Keyport, Federated States Of Micronesia, 6768",
        "registered": "2017-06-04T09:23:40 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Irfi"
            },
            {
            "id": 1,
            "name": "Alim"
            },
            {
            "id": 2,
            "name": "Adella"
            }
        ],
        "favoriteFruit": "apple"
        },
        {
        "_id": "64f0873b3639550701a7616d",
        "name": "Earline Fulton",
        "eyeColor": "blue",
        "age": 26,
        "balance": "$3,223.89",
        "gender": "female",
        "company": "GINKLE",
        "email": "earlinefulton@ginkle.com",
        "phone": "+1 (977) 576-3497",
        "address": "963 Garden Street, Jugtown, Louisiana, 8124",
        "registered": "2016-02-24T07:08:23 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Imam"
            },
            {
            "id": 1,
            "name": "Adella"
            },
            {
            "id": 2,
            "name": "Imam"
            }
        ],
        "favoriteFruit": "banana"
        },
        {
        "_id": "64f0873b6f1d88fde7bc7ae9",
        "name": "Ava Holland",
        "eyeColor": "green",
        "age": 37,
        "balance": "$3,391.03",
        "gender": "female",
        "company": "SPEEDBOLT",
        "email": "avaholland@speedbolt.com",
        "phone": "+1 (852) 532-2296",
        "address": "164 Amity Street, Utting, Kentucky, 7033",
        "registered": "2017-05-12T01:28:23 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Adrian"
            },
            {
            "id": 1,
            "name": "Adella"
            },
            {
            "id": 2,
            "name": "Grace"
            }
        ],
        "favoriteFruit": "apple"
        },
        {
        "_id": "64f0873bc20a6ad9a2146bad",
        "name": "Villarreal William",
        "eyeColor": "blue",
        "age": 39,
        "balance": "$2,815.63",
        "gender": "male",
        "company": "VISUALIX",
        "email": "villarrealwilliam@visualix.com",
        "phone": "+1 (946) 499-3563",
        "address": "764 Cherry Street, Graball, Texas, 9175",
        "registered": "2016-09-05T10:40:50 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Grace"
            },
            {
            "id": 1,
            "name": "Grace"
            },
            {
            "id": 2,
            "name": "Imam"
            }
        ],
        "favoriteFruit": "banana"
        },
        {
        "_id": "64f0873b73ce9a4e6c1155fb",
        "name": "Monica Contreras",
        "eyeColor": "brown",
        "age": 30,
        "balance": "$1,245.27",
        "gender": "female",
        "company": "SENMEI",
        "email": "monicacontreras@senmei.com",
        "phone": "+1 (907) 428-2705",
        "address": "788 Macdougal Street, Newcastle, Oklahoma, 7823",
        "registered": "2020-09-17T01:16:41 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Adrian"
            },
            {
            "id": 1,
            "name": "Irfi"
            },
            {
            "id": 2,
            "name": "Grace"
            }
        ],
        "favoriteFruit": "strawberry"
        },
        {
        "_id": "64f0873b1d9164403e3fe13b",
        "name": "Betty Fletcher",
        "eyeColor": "green",
        "age": 29,
        "balance": "$2,759.56",
        "gender": "female",
        "company": "INTERLOO",
        "email": "bettyfletcher@interloo.com",
        "phone": "+1 (910) 493-3522",
        "address": "408 Gelston Avenue, Oceola, North Dakota, 5404",
        "registered": "2019-10-22T04:57:59 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Alim"
            },
            {
            "id": 1,
            "name": "Adella"
            },
            {
            "id": 2,
            "name": "Alim"
            }
        ],
        "favoriteFruit": "strawberry"
        },
        {
        "_id": "64f0873b2afdad5c25834bf6",
        "name": "Grace Perkins",
        "eyeColor": "blue",
        "age": 40,
        "balance": "$3,152.90",
        "gender": "female",
        "company": "ECSTASIA",
        "email": "graceperkins@ecstasia.com",
        "phone": "+1 (997) 530-2373",
        "address": "823 Paerdegat Avenue, Croom, Colorado, 3298",
        "registered": "2016-12-03T09:11:34 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Grace"
            },
            {
            "id": 1,
            "name": "Alim"
            },
            {
            "id": 2,
            "name": "Adella"
            }
        ],
        "favoriteFruit": "strawberry"
        },
        {
        "_id": "64f0873b6eddaeed32a85b8c",
        "name": "Carmella Raymond",
        "eyeColor": "brown",
        "age": 37,
        "balance": "$3,491.93",
        "gender": "female",
        "company": "ZOINAGE",
        "email": "carmellaraymond@zoinage.com",
        "phone": "+1 (864) 515-2800",
        "address": "383 Irving Street, Whipholt, Vermont, 3809",
        "registered": "2015-02-07T02:27:38 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Irfi"
            },
            {
            "id": 1,
            "name": "Grace"
            },
            {
            "id": 2,
            "name": "Imam"
            }
        ],
        "favoriteFruit": "banana"
        },
        {
        "_id": "64f0873b730d5afe1dd567c1",
        "name": "Taylor Dean",
        "eyeColor": "green",
        "age": 35,
        "balance": "$3,740.06",
        "gender": "male",
        "company": "KOG",
        "email": "taylordean@kog.com",
        "phone": "+1 (802) 550-3768",
        "address": "524 Dinsmore Place, Austinburg, Utah, 771",
        "registered": "2018-07-21T02:48:34 -07:00",
        "friends": [
            {
            "id": 0,
            "name": "Adrian"
            },
            {
            "id": 1,
            "name": "Grace"
            },
            {
            "id": 2,
            "name": "Grace"
            }
        ],
        "favoriteFruit": "banana"
    }
]

console.log(getEyeColor(users))
console.log(`Jumlah user yang eyeColor blue ada ${getEyeColor(users).length}`)