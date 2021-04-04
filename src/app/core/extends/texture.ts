import { Color, TextureLoader } from "three";
import { Material } from "../objects/material";

export class Texture {
    material: Material;

    constructor(material: Material) {
        this.material = material;
    }

    setColorTexture(color: number) {
        this.material.color = new Color(color);
    }

    async setImageTexture(src: string) {
        let loader = new TextureLoader();
        this.material.map = await loader.loadAsync(src);
    }
}