import React, { Component } from "react";
import * as THREE from "three";

export default class Particles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      winHeight: window.innerHeight,
      winWidth: window.innerWidth,
      particleSystem: ~~(Math.random() * 2) === 0 ? this.animate : this.animate2,
      amplitude: 1500,
      frequency: 700
    };

    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }

  componentDidMount() {
    const separation = 1200,
      amountX = this.state.particleSystem === this.animate2 ? 20 : 20,
      amountY = this.state.particleSystem === this.animate2 ? 20 : 20,
      count = 0;

    let camera = null,
      scene = null,
      renderer = null,
      mesh = null,
      geometry = null,
      material = null,
      spheres = [];

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      25000
    );
    camera.position.z = -10000;
    camera.position.x = 200000;
    camera.position.y = 5000;

    scene = new THREE.Scene();

    geometry = new THREE.SphereBufferGeometry(8, 20, 20);
    // material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    // New random color of every single little particle :)

    // Perhaps we can create different colour particles? This we gotta figure out how to use random particle colours.

    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        let mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
        );
        mesh.position.x = ix * separation - (amountX * separation) / 2;
        mesh.position.z = iy * separation - (amountY * separation) / 2;

        mesh.scale.x = mesh.scale.y = mesh.scale.z = 5;
        scene.add(mesh);
        spheres.push(mesh);
      }
    }

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.count = count;
    this.amountX = amountX;
    this.amountY = amountY;
    this.spheres = spheres;
    this.mesh = mesh;

    this.mount.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize);

    this.start();
  }

  componentWillUnmount() {
    /*
    Prevents anything from being lost... Furthermore, allows clean reusability.
    */
    window.removeEventListener("resize", this.onWindowResize);
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  onWindowResize = () => {
    /*
    Window resize method, called via a tradtional JS eventlistener, rather than the React event handler
    system. Set new state, pass callback that reprojects particle effects.
    */
    this.setState(
      {
        winHeight: window.innerHeight,
        winWidth: window.innerWidth
      },
      () => {
        this.camera.aspect = this.state.winWidth / this.state.winHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.state.winWidth, this.state.winHeight);
      }
    );
  };

  onMouseMove = e => {
    this.setState({
      mouseX: (e.clientX - window.innerWidth / 2) * 10,
      mouseY: (e.clientY - window.innerHeight / 2) * 10
    });
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.state.particleSystem);
    }
  };

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    let i = 0;

    // Argh... TODO: Improve.

    for (let ix = 0; ix < this.amountX; ix++) {
      for (let iy = 0; iy < this.amountY; iy++) {
        let sphere = this.spheres[i++];

        // So each one of these things has a amplititude and frequency
        // I have to take these out...

        sphere.position.y =
          -3000 +
          (Math.sin((ix + this.count) * 0.5) *
            (500 + (15 / this.count) * 1000) +
            Math.cos((iy + this.count) * 0.5) *
              (500 + (15 / this.count) * 1000));

        // Lets see how good those browser compilers are at optimising
        // on the fly, I've read that if a if statement is repetitively called
        // in a similiar fashion, the compiler understands this and rewrites it.

        // Lets try to exploit that.

        sphere.position.x +=
          Math.sin((ix + this.count) * 0.1) * 100 +
          Math.cos((iy + this.count) * 0.2) * 100;
        sphere.position.z +=
          Math.sin((ix + this.count) * 0.1) * 70 +
          Math.cos((iy + this.count) * 0.2) * 70;
      }
    }

    // const generate_height = () => {
    //   return Math.random() * (this.amountX * this.amountY);
    // };

    // this.spheres.map(sphere => {
    //   sphere.position.y += Math.sin(generate_height() + this.count * 0.3);
    // });

    this.count += 0.05;

    this.camera.position.x +=
      80 + (this.state.mouseX - this.camera.position.x) * 0.02;
    this.camera.position.y +=
      (-this.state.mouseY - this.camera.position.y) * 0.02;

    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.state.particleSystem);
  };

  animate2 = () => {
    let i = 0;

    // Argh... TODO: Improve.

    for (let ix = 0; ix < this.amountX; ix++) {
      for (let iy = 0; iy < this.amountY; iy++) {
        let sphere = this.spheres[i++];

        sphere.position.y =
          -3000 +
          (Math.sin((ix + this.count) * (0.0007 * this.state.frequency)) *
            this.state.amplitude *
            0.3 +
            Math.cos((iy + this.count) * (0.0009 * this.state.frequency)) *
              this.state.amplitude *
              0.4);

        // Lets see how good those browser compilers are at optimising
        // on the fly, I've read that if a if statement is repetitively called
        // in a similiar fashion, the compiler understands this and rewrites it.

        // Lets try to exploit that.

        // sphere.position.x +=
        //   Math.sin((ix + this.count) * 0.1) * 100 +
        //   Math.cos((iy + this.count) * 0.2) * 100;
        // sphere.position.z +=
        //   Math.sin((ix + this.count) * 0.1) * 70 +
        //   Math.cos((iy + this.count) * 0.2) * 70;
      }
    }

    // const generate_height = () => {
    //   return Math.random() * (this.amountX * this.amountY);
    // };

    // this.spheres.map(sphere => {
    //   sphere.position.y += Math.sin(generate_height() + this.count * 0.3);
    // });

    this.count += 0.05;

    this.camera.position.x +=
      80 + (this.state.mouseX - this.camera.position.x) * 0.02;
    this.camera.position.y +=
      (-this.state.mouseY - this.camera.position.y) * 0.02;

    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.state.particleSystem);
  };

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  onChange(e) {
    this.setState({ amplitude: e.target.value });
  }

  onChange2(e) {
    this.setState({ frequency: e.target.value });
  }

  render() {
    return (
      <div
        id="particles"
        onMouseMove={this.onMouseMove}
        ref={mount => (this.mount = mount)}
      >
        {/* <input
          id="herio"
          type="range"
          min="1"
          max="1500"
          value={this.state.amplitude}
          onChange={this.onChange}
        />
        <input
          id="herio2"
          type="range"
          min="200"
          max="700"
          value={this.state.frequency}
          onChange={this.onChange2}
        /> */}
      </div>
    );
  }
}
