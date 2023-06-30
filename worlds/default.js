// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js", "translucent.js", "shoppingCart.js", "video.js",
    ];

    Constants.DefaultCards = [
        {
            card: {
                layers: ["walk", "pointer"],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],

                translation: [-0.1494026893298741, -0.011999999254941773, -2.5992803230682444],
                scale: [1.8, 1.8, 1.8],
                rotation: [0, 0.013332590284574238, 0, 0.999911117068064],
                name: "/HFH_Founders_002.glb",
                animationClipIndex: 0,
                animationStartTime: 95775,
                dataLocation: "./assets/3d/HFH_Founders_002.glb",
                dataScale: [1.0707728865959072, 1.0707728865959072, 1.0707728865959072],
                fileName: "/HFH_Founders_002.glb",
                modelType: "glb",
                shadow: true,
                // singleSided: true,
                type: "3d",
            
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/HDRi_4pm_1.exr",
                fileName: "/HDRi_4pm_1.exr",
                dataType: "exr",
            }
        },

        {
            card: {
                    translation: [-33.932338144006366, 0.6638823133725895, 13.126275517603487],
                    scale: [4, 4, 4],
                    rotation: [0, -0.9664628663021995, 0, 0.25680640190411336],
                    layers: ["pointer"],
                    name: "/1_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "1.00",
                    title: "Tier 1 Donation",
                    description: "Can help to prevent and treat communicable diseases",
            }
        },

        {
                card: {
                    translation: [-41.358635340676685, 0.6638823133725895, 16.438463795040853],
                    scale: [4, 4, 4],
                    rotation: [0, -0.988479142570056, 0, 0.15135714289047292],
                    layers: ["pointer"],
                    name: "/16_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/16_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/16_Donate.png",
                    textureType: "image",
                    type: "2d",
            
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "16.00",
                    title: "Tier 2 Donation",
                    description: "Can provide 1 health consultation and medical supplies",
            }
        },

        {
            card: {
                    translation: [-49.875967268876856, 0.6638823133725895, 16.047435225518303],  
                    scale: [4, 4, 4],
                    rotation: [0, 0.9844845052431941, 0, 0.1754715331216528],
                    layers: ["pointer"],
                    name: "/30_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/30_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/30_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "30.00",
                    title: "Tier 3 Donation",
                    description: "Can support our healthcare program",
            }
        },

        {
            card: {
                    translation: [-57.72933900121646, 0.6638823133725895, 11.592180935274937],
                    scale: [4, 4, 4],
                    rotation: [0, 0.9459548376720539, 0, 0.3242983889642964],
                    layers: ["pointer"],
                    name: "/50_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/50_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/50_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "50.00",
                    title: "Tier 4 Donation",
                    description: "Can pay 1 teacher to supplement their salary for 1 month",
            }
        },

        {
            card: {
                    translation: [-62.26009472402239, 0.6638823133725895, 4.479009629431562],
                    scale: [4, 4, 4],
                    rotation: [0, 0.8081998327501034, 0, 0.588908337810482],
                    layers: ["pointer"],
                    name: "/65_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/65_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/65_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "65.00",
                    title: "Tier 5 Donation",
                    description: "Can dispatch 1 home water filtration system to a family in need",
            }
        },

        {
            card: {
                    translation: [-62.86048643691159, 0.6638823133725895, -3.3315075603275224],
                    scale: [4, 4, 4],
                    rotation: [0, 0.6953240176452236, 0, 0.7186963965999168],
                    layers: ["pointer"],
                    name: "/100_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/100_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/100_Donate.png",
                    textureType: "image",
                    type: "2d",
            
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "100.00",
                    title: "Tier 6 Donation",
                    description: "Can pay 1 community health worker a 1 month salary stipend",
            
            }
        },

        {
            card: {
                    translation: [-62.86048643691159, 0.6638823133725895, -3.3315075603275224],
                    scale: [4, 4, 4],
                    rotation: [0, 0.6953240176452236, 0, 0.7186963965999168],
                    layers: ["pointer"],
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    name: "/100_Donate.png",
                    cornerRadius: 0.02,
                    description: "Can pay 1 community health worker a 1 month salary stipend",
                    fileName: "/100_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    price: "100.00",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/100_Donate.png",
                    textureType: "image",
                    title: "Tier 6 Donation",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "110.00",
                    title: "Tier 7 Donation",
                    description: "Can give 1 vulnerable person digital cash for basic goods and services",
            
            }
        },

        {
                card: {
                    translation: [-59.87075671612939, 0.6638823133725895, -11.821325394631266],
                    scale: [4, 4, 4],
                    rotation: [0, 0.4434405244163238, 0, 0.8963037996713925],
                    layers: ["pointer"],
                    name: "/400_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/400_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/400_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "400.00",
                    title: "Tier 8 Donation",
                    description: "Can equip 1 farmer and their family with livestock",
            
            }
        },

        {
            card: {
                    translation: [-52.62758861927914, 0.6638823133725895, -17.676282070378598],
                    scale: [4, 4, 4],
                    rotation: [0, 0.1516315101675597, 0, 0.988437092143099],
                    layers: ["pointer"],
                    name: "/750_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/750_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/750_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "750.00",
                    title: "Tier 9 Donation",
                    description: "Can provide 1 mother with financial education and digital cash for 1 year",
            }
        },

        {
            card: {
                    translation: [-42.44559870735459, 0.6638823133725895, -19.38985271120142],
                    scale: [4, 4, 4],
                    rotation: [0, -0.12356924597485418, 0, 0.9923359519080249],
                    layers: ["pointer"],
                    name: "/833_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/833_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/833_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "833.00",
                    title: "Tier 10 Donation",
                    description: "Can plant a micro-orchard to tackle food scarcity",
            }
        },

        {
            card: {
                    translation: [-34.985125704879884, 0.6638823133725895, -16.720840440306333],
                    scale: [4, 4, 4],
                    rotation: [0, -0.2525814242339646, 0, 0.96757564258922],
                    layers: ["pointer"],
                    name: "/1000_Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1000_Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1000_Donate.png",
                    textureType: "image",
                    type: "2d",
            
                    behaviorModules: ["ShoppingCart", "TranslucentImage"],
                    price: "1000.00",
                    title: "Tier 11 Donation",
                    description: "Can grant 1 student a 1 year college scholarship",
            
            }
        },

        {
            card: {
                translation: [6.909744762343963, -0.1351254828040237, -11.273625317421818],
                scale: [3.3237461964437656, 3.3237461964437656, 3.3237461964437656],
                rotation: [0, -0.4279330361560266, 0, 0.903810442828741],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer",],
                name: "Croquet Video 1",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 1.639603,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Creating Access to Education in Haiti.mp4",
                textureType: "video",
                type: "2d",
            }
        },

        {
            card: {
                translation: [38.89036221559769, -0.4435312844080745, 11.608654564613342],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, -0.9995217108678909, 0, 0.030924901030154286],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer",],
                name: "Empowering girls through education in Haiti.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 1.639603,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Empowering girls through education in Haiti.mp4",
                textureType: "video",
                type: "2d",
            }
        },

        {
            card: {
                translation: [48.094239995250234, -0.4435312844080745, -20.7997582672425],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, -0.6988479060598851, 0, 0.7152703014914812],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Hope for Haiti_ An Overview.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Hope for Haiti_ An Overview.mp4",
                textureType: "video",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [10.369387811794471, -0.16569460509036993, -10.515695260643952],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, -0.2085580528741605, 0, -0.9780099889987522],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Rethink Haiti (1).mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Rethink Haiti (1).mp4",
                textureType: "video",
                type: "2d",
                      
            }
        },

        {
            card: {
                translation: [58.9863720830082, -0.0672817498189272, 5.328539464895111],
                scale: [3.3418139380632463, 3.3418139380632463, 3.3418139380632463],
                rotation: [0, -0.9995217108],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "School Inauguration in Morency, Haiti!.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/School Inauguration in Morency, Haiti!.mp4",
                textureType: "video",
                type: "2d",
                       
            }
        },

    ];
}
