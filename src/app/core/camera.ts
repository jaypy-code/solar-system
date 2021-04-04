import { PerspectiveCamera } from 'three';
import { ILocation } from './interfaces/location';

interface ICameraProperty {
    angle: number
    width: number
    height: number
    near: number
    far: number
}

interface ICameraAspect {
    width: number
    height: number
}

export class Camera {
    public perspective: PerspectiveCamera;

    constructor(property: ICameraProperty = { angle: 75, width: window.innerWidth, height: window.innerHeight, near: 0.1, far: 100 }) {
        if (!property.width) property.width = window.innerWidth;
        if (!property.height) property.height = window.innerHeight;

        this.perspective = new PerspectiveCamera(
            property.angle || 75,
            property.width / property.height,
            property.near || 0.1,
            property.far || 100,
        );

        // listen to window on resized and change aspect size and update camera matrix
        this.updateOnWindowResized();
    }

    public setLocation(location: ILocation) {
        this.perspective.position.set(location.x, location.y, location.z);
    }

    public setRotation(location: ILocation) {
        this.perspective.rotation.set(location.x, location.y, location.z);
    }

    public setAspect(aspect: ICameraAspect = { width: window.innerWidth, height: window.innerHeight }) {
        this.perspective.aspect = aspect.width / aspect.height;
    }

    public updateMatrix() {
        this.perspective.updateProjectionMatrix();
    }

    private updateOnWindowResized() {
        window.addEventListener('resize', () => {
            this.setAspect();
            this.updateMatrix();
        });
    }
}