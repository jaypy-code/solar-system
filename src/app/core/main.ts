import { Object3D, Scene } from 'three';
import { Camera } from './camera';
import { Renderer } from './renderer';

interface IMainProperty {
    canvas: HTMLCanvasElement
}

export class Main {
    public scene: Scene;
    public camera: Camera;
    public renderer: Renderer;

    constructor(property: IMainProperty) {
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer({ canvas: property.canvas });

        this.scene.add(this.camera.perspective);
    }

    public add(object: Object3D): void {
        this.scene.add(object);
    }

    public render(): void {
        this.renderer.render(this.scene, this.camera.perspective);
    }

    public animate(): void {
        const animate = () => {
            window.requestAnimationFrame(animate);
            this.render();
        }
        animate();
    }
}