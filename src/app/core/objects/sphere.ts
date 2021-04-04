import { SphereGeometry, Mesh } from 'three';
import { Material } from './material';
import { Texture } from '../extends/texture';

interface ISphereProperty {
    redius: number
    widthSegments: number
    heightSegments: number
    material: Material
}

export class Sphere extends Texture {
    public geometry: SphereGeometry;
    public material: Material;

    constructor(property: ISphereProperty) {
        super(property.material);

        this.geometry = new SphereGeometry(property.redius, property.widthSegments, property.heightSegments);
        this.material = property.material;
    }

    public render(): Mesh {
        return new Mesh(this.geometry, this.material)
    }
}