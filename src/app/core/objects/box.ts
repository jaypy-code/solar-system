import { BoxGeometry, Mesh } from 'three';
import { Material } from './material';
import { Texture } from '../extends/texture';

interface IBoxProperty {
    width: number
    height: number
    depth: number
    material: Material
}

export class Box extends Texture {
    public geometry: BoxGeometry;
    public material: Material;

    constructor(property: IBoxProperty) {
        super(property.material);

        this.geometry = new BoxGeometry(property.width, property.height, property.depth);
        this.material = property.material;
    }

    public render(): Mesh {
        return new Mesh(this.geometry, this.material)
    }
}