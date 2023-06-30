class TranslucentImagePawn {
    setup() {
        this.subscribe(this.id, "2dModelLoaded", "pngLoaded");

        if (this.shape.children[0]) {
            this.pngLoaded();
        }
    }

    pngLoaded() {
        let mesh = this.shape.children[0];
        if (!mesh) {console.error("not loaded");}
        let material = mesh.material;

        let setAlpha = (m) => {
            let alphaTest = this.actor._cardData.alphaTest !== undefined
                ? this.actor._cardData.alphaTest
                : 0.5;
            if (m.transparent !== undefined) {
                m.transparent = true;
                m.alphaTest = alphaTest;
            }
        };

        if (Array.isArray(material)) {
            setAlpha(material[0]);
            material[1].opacity = 0;
            material[1].transparent = true;
        } else {
            setAlpha(material);
        }
    }
}

export default {
    modules: [
        {
            name: "TranslucentImage",
            pawnBehaviors: [TranslucentImagePawn]
        }
    ]
}

