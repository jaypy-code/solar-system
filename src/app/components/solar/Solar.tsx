import { Component } from 'react';
import { MeshBasicMaterial } from 'three';
import gsap from 'gsap';
import { Sphere } from '../../core/objects/sphere';
import { Main } from '../../core/main';

import { Planet, planets } from '../../database/plants';
import { Skybox } from '../../core/objects/skybox';

export default class Solar extends Component<{ indexChange: Function }> {
    private index: number = 0;
    private main: Main | undefined;
    private disabled: boolean = false;

    async componentDidMount() {
        let canvas: any = document.getElementById('canvas');
        this.main = new Main({ canvas: canvas });
        this.main.camera.setLocation({
            x: -1.8,
            y: 0,
            z: 2
        });

        this.main.camera.setRotation({
            x: 0,
            y: -0.1,
            z: 0
        });

        let skybox = new Skybox({ path: 'texture/skybox' });
        skybox.render().then(mesh => {
            this.main?.add(mesh);
        });

        for (let i in planets) {
            this.main.add(await this.Planet(planets[i], Number(i)));
        }

        this.main.render();
        this.main.animate();
        this.listenToKeyboard();
    }

    async Planet(planet: Planet, index: number) {
        let sphere: Sphere = new Sphere({
            redius: planet.size,
            widthSegments: 65,
            heightSegments: 65,
            material: new MeshBasicMaterial(),
        });
        await sphere.setImageTexture(`texture/planet/${planet.name}.jpg`);
        let mesh = sphere.render();

        mesh.position.setX(index * 10);

        gsap.to(mesh.rotation, {
            y: Math.PI * 2,
            repeat: -1,
            duration: planet.speed,
            ease: 'none'
        })

        return mesh;
    }

    setCameraViewToPlanet(reverse: boolean = false) {
        if (!this.main) return;
        document.getElementById('content')?.classList.add('hide');
        document.getElementById('player')?.classList.add('hide');
        var x = this.main.camera.perspective.position.x;

        if (reverse) {
            // 8.5 + 0.5 = 9
            x += planets[this.index + 1].size;
            // 9 - 10 = -1
            x -= 10;
            // -1 - 0.8 = -1.8
            x -= planets[this.index].size;
        } else {
            // -1.8 + 0.8  = -1
            x += planets[this.index - 1].size;
            // -1 + 10 = 9
            x += 10;
            // 9 - 0.5 = 8.5
            x -= planets[this.index].size;
        }

        gsap.to(this.main.camera.perspective.position, {
            x: x,
            duration: 3,
        }).then(() => {
            setTimeout(() => {
                this.disabled = false;
            }, 1300);
            document.getElementById('content')?.classList.remove('hide');
            document.getElementById('player')?.classList.remove('hide');
        })
    }

    next() {
        if (this.index + 1 < planets.length) {
            this.index += 1;
            this.emit();
            this.setCameraViewToPlanet();
        }
    }

    previous() {
        if (this.index - 1 >= 0) {
            this.index -= 1;
            this.emit();
            this.setCameraViewToPlanet(true);
        }
    }

    listenToKeyboard() {
        window.addEventListener('keyup', event => {
            if (this.disabled) return;
            else this.disabled = !this.disabled;
            if (event.key === 'ArrowLeft') this.previous();
            else if (event.key === 'ArrowRight') this.next();
        });
    }

    emit() {
        setTimeout(() => {
            this.props.indexChange(this.index)
        }, 500);
    }

    render() {
        return (
            <canvas id="canvas"></canvas>
        );
    }
}