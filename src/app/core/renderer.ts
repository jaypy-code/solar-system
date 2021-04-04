import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

interface IRendererProperty {
    canvas: HTMLCanvasElement
    width?: number
    height?: number
}

interface IRendererSize {
    width: number
    height: number
}

export class Renderer {
    public webgl: WebGLRenderer;

    constructor(property: IRendererProperty) {
        this.webgl = new WebGLRenderer({
            canvas: property.canvas,
            alpha: true,
        });

        if (!property.width) property.width = window.innerWidth;
        if (!property.height) property.height = window.innerHeight;

        this.setSizeAndPixel({ width: property.width, height: property.height });

        // listen to window on resized and set renderer size and pixel ratio
        this.updateOnWindowResized();
    }

    public setSizeAndPixel(size: IRendererSize = { width: window.innerWidth, height: window.innerHeight }) {
        this.webgl.setSize(size.width, size.height);
        this.webgl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    public render(scene: Scene, camera: PerspectiveCamera) {
        this.webgl.render(scene, camera);
    }

    private updateOnWindowResized() {
        window.addEventListener('resize', () => {
            this.setSizeAndPixel();
        });
    }
}