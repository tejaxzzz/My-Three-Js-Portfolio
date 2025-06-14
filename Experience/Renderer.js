import * as THREE from "three";
import Experience from "./Experience.js";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    // console.log(this.camera);

    this.setRenderer();
    
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });

    // renderer settings
    this.renderer.useLegacyLights = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.80; // start from 1.25, adjust as needed
    
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    // screen 1
    this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);
    this.renderer.render(this.scene, this.camera.orthographicCamera);

    // screen 2
    // this.renderer.setScissorTest(true);
    // this.renderer.setViewport(
    //   this.sizes.width - this.sizes.width / 3,
    //   this.sizes.height - this.sizes.height / 3,
    //   this.sizes.width / 3,
    //   this.sizes.height / 3
    // );
    // this.renderer.setScissor(
    //   this.sizes.width - this.sizes.width / 3,
    //   this.sizes.height - this.sizes.height / 3,
    //   this.sizes.width / 3,
    //   this.sizes.height / 3
    // );

    // this.renderer.render(this.scene, this.camera.perspectiveCamera);

    // this.renderer.setScissorTest(false);
  }
}