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
        "csmLights.js", "shoppingCart.js"
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
                translation: [-62.813580859441814, -0.21702871275905308, -4.4189329317274755],                    //position 1
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.6, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/1 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1_Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart",],
                    price: "1.00",
                    title: "Tier 1 Donation",
                    description: "Can help to prevent and treat communicable diseases",
            }
        },
    ];
}
