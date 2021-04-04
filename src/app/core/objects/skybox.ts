import { MeshBasicMaterial, TextureLoader, BackSide, Mesh } from "three";
import gsap from 'gsap';
import { Box } from "./box";
import { Material } from "./material";

interface ISkyboxProperty {
    path: string
}

export class Skybox {
    public images: string[];
    public box: Mesh | undefined;

    constructor(property: ISkyboxProperty) {
        this.images = this.makeImages(property.path);
    }

    private makeImages(path: string): string[] {
        let sides = ['ft', 'bk', 'up', 'dn', 'rt', 'lf'];
        return sides.map((side) => `${path}/${side}.png`);
    }

    private async makeMaterials(): Promise<Material[]> {
        let materials: Material[] = [];
        for (let image of this.images) {
            let loader = await new TextureLoader().loadAsync(image);
            let material = new MeshBasicMaterial({ map: loader, side: BackSide })
            materials.push(material);
        }
        return materials;
    }

    public async render(): Promise<Mesh> {
        let materials: any = await this.makeMaterials();
        let box = new Box({
            width: 200,
            height: 200,
            depth: 200,
            material: materials,
        });
        let mesh = box.render();

        mesh.position.z = 30;
        mesh.position.x = 25;

        gsap.to(mesh.rotation, {
            z: Math.PI * 2,
            duration: 300,
            repeat: -1,
            ease: 'none'
        })

        return mesh;
    }
}